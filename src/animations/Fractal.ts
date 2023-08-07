export module FractalAnimation {
	interface ExcecuteValues {
		lastTime: number
		branches: Branch[]
		prevBranches: Branch[]
	}

	interface BranchConstructor {
		ctx: CanvasRenderingContext2D
		x: number
		y: number
		rad: number
		counter?: number
	}

	class Constants {
		static R180 = Math.PI
		static R90 = Math.PI / 2
		static R15 = Math.PI / 12
		static LINE_WIDTH = 1
		static STROKE_STYLE = '#88888825'
		static STROKE_LEN = 6
		static INTERVAL = 1000 / 20

		static COUNTER_THRESHOLD = 7
		static COUNTER_STEP = 1

		static COUNTER_INITIAL_RATE = 0.8
		static COUNTER_RATE = 0.5
	}

	class Utils {
		static random = () => Math.random()
		static randomMiddle = () => Math.random() * 0.6 + 0.2

		static polarToCartesian = (x = 0, y = 0, r = 0, theta = 0) => {
			const dx = r * Math.cos(theta)
			const dy = r * Math.sin(theta)
			return [x + dx, y + dy]
		}

		static initCanvas = (
			canvas: HTMLCanvasElement,
			width = 400,
			height = 400,
			_dpi?: number
		) => {
			const ctx = canvas.getContext('2d')!
			const dpr = window.devicePixelRatio || 1

			const bsr =
				// @ts-ignore vendor
				ctx.webkitBackingStorePixelRatio ||
				// @ts-ignore vendor
				ctx.mozBackingStorePixelRatio ||
				// @ts-ignore vendor
				ctx.msBackingStorePixelRatio ||
				// @ts-ignore vendor
				ctx.oBackingStorePixelRatio ||
				// @ts-ignore vendor
				ctx.backingStorePixelRatio ||
				1
			const dpi = _dpi || dpr / bsr

			canvas.style.width = `${width}px`
			canvas.style.height = `${height}px`
			canvas.width = dpi * width
			canvas.height = dpi * height

			ctx.scale(dpi, dpi)
			ctx.clearRect(0, 0, width, height)
			ctx.lineWidth = Constants.LINE_WIDTH
			ctx.strokeStyle = Constants.STROKE_STYLE

			return { ctx, dpi }
		}

		static executeBranch =
			({ lastTime, branches, prevBranches }: ExcecuteValues) =>
			() => {
				if (performance.now() - lastTime < Constants.INTERVAL) return

				lastTime = performance.now()
				prevBranches = branches
				branches = []

				prevBranches.forEach((branch) => {
					if (!branch) return
					const step = branch.forward()

					if (!step) return
					if (step.left) branches.push(step.left())
					if (step.right) branches.push(step.right())
				})
			}

		static animate = (fn: Function, immediate = true) => {
			let isActive = false
			let frameId: number | null = null

			const loop = () => {
				if (!isActive) return
				fn()
				frameId = requestAnimationFrame(loop)
			}

			const resume = () => {
				if (!isActive) {
					isActive = true
					frameId = requestAnimationFrame(loop)
				}
			}

			const pause = () => {
				isActive = false
				if (frameId !== null) {
					cancelAnimationFrame(frameId)
					frameId = null
				}
			}

			if (immediate) resume()
			return { resume, pause }
		}
	}

	class Branch {
		private _ctx: CanvasRenderingContext2D
		private _x: number
		private _y: number
		private _rad: number
		private _counter: number
		private _nx?: number
		private _ny?: number

		constructor({ ctx, x, y, rad, counter = 0 }: BranchConstructor) {
			this._ctx = ctx
			this._x = x
			this._y = y
			this._rad = rad
			this._counter = counter
			this._draw()
		}

		private _draw() {
			const length = Utils.random() * Constants.STROKE_LEN
			const [nx, ny] = Utils.polarToCartesian(
				this._x,
				this._y,
				length,
				this._rad
			)

			this._nx = nx
			this._ny = ny

			this._ctx.beginPath()
			this._ctx.moveTo(this._x, this._y)
			this._ctx.lineTo(nx, ny)
			this._ctx.stroke()
		}

		forward() {
			if (
				this._nx! < -100 ||
				this._nx! > window.innerWidth + 100 ||
				this._ny! < -100 ||
				this._ny! > window.innerHeight + 100
			)
				return

			const rate =
				this._counter <= Constants.COUNTER_THRESHOLD
					? Constants.COUNTER_INITIAL_RATE
					: Constants.COUNTER_RATE

			const radLeft = this._rad + Utils.random() * Constants.R15
			const radRight = this._rad - Utils.random() * Constants.R15

			const ctx = this._ctx
			const x = this._nx!
			const y = this._ny!
			const counter = this._counter + Constants.COUNTER_STEP

			const left =
				Utils.random() < rate &&
				(() => new Branch({ ctx, x, y, counter, rad: radLeft }))
			const right =
				Utils.random() < rate &&
				(() => new Branch({ ctx, x, y, counter, rad: radRight }))

			return { left, right }
		}
	}

	export const initializeCanvas = (canvas: HTMLCanvasElement) => {
		const { ctx } = Utils.initCanvas(
			canvas,
			window.innerWidth,
			window.innerHeight
		)
		const { width, height } = canvas

		const top = () =>
			new Branch({
				ctx,
				x: Utils.randomMiddle() * window.innerWidth,
				y: -5,
				rad: Constants.R90,
			})
		const right = () =>
			new Branch({
				ctx,
				x: window.innerWidth - Constants.R180 + 5,
				y: Utils.randomMiddle() * window.innerHeight,
				rad: Constants.R180,
			})
		const bottom = () =>
			new Branch({
				ctx,
				x: Utils.randomMiddle() * window.innerWidth,
				y: window.innerHeight + 5,
				rad: -Constants.R90,
			})
		const left = () =>
			new Branch({
				ctx,
				x: -5 - Constants.R180,
				y: Utils.randomMiddle() * window.innerHeight,
				rad: 0,
			})

		const excecuteValues: ExcecuteValues = {
			lastTime: performance.now(),
			branches: [top(), right(), bottom(), left()],
			prevBranches: [],
		}

		const { pause } = Utils.animate(Utils.executeBranch(excecuteValues))

		const clearCanvas = () => {
			pause()
			ctx.clearRect(0, 0, width, height)
			excecuteValues.branches = [top(), right(), bottom(), left()]
		}

		return { clearCanvas }
	}
}
