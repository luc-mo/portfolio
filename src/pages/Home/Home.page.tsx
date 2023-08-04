import { FC, ReactElement } from 'react'
import * as S from './Home.styles'

import { useLang } from 'hooks'
import { H1 } from 'styles/titles'
import { P, Italic } from 'styles/text'

import { Link } from 'components/Link'
import { Github } from 'assets/Github'
import { LinkedIn } from 'assets/LinkedIn'
import { Twitter } from 'assets/Twitter'
import { Twitch } from 'assets/Twitch'

export const Home: FC = (): ReactElement => {
	const { home, utils } = useLang()

	return (
		<S.Home>
			<S.HomeContent>
				<H1>Luciano Morales</H1>
				<P>{home.description}</P>
				<P>
					{home.work}{' '}
					<Link to='https://qubosystems.com' external>
						Qubo Systems
					</Link>
					, {home.technologies} <Italic>Typescript</Italic>,{' '}
					<Italic>React</Italic> {utils.and} <Italic>Node.js</Italic>.
				</P>
				<P>
					{home.leisure} <Italic>open source</Italic> {home.events}
				</P>
				<P>{home.hobbies}</P>
			</S.HomeContent>
			<S.HomeContent>
				<P>
					<S.MediaText>{home.media}</S.MediaText>
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
