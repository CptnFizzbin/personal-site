import classNames from 'classnames'
import { FC } from 'react'

import styles from './StrengthBar.module.scss'

interface StrengthBarProps {
  strength: number
}

export const StrengthBar: FC<StrengthBarProps> = ({
  strength,
}) => {
  const MAX_STRENGTH = 5

  return (
    <span className={styles.StrengthBar}>
      {Array(MAX_STRENGTH)
        .fill(null)
        .map((_, index) => Math.floor((index / MAX_STRENGTH) * 100) < strength)
        .map((filled, index) => (
          <span
            key={index}
            className={classNames({
              [styles.StrengthBarSegment]: true,
              [styles.filled]: filled,
            })}
          />
        ))}
    </span>
  )
}
