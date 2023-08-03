import { FC, ReactElement, useEffect, useRef } from 'react'
import { FractalAnimation } from 'animations/Fractal'
import * as S from './Fractal.styles'

export const Fractal: FC = (): ReactElement => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (!canvasRef.current) return
		FractalAnimation.initializeCanvas(canvasRef.current)
	}, [canvasRef.current])

	return (
		<S.FractalContainer>
			<S.Fractal ref={canvasRef} />
		</S.FractalContainer>
	)
}
