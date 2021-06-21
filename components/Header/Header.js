import { useNav } from '@/contexts/NavContext'
import { Burger, Button } from '@/components'
import styles from './Header.module.scss'

export default function Header() {
  const { visibility, toggleMenu, toggleUser } = useNav()

  return (
    <div className={styles.header}>
      <Burger open={visibility.menu} onClick={toggleMenu} />
      <Button onClick={toggleUser} name="User Toggle">
        User Toggle
      </Button>
    </div>
  )
}
