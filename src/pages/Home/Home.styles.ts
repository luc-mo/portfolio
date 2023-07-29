import styled from 'styled-components'

export const Home = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

export const HomeContent = styled.section`
  max-width: 650px;
  width: 100%;

  &:first-of-type {
    margin-bottom: 40px;
  }
`

export const MediaText = styled.span`
  display: block;
  margin-bottom: 8px;
`

export const MediaContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`
