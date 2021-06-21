import { NavProvider, useNav } from '@/contexts/NavContextFixCustom'
import { HeaderFixCustom, Dropdown, Items } from '@/components'
import { memo } from 'react'

export default function NextContext1Page() {
  return (
    <NavProvider>
      <HeaderFixCustom />
      <Menu />
      <User />
    </NavProvider>
  )
}

function Menu() {
  const { toggleMenu, visibility } = useNav()

  return <MemoizedMenu toggleMenu={toggleMenu} visible={visibility.menu} />
}

const MemoizedMenu = memo(({ toggleMenu, visible }) => (
  <Dropdown onClose={toggleMenu} visible={visible} name="Menu Item">
    <Items quantity={10} text="Menu Item" />
  </Dropdown>
))

function User() {
  const { toggleUser, visibility } = useNav()

  return <MemoizedUser toggleUser={toggleUser} visible={visibility.user} />
}

const MemoizedUser = memo(({ toggleUser, visible }) => (
  <Dropdown onClose={toggleUser} visible={visible} right name="User Item">
    <Items quantity={10} text="User Item" />
  </Dropdown>
))
