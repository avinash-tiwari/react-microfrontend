// import { mount } from 'products/ProductsIndex';
// import { Counter } from 'app1/Counter';
import React, { useEffect } from 'react';
const Counter = React.lazy(() => import('app1/Counter'));

function App() {
  useEffect(() => {
    // mount(document.querySelector('#root'));
    window.addEventListener('addToCart',async (event) => {
      console.log("🚀 ~ file: bootstrap.js ~ line 7 ~ window.addEventListener ~ event", event)
    });
  }, [])

  return (
    <div className="App">
      <h1>Testing microftonends</h1>
      <Counter/>
    </div>
  );
}

export default App;
