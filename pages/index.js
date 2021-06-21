import styles from '@/assets/styles/common.module.scss'
import { Button, Title } from '@/components'
import Link from 'next/link'

export default function NextHomePage() {
  return (
    <div className={styles.homePage}>
      <Title size={28}>Борьба с лишними ре-рендерами</Title>

      <ul className={styles.homePage_List}>
        <li className={styles.homePage_Item}>
          <h2>Props</h2>
          <Link href="/example-1" passHref>
            <Button component="a">Вперед {'>'}</Button>
          </Link>
        </li>

        <li className={styles.homePage_Item}>
          <h2>Event handlers</h2>
          <Link href="/example-2" passHref>
            <Button component="a">Вперед {'>'}</Button>
          </Link>
        </li>

        <li className={styles.homePage_Item}>
          <h2>Hooks</h2>
          <Link href="/example-3" passHref>
            <Button component="a">Вперед {'>'}</Button>
          </Link>
        </li>

        <li className={styles.homePage_Item}>
          <h2>Context</h2>
          <Link href="/example-4" passHref>
            <Button component="a">Вперед {'>'}</Button>
          </Link>
        </li>

        <li className={styles.homePage_Item}>
          <h2>Context - Custom fix</h2>
          <Link href="/example-5" passHref>
            <Button component="a">Вперед {'>'}</Button>
          </Link>
        </li>

        <li className={styles.homePage_Item}>
          <h2>Context - Hook fix</h2>
          <Link href="/example-6" passHref>
            <Button component="a">Вперед {'>'}</Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}
