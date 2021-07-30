import { FC } from 'react'

import { ImgProps } from '../ImgProps'
import ReactSvg from './React.svg'
import RubySvg from './Ruby.svg'
import TypeScriptSvg from './Typescript.svg'

const DEFAULT_HEIGHT = 50

export const ReactLogo: FC<ImgProps> = ({
  height = DEFAULT_HEIGHT,
}) => (
  <img src={ReactSvg} alt="React Logo" style={{ height }} />
)

export const RubyLogo: FC<ImgProps> = ({
  height = DEFAULT_HEIGHT,
}) => (
  <img src={RubySvg} alt="Ruby Logo" style={{ height }} />
)

export const TypeScriptLogo: FC<ImgProps> = ({
  height = DEFAULT_HEIGHT,
}) => (
  <img src={TypeScriptSvg} alt="TypeScript Logo" style={{ height }} />
)
