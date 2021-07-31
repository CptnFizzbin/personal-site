import { FC } from 'react'

import { ImgProps } from '../ImgProps'
import AngularSvg from './angular-icon.svg'
import FlaskSvg from './flask-icon.svg'
import JavaSvg from './java-icon.svg'
import MongoDBSvg from './mongodb-icon.svg'
import NodeSvg from './nodejs-icon.svg'
import PostgresSvg from './postgresql-icon.svg'
import PythonSvg from './python-icon.svg'
import ReactSvg from './reactjs-icon.svg'
import RubySvg from './ruby-icon.svg'
import RailsSvg from './ruby-on-rails.svg'
import SailsSvg from './sails-icon.svg'
import SpringSvg from './springio-icon.svg'
import TypeScriptSvg from './typescript-icon.svg'

function createLogoComp (name: string, logo: string): FC<ImgProps> {
  const Component: FC<ImgProps> = ({
    height = 50,
    className,
  }) => (
    <img
      className={className}
      src={logo}
      alt={`${name} logo`}
      style={{ height }}
    />
  )
  Component.displayName = `Logo.${name}`

  return Component
}

export const AngularLogo = createLogoComp('Angular', AngularSvg)
export const JavaLogo = createLogoComp('Java', JavaSvg)
export const FlaskLogo = createLogoComp('Flask', FlaskSvg)
export const PostgresLogo = createLogoComp('Postgres', PostgresSvg)
export const PythonLogo = createLogoComp('Python', PythonSvg)
export const ReactLogo = createLogoComp('React', ReactSvg)
export const RubyLogo = createLogoComp('Ruby', RubySvg)
export const RailsLogo = createLogoComp('Rails', RailsSvg)
export const SpringLogo = createLogoComp('Spring', SpringSvg)
export const SailsLogo = createLogoComp('Sails', SailsSvg)
export const TypeScriptLogo = createLogoComp('TypeScript', TypeScriptSvg)
export const NodeLogo = createLogoComp('Node', NodeSvg)
export const MongoDbLogo = createLogoComp('MongoDB', MongoDBSvg)
