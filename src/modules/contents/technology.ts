import {
  EmotionIcon,
  NextJSIcon,
  NPMIcon,
  ParcelIcon,
  PostgreSQLIcon,
  ReactIcon,
  RollupIcon,
  RustIcon,
  TypescriptIcon,
} from 'ui/icons'
import { IconComponentType } from 'ui/icons/types'

export enum TechnologyName {
  EMOTION = 'emotion',
  NEXTJS = 'nextjs',
  NPM = 'npm',
  PARCEL = 'parcel',
  POSTGRESQL = 'postgresql',
  REACT = 'react',
  ROLLUP = 'rollup',
  RUST = 'rust',
  TYPESCRIPT = 'typescript',
}

export const technology = {
  [TechnologyName.EMOTION]: 'emotion',
  [TechnologyName.NEXTJS]: 'nextjs',
  [TechnologyName.NPM]: 'npm',
  [TechnologyName.PARCEL]: 'parcel',
  [TechnologyName.POSTGRESQL]: 'postgresql',
  [TechnologyName.REACT]: 'react',
  [TechnologyName.ROLLUP]: 'rollup',
  [TechnologyName.RUST]: 'rust',
  [TechnologyName.TYPESCRIPT]: 'typescript',
}

export type Technology = typeof technology[keyof typeof technology]

const config = {
  [TechnologyName.EMOTION]: EmotionIcon,
  [TechnologyName.NEXTJS]: NextJSIcon,
  [TechnologyName.NPM]: NPMIcon,
  [TechnologyName.PARCEL]: ParcelIcon,
  [TechnologyName.POSTGRESQL]: PostgreSQLIcon,
  [TechnologyName.REACT]: ReactIcon,
  [TechnologyName.ROLLUP]: RollupIcon,
  [TechnologyName.RUST]: RustIcon,
  [TechnologyName.TYPESCRIPT]: TypescriptIcon,
}

export const getTechnologyIcon = (name: Technology): IconComponentType =>
  config[name as keyof typeof config]
