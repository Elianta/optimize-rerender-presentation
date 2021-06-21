import { useNav } from '@/contexts/NavContextFixCustom'
import { Burger, Button } from '@/components'
import styles from './Header.module.scss'
import { memo } from 'react'

export default function Header() {
  const { visibility, toggleMenu, toggleUser } = useNav()

  return (
    <MemoizedHeader
      visibilityMenu={visibility.menu}
      toggleMenu={toggleMenu}
      toggleUser={toggleUser}
    />
  )
}

const MemoizedHeader = memo(({ visibilityMenu, toggleMenu, toggleUser }) => (
  <div className={styles.header}>
    <Burger open={visibilityMenu} onClick={toggleMenu} />
    <Button onClick={toggleUser} name="User Toggle">
      User Toggle
    </Button>
  </div>
))
