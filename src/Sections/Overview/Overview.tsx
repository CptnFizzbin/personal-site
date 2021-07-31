import { FC } from 'react'

import { Avatar } from '../../Images/Avatar'
import { ReactLogo, RubyLogo, TypeScriptLogo } from '../../Images/Logos'
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
