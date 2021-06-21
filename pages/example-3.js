import styles from '@/assets/styles/common.module.scss'
import { useState, useCallback } from 'react'
import { Button } from '@/components'

export default function NextExample3Page() {
  const [isOpen, setIsOpen] = useToggle()

  return (
    <div className={styles.example_3}>
      <div>{isOpen ? 'Открыто' : 'Закрыто'}</div>
      <Button onClick={setIsOpen}>Переключить</Button>
    </div>
  )
}

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)

  // const toggle = useCallback(() => setState(state => !state), [])
  const toggle = () => setState(state => !state)

  return [state, toggle]
}
