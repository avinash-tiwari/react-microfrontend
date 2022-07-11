import React, { useState, useEffect, Suspense } from 'react'
import App1 from './App1';

export default function AppLoader() {
  const [appName, setAppName] = useState('');

  const loadComponent = async (cmpName) => {
    setAppName(cmpName);
  }

  useEffect(() => {
    window.addEventListener('addToCart',async (event) => {
      console.log("🚀 ~ file: bootstrap.js ~ line 7 ~ window.addEventListener ~ event", event)
      loadComponent('bossberry')
    });
  }, [])
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <button onClick={() => loadComponent('app1')}>App 1</button>
        <button onClick={() => loadComponent('app2')}>App 2</button>
        <button onClick={() => loadComponent('tapberry')}>Tapberry</button>
        <button onClick={() => loadComponent('bossberry')}>Bossberry</button>
        {/* <App1 appName={'app1'}/> */}
        <App1 appName={appName}/>
    </Suspense>
  )
}
