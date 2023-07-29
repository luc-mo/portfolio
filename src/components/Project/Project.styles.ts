import styled from 'styled-components'
import { Link as SourceLink } from 'components/Link'
import { P } from 'styles/text'
import { H3 } from 'styles/titles'

export const Project = styled.article`
  max-width: 440px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.current.projectBg};
  border-radius: 10px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`

export const Title = styled(H3)`
  margin-bottom: 0;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Link = styled(SourceLink)`
  &, &:hover {
    border-bottom: none;
  }
`

export const Description = styled(P)`
  margin-bottom: 0;
`
