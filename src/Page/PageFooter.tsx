import { FC } from 'react'

import styles from './PageFooter.module.scss'

export const PageFooter: FC = () => {
  return (
    <div className={styles.PageFooter}>
      <span className={styles.FooterLeft}>
        <a href={'https://github.com/zeragamba'} target="_blank" rel="noreferrer">GitHub</a>
      </span>
      <span className={styles.FooterCenter}>
        <a href={'/resume.pdf'} target="_blank" rel="noreferrer">Printable</a>
      </span>
      <span className={styles.FooterRight}>
        <a href={'mailto:contact@stephenawilson.ca'}>contact@stephenawilson.ca</a>
      </span>
    </div>
  )
}
