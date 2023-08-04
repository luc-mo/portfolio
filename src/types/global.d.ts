import { RefAttributes } from 'react'
import {
	LinkProps as SourceLinkProps,
	NavLinkProps as SourceNavLinkProps,
} from 'react-router-dom'

declare global {
	export interface BaseLinkProps
		extends Omit<RefAttributes<HTMLAnchorElement>, 'href' | 'rel' | 'target'> {
		to: string
		external?: boolean
	}

	export type LinkProps = BaseLinkProps & SourceLinkProps
	export type NavLinkProps = BaseLinkProps & SourceNavLinkProps

	export interface DynamicKeys {
		[key: string]: string
	}
}

export {}
