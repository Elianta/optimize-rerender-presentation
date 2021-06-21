import { useWhyDidYouUpdate } from '@/hooks'
import { forwardRef, useRef } from 'react'
import styles from './Button.module.scss'
import mergeRefs from 'react-merge-refs'
import cn from 'classnames'

const Button = forwardRef((props, buttonRef) => {
  const {
    name = '',
    component: Component = 'button',
    color = 'default',
    size = 'default',
    disabled = false,
    className,
    children,
    ...rest
  } = props
  useWhyDidYouUpdate(`Button ${name}`, props)
  const ref = useRef(null)

  return (
    <Component
      ref={mergeRefs([ref, buttonRef])}
      className={cn(
        styles.button,
        {
          [styles.transparent]: color === 'transparent',
          [styles.small]: size === 'small',
          [styles.large]: size === 'large',
        },
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      <span className={styles.content}>{children}</span>
    </Component>
  )
})

export default Button
