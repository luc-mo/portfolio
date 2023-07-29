import { FC, ReactElement, SVGAttributes } from 'react'
import { SvgIcon } from 'styles/svg'

export const LinkedIn: FC<SVGAttributes<SVGElement>> = ({
	width = 22,
	height = 22,
	strokeWidth = 2,
}): ReactElement => {
	return (
		<SvgIcon
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			$hasStroke={true}
			aria-hidden
		>
			<path
				d='M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7'
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011'
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</SvgIcon>
	)
}
