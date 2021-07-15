import { FC } from 'react'
import { Technology } from './Technology'
import classNames from 'classnames'

import styles from './TechItem.module.scss'

interface TechItemProps {
  tech: Technology
}

export const TechItem: FC<TechItemProps> = ({
  tech,
}) => {
  return (
    <div className={styles.TechItem}>
      <div className={styles.TechItemName}>{tech.name}</div>
      <StrengthBar strength={tech.strength} />
    </div>
  )
}

interface StrengthBarProps {
  strength: number
}

const StrengthBar: FC<StrengthBarProps> = ({
  strength,
}) => {
  const MAX_STRENGTH = 10

  return (
    <span className={styles.StrengthBar}>
      {Array(MAX_STRENGTH).fill(null).map((_, index) => (
        <span
          key={index}
          className={classNames(styles.StrengthBarSegment, { [styles.filled]: index < strength })}
        />
      ))}
    </span>
  )
}
