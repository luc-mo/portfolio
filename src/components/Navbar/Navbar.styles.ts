import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.8rem;
  padding: 2rem;

  @media screen and (orientation: portrait) {
    justify-content: space-evenly;
  }
`

export const NavItem = styled.span`
  ${({ theme }) => theme.utils.flexCenter};
  position: relative;
  color: ${({ theme }) => theme.current.navUrl};
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  & > svg {
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover > svg {
    opacity: 1;
  }
`
