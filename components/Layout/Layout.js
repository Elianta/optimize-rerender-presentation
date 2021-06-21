import styles from './Layout.module.scss'
import { HomeLink } from '@/components'

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.relative}>{children}</div>

      <div className={styles.home}>
        <HomeLink />
      </div>
    </div>
  )
}
