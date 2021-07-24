import { FC } from 'react'

import styles from './NamePlate.module.scss'

export const NamePlate: FC = () => {
  return <div className={styles.NamePlate}>
    Stephen A. Wilson

    <div className={styles.subtitle}>
      Full-Stack Developer
    </div>
  </div>
}
