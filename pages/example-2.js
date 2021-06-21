import styles from '@/assets/styles/common.module.scss'
import { useState, useCallback } from 'react'
import { Input } from '@/components'

export default function NextExample2Page() {
  const [values, setValues] = useState({ first: '', second: '' })

  // const onInputChange = useCallback(e => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setValues(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }, [])

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value
    setValues(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form className={styles.example_2} autoComplete="off">
      <Input name="first" value={values.first} onChange={onInputChange} />
      <Input name="second" value={values.second} onChange={onInputChange} />
    </form>
  )
}
