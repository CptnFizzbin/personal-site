import { FC } from 'react'

import { PageHeader } from './PageHeader'

import styles from './PageSidebar.module.scss'

export const PageSidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <PageHeader expanded={false} />
    </div>
  )
}
