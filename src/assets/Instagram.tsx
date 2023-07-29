import { FC, ReactElement, SVGAttributes } from 'react'
import { SvgIcon } from 'styles/svg'

export const Instagram: FC<SVGAttributes<SVGElement>> = ({
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
				d='M12 16a4 4 0 100-8 4 4 0 000 8z'
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z'
				strokeWidth={strokeWidth}
			/>
			<path
				d='M17.5 6.51l.01-.011'
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</SvgIcon>
	)
}
