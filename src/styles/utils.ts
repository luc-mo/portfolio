import styled from 'styled-components'

export const Loading = styled.div`
  ${({ theme }) => theme.utils.flexCenter};
  width: 100%;
  height: 100%;
  background-color: transparent;

  &::before {
    content: '';
    width: 50px;
    height: 50px;
    opacity: 0.3;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.current.loadingBorder};
    animation: spin 2s linear infinite;
    border-top-color: transparent;
    animation-direction: normal;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.current.divider};
`
