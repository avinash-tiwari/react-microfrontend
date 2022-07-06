// import React, {useState} from 'react'
import React, {useState} from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0);

  const action = (operation) => {
    if(operation==='+'){
        setCounter(counter + 1);
    }else{
        setCounter(counter - 1);
    }
  }
  return (
    <>
        <div>Counter</div>
        <button onClick={()=>action('+')}>You can add 1</button>
        <p>{counter}</p>
        <button onClick={action}>You can subtract 1</button>
    </>
  )
}
