import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem;
`

export const NavItem = styled.span`
  ${({ theme }) => theme.utils.flexCenter};
  color: ${({ theme }) => theme.current.navUrl};
  font-size: 18px;
  opacity: 0.6;
  transition: color 0.3s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
