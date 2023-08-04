import styled from 'styled-components'
import { Loading as SourceLoading } from 'styles/utils'

export const ProjectGroup = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2.6rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  place-items: center;
  gap: 1.4rem;
  max-width: 1200px;
  width: 100%;
`

export const Loading = styled(SourceLoading)`
  max-width: 440px;
  min-height: 130px;
`
