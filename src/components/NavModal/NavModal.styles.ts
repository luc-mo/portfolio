import styled from 'styled-components'

export const NavModal = styled.ul`
  position: absolute;
  top: calc(100% + 1rem);
  right: -8px;
  background-color: ${({ theme }) => theme.current.modalBg};
  color: ${({ theme }) => theme.current.navUrl};
  list-style: none;
  border-radius: 6px;
  z-index: 1;

  & > div {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.current.divider};
  }

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 12px;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.current.modalBg};
    border-radius: 2px;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    transform: rotate(-45deg);
    z-index: -1;
  }
`

export const NavModalItem = styled.li`
  min-width: 100px;
  padding: 10px 1rem;
  white-space: nowrap;
  cursor: default;
  
  &:first-of-type {
    border-radius: 6px 6px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 6px 6px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.current.modalBgHover};
  }
`
