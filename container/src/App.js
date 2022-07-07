// import { mount } from 'products/ProductsIndex';
// import { Counter } from 'app1/Counter';
import React, { useEffect, useState } from 'react';
const Counter = React.lazy(() => import('app1/Counter'));

function App() {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [CurrentComponent, setCurrentComponent] = useState(null);

  const loadComponent = async () => {
    let Counter = await import('app1/Counter');
    if(Counter){
      setComponentLoaded(true);
      setCurrentComponent(Counter);
    }
  }

  useEffect(() => {
    // mount(document.querySelector('#root'));
    window.addEventListener('addToCart',async (event) => {
      console.log("🚀 ~ file: bootstrap.js ~ line 7 ~ window.addEventListener ~ event", event)
    });
    setTimeout(()=>{
      loadComponent()
    }, 5000)
  }, [])

  return (
    <div className="App">
      <h1>Testing microftonends</h1>
      {componentLoaded? <CurrentComponent/>: null}
      {/* {loadComponent()} */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
