import times from 'lodash.times'
import { useState, useMemo, memo } from 'react'
import { useWhyDidYouUpdate } from '@/hooks'
import { Button, Title } from '@/components'
import styles from '@/assets/styles/common.module.scss'

export default function NextExample1Page() {
  const [count, setCount] = useState(0)

  //   const bigListStyle = useMemo(() => ({ borderTop: '1px solid var(--clr-primary)', paddingTop: '12px' }), [])
  const bigListStyle = { borderTop: '1px solid var(--clr-primary)', paddingTop: '12px' }

  return (
    <div className={styles.example_1}>
      <Title size={28}>Большой список</Title>

      <div>
        <Button onClick={() => setCount(prev => prev + 1)}>Increase! Count: {count}</Button>
      </div>
      <BigList style={bigListStyle} />
    </div>
  )
}

const BigList = memo(props => {
  useWhyDidYouUpdate('BigList', props)

  return (
    <div style={props.style}>
      <ul>
        {times(1000).map(n => (
          <li key={n}>Element #{n}</li>
        ))}
      </ul>
    </div>
  )
})
