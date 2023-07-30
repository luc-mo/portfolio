import styled from 'styled-components'
import { NavLink as SourceNavLink } from 'react-router-dom'

export const NavLink = styled(SourceNavLink)`
  ${({ theme }) => theme.utils.flexCenter};
  color: ${({ theme }) => theme.current.navUrl};
  font-size: 18px;
  text-decoration: none;
  opacity: 0.6;
  transition: color 0.3s ease-in-out, opacity 0.2s ease-in-out;
  
  &.active, &:hover {
    opacity: 1;
  }
`
