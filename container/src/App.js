import React, { useEffect, useState, Suspense } from 'react';
import { manager } from './manager';
function App() {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [CurrentComponent, setCurrentComponent] = useState(null);

  const loadComponent = async (cmpName) => {
    const Component = manager(cmpName);
    console.log("🚀 ~ file: App.js ~ line 11 ~ loadComponent ~ Component", Component)
    if(Component){
      setCurrentComponent(Component);
      setComponentLoaded(true);
    }
  }

  useEffect(() => {
    window.addEventListener('addToCart',async (event) => {
      console.log("🚀 ~ file: bootstrap.js ~ line 7 ~ window.addEventListener ~ event", event)
      loadComponent('app2')
    });
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="Container-App">
        <h1>Testing microftonends</h1>
        <button onClick={() => loadComponent('tapberry')}>Tapberry</button>
        <button onClick={() => loadComponent('bossberry')}>Bossberry</button>
        {componentLoaded? <CurrentComponent/>: null}
      </div>
    </Suspense>
  );
}

export default App;
