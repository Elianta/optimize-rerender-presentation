import styles from './Container.module.scss'
import cn from 'classnames'

export default function Container({ size, className, children }) {
  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.wide]: size === 'wide',
        [styles.halved]: size === 'halved',
        ...(className && { [className]: true }),
      })}
    >
      {children}
    </div>
  )
}
