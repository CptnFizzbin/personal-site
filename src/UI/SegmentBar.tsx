import classNames from 'classnames'
import { FC } from 'react'

import styles from './SegmentBar.module.scss'

export const SegmentBarHover = styles.SegmentBarHover

interface StrengthBarProps {
  value: number
  segments?: number
  label?: string
  hovered?: boolean
}

export const SegmentBar: FC<StrengthBarProps> = ({
  value,
  segments = 5,
  label,
  hovered = false,
}) => {
  return (
    <div className={classNames(styles.Container, { [styles.hover]: hovered })}>
      {label && (<div className={styles.Label}>{label}</div>)}
      <div className={styles.Bar}>
        {Array(segments).fill(false)
          .map((_, index) => index < value)
          .map((filled, index) => (
            <span
              key={index}
              className={classNames({
                [styles.Segment]: true,
                [styles.filled]: filled,
              })}
            />
          ))}
      </div>
    </div>
  )
}
