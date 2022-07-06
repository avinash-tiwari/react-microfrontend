import React, {useState, useEffect} from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0);

  const action = (operation) => {
    if(operation==='+'){
        setCounter(counter + 1);
    }else{
        setCounter(counter - 1);
    }
  }

  useEffect(()=>{
    if (counter===5) {
      const event = new CustomEvent('addToCart', { detail: 'a custom event from products btn' });
      console.log('CUSTOM EVENT ADDED!!!');
      window.dispatchEvent(event);
    }
  },[counter])
  return (
    <>
        <div>Counter</div>
        <button onClick={()=>action('+')}>You can add 1</button>
        <p>{counter}</p>
        <button onClick={action}>You can subtract 1</button>
    </>
  )
}
