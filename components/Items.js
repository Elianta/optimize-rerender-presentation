import times from 'lodash.times'

export default function Items({ quantity = 10, text = 'Item' }) {
  console.log(`${text}s render`)

  return (
    <ul>
      {times(quantity).map(n => (
        <li key={n}>
          {text} #{n}
        </li>
      ))}
    </ul>
  )
}
