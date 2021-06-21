import { memo, useState, useEffect, useRef } from 'react'

// Hook
function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef()
  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      // Use this object to keep track of changed props
      const changesObj = {}
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          }
        }
      })
      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj)
      }
    }
    // Finally update previousProps with current props for next hook call
    previousProps.current = props
  })
}

const BigListPureComponent = memo(props => {
  useWhyDidYouUpdate('BigListPureComponent', props)

  console.log("BigListPureComponent Re-Render! - We don't want this to happen too often.")
  return (
    <div style={props.style}>
      <h2>BigListPureComponent</h2>
      <div>
        {[...Array(1000)].map((item, ind) => (
          <div key={ind}>item {ind}</div>
        ))}
      </div>
    </div>
  )
})

BigListPureComponent.displayName = 'BigListPureComponent'
BigListPureComponent.whyDidYouRender = true

const Main = () => {
  const [count, setCount] = useState(0)

  /* use the hook instead of the const to prevent
   ** "BigListPureComponent" from re-rendering wit this component */

  //const bigListStyle = React.useMemo(() => ({ width: "100%" }), []);
  const bigListStyle = { width: '100%' }

  return (
    <div className="Main">
      <h1>Big List (Main Demo)</h1>
      <p>
        Open the console and notice how the heavy list re-renders on every click on "Increase!" even
        though it\'s props are the same.
      </p>
      <div>
        <button onClick={() => setCount(c => c + 1)}>"Increase!" Count: {count}</button>
      </div>
      <BigListPureComponent style={bigListStyle} />
    </div>
  )
}

export default Main
