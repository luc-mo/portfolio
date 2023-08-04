import { FC, ReactElement } from 'react'
import * as S from './Home.styles'

import { H1 } from 'styles/titles'
import { P, Italic } from 'styles/text'

import { Link } from 'components/Link'
import { Github } from 'assets/Github'
import { LinkedIn } from 'assets/LinkedIn'
import { Twitter } from 'assets/Twitter'
import { Twitch } from 'assets/Twitch'

export const Home: FC = (): ReactElement => {
	return (
		<S.Home>
			<S.HomeContent>
				<H1>Luciano Morales</H1>
				<P>Hola, soy Luciano Morales, un desarrollador de software.</P>
				<P>
					Actualmente trabajo en una empresa costarricense llamada{' '}
					<Link to='https://qubosystems.com' external>
						Qubo Systems
					</Link>
					, desarrollando aplicaciones web con <Italic>Typescript</Italic>,{' '}
					<Italic>React</Italic> y <Italic>Node.js</Italic>.
				</P>
				<P>
					Durante mi tiempo libre participo activamente en una comunidad de
					desarrolladores y diseñadores, realizando proyectos{' '}
					<Italic>open source</Italic> y participando en una variedad de
					talleres, charlas y eventos.
				</P>
				<P>
					Fuera del mundo de la programación, me gusta mucho la música y
					practico una variedad de instrumentos, principalmente la guitarra y el
					piano.
				</P>
			</S.HomeContent>
			<S.HomeContent>
				<P>
					<S.MediaText>Mis redes</S.MediaText>
					<S.MediaContainer>
						<Link title='Github' to='https://github.com/luc-mo' external>
							<Github /> Github
						</Link>
						<Link
							title='LinkedIn'
							to='https://www.linkedin.com/in/lucmoralesr'
							external
						>
							<LinkedIn /> LinkedIn
						</Link>
						<Link title='Twitter' to='https://twitter.com/_SnowDrive_' external>
							<Twitter /> Twitter
						</Link>
						<Link title='Twitch' to='https://www.twitch.tv/snowdrive1' external>
							<Twitch /> Twitch
						</Link>
					</S.MediaContainer>
				</P>
			</S.HomeContent>
		</S.Home>
	)
}
