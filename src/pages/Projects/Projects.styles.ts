import styled from 'styled-components'

export const Projects = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
  max-width: 1200px;
`
