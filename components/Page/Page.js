import styles from './Page.module.scss'

export default function Page({ children }) {
  return (
    <div className={styles.wrap}>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
