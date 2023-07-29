import { FC, ReactElement, SVGAttributes } from 'react'
import { SvgIcon } from 'styles/svg'

export const Twitter: FC<SVGAttributes<SVGElement>> = ({
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
				d='M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z'
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</SvgIcon>
	)
}
