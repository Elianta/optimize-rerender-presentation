import Link from 'next/link'
import { Button } from '@/components'

export default function HomeLink() {
  return (
    <Link href="/" passHref>
      <Button component="a">На Главную</Button>
    </Link>
  )
}
