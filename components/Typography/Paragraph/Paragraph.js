import styles from './Paragraph.module.scss'
import cn from 'classnames'

export default function Paragraph({ medium = false, align = 'left', children }) {
  return (
    <div
      className={cn(styles.paragraph, {
        [styles.medium]: medium,
        [styles.center]: align === 'center',
      })}
    >
      {children}
    </div>
  )
}
