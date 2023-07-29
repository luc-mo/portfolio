import { FC, ReactElement, SVGAttributes } from 'react'
import { SvgIcon } from 'styles/svg'

export const Github: FC<SVGAttributes<SVGElement>> = ({
	width = 20,
	height = 20,
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
				d='M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3'
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</SvgIcon>
	)
}
