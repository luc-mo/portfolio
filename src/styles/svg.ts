import styled from 'styled-components'

export interface SvgIconProps {
	$hasStroke?: boolean
	$hasFill?: boolean
}

export const SvgIcon = styled.svg<SvgIconProps>`
  ${({ theme, $hasStroke }) =>
		$hasStroke && `stroke: ${theme.current.iconStroke}`}
  ${({ theme, $hasFill }) => $hasFill && `fill: ${theme.current.iconFill}`}
`
