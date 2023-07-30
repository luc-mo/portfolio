import styled, { css } from 'styled-components'

export const H = css`
  color: ${({ theme }) => theme.current.title};
  transition: color 0.3s ease-in-out;
`

export const H1 = styled.h1`
  ${H}
  margin-bottom: 2rem;
  font-size: 2.6rem;
`

export const H2 = styled.h2`
  ${H}
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  opacity: 0.6;
`

export const H3 = styled.h3`
  ${H}
  margin-bottom: 1.2rem;
  font-size: 1rem;
`
