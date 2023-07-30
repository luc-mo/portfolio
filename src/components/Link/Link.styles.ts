import styled from 'styled-components'
import { Link as SourceLink } from 'react-router-dom'

export const Link = styled(SourceLink)`
  ${({ theme }) => theme.utils.inlineFlexCenter}
  gap: 6px;
  color: ${({ theme }) => theme.current.url};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.current.urlBorder};
  transition: color 0.3s ease-in-out, border-bottom 0.2s ease-in-out;
  
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.current.url};
  }
`
