import styles from './Text.module.scss'
import cn from 'classnames'

export default function Text({ size = 16, mark, children }) {
  const Wrapper = mark ? 'mark' : 'span'

  return (
    <span className={cn(styles.text, styles[`size-${size}`])}>
      <Wrapper>{children}</Wrapper>
    </span>
  )
}
