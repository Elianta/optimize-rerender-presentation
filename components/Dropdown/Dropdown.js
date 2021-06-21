import styles from './Dropdown.module.scss'
import { Button } from '@/components'
import cn from 'classnames'

export default function Dropdown({ visible = false, onClose, right = false, name, children }) {
  return (
    <div
      className={cn(styles.dropdown, {
        [styles.dropdown__Visible]: visible,
        [styles.dropdown__Right]: right,
      })}
    >
      <Button className={styles.close} onClick={onClose} size="small" name={`${name} Close`}>
        X
      </Button>
      {children}
    </div>
  )
}
