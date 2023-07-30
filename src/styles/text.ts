import styled from 'styled-components'

export const P = styled.p`
  margin-bottom: 18px;
  color: ${({ theme }) => theme.current.text};
  font-size: 18px;
  transition: color 0.3s ease-in-out;
`

export const Italic = styled.span`
  font-style: italic;
`
