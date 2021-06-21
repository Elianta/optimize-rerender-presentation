import { forwardRef, useRef, memo, useCallback } from 'react'
import { useWhyDidYouUpdate } from '@/hooks'
import styles from './Input.module.scss'
import mergeRefs from 'react-merge-refs'
import cn from 'classnames'

const Input = memo(
  forwardRef((props, inputRef) => {
    const {
      id,
      name,
      value,
      onChange,
      placeholder = '',
      danger = false,
      disabled = false,
      type = 'text',
      inputMode = 'text',
    } = props
    useWhyDidYouUpdate(`Input ${name}`, props)
    const ref = useRef(null)

    const _onChange = useCallback(
      e => {
        if (onChange) onChange(e)
      },
      [onChange],
    )

    return (
      <input
        id={id}
        ref={mergeRefs([ref, inputRef])}
        name={name}
        value={value}
        onChange={_onChange}
        className={cn(styles.input, { [styles.danger]: danger })}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        inputMode={inputMode}
        autoComplete="off"
      />
    )
  }),
)

export default Input
