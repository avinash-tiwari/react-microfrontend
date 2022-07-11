import React, {useEffect, useRef} from 'react'
// import { mount } from 'app1/Counter';
import { manager } from '../manager';

export default function App1({ appName }) {
  const ref=useRef(null);

  const importApp = async (appName) => {
    const mount = await manager(appName);
    mount(ref.current);
  }

  useEffect(()=>{
    if(appName){
        importApp(appName);
    }
  }, [appName])

//   useEffect(()=>{
//     mount(ref.current);
//   });

  return (
    <div ref={ref}/>
  )
}
