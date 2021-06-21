import { NavProvider, useNav } from '@/contexts/NavContext'
import { Header, Dropdown, Items } from '@/components'

export default function NextContext1Page() {
  return (
    <NavProvider>
      <Header />
      <Menu />
      <User />
    </NavProvider>
  )
}

function Menu() {
  const { toggleMenu, visibility } = useNav()

  return (
    <Dropdown onClose={toggleMenu} visible={visibility.menu} name="Menu Item">
      <Items quantity={10} text="Menu Item" />
    </Dropdown>
  )
}

function User() {
  const { toggleUser, visibility } = useNav()

  return (
    <Dropdown onClose={toggleUser} visible={visibility.user} right name="User Item">
      <Items quantity={10} text="User Item" />
    </Dropdown>
  )
}
