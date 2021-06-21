import { useWhyDidYouUpdate } from '@/hooks'
import styles from './Burger.module.scss'
import cn from 'classnames'
import { memo } from 'react'

const Burger = memo(props => {
  useWhyDidYouUpdate('Burger', props)
  const { open, onClick } = props
  return (
    <div
      className={cn({
        [styles.wrapper]: true,
        [styles.open]: open,
      })}
      onClick={onClick}
    >
      <div className={styles.inner} />
    </div>
  )
})

export default Burger
