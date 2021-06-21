import { useNav } from '@/contexts/NavContextFixHook'
import { Burger, Button } from '@/components'
import styles from './Header.module.scss'
// import { memo } from 'react'

export default function Header() {
  const visibilityMenu = useNav(ctx => ctx.visibility.menu)
  const toggleMenu = useNav(ctx => ctx.toggleMenu)
  const toggleUser = useNav(ctx => ctx.toggleUser)

  return (
    <div className={styles.header}>
      <Burger open={visibilityMenu} onClick={toggleMenu} />
      <Button onClick={toggleUser} name="User Toggle">
        User Toggle
      </Button>
    </div>
  )
}

// const MemoizedHeader = memo(({ visibilityMenu, toggleMenu, toggleUser }) => (
//   <div className={styles.header}>
//     <Burger open={visibilityMenu} onClick={toggleMenu} />
//     <Button onClick={toggleUser} name="User Toggle">
//       User Toggle
//     </Button>
//   </div>
// ))
