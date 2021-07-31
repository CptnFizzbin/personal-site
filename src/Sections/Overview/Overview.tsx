import { FC } from 'react'

import { Avatar , ReactLogo, RubyLogo, TypeScriptLogo } from '../../Images'
import { NamePlate } from '../../Page/NamePlate'
import scrollDownImg from './scroll-down.png'

import styles from './Overview.module.scss'

export const Overview: FC = () => {
  return (
    <div className={styles.Overview}>
      <Avatar className={styles.Avatar} />
      <NamePlate />
      <div className={styles.TechHighlights}>
        <ReactLogo />
        <RubyLogo />
        <TypeScriptLogo />
      </div>
      <img
        className={styles.ScrollDown}
        src={scrollDownImg}
        alt="Scroll down"
      />
    </div>
  )
}
