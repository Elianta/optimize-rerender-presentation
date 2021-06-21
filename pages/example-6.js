import { NavProvider, useNav } from '@/contexts/NavContextFixHook'
import { HeaderFixHook, Dropdown, Items } from '@/components'

export default function NextContext1Page() {
  return (
    <NavProvider>
      <HeaderFixHook />
      <Menu />
      <User />
    </NavProvider>
  )
}

function Menu() {
  const visibilityMenu = useNav(ctx => ctx.visibility.menu)
  const toggleMenu = useNav(ctx => ctx.toggleMenu)

  return (
    <Dropdown onClose={toggleMenu} visible={visibilityMenu} name="Menu Item">
      <Items quantity={10} text="Menu Item" />
    </Dropdown>
  )
}

function User() {
  const visibilityUser = useNav(ctx => ctx.visibility.user)
  const toggleUser = useNav(ctx => ctx.toggleUser)

  return (
    <Dropdown onClose={toggleUser} visible={visibilityUser} right name="User Item">
      <Items quantity={10} text="User Item" />
    </Dropdown>
  )
}
