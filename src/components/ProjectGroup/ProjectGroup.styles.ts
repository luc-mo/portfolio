import styled from 'styled-components'

export const ProjectGroup = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.6rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.4rem;
  max-width: 1200px;
  width: 100%;
`