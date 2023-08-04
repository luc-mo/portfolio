import { FC, ReactElement, useEffect, useRef, memo } from 'react'
import { FractalAnimation } from 'animations/Fractal'
import * as S from './Fractal.styles'

const UnmemoizedFractal: FC = (): ReactElement => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (!canvasRef.current) return
		const { clearCanvas } = FractalAnimation.initializeCanvas(canvasRef.current)

		return () => {
			clearCanvas()
		}
	}, [canvasRef.current])

	return (
		<S.FractalContainer>
			<S.Fractal ref={canvasRef} />
		</S.FractalContainer>
	)
}

export const Fractal = memo(UnmemoizedFractal, () => true)
