import styles from './Title.module.scss'
import cn from 'classnames'

export default function Title({ level = 1, tag, size = 18, align = 'left', children }) {
  const headingTag = `h${level}`
  const Component = tag ? tag : level ? headingTag : 'h1'

  return (
    <Component
      className={cn(styles.title, styles[`size-${size}`], {
        [styles.center]: align === 'center',
      })}
    >
      {children}
    </Component>
  )
}
