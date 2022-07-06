import { mount } from 'products/ProductsIndex';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    mount(document.querySelector('#root'));
    window.addEventListener('addToCart',async (event) => {
      console.log("🚀 ~ file: bootstrap.js ~ line 7 ~ window.addEventListener ~ event", event)
    });
  }, [])

  return (
    <div className="App">
      <h1>Testing microftonends</h1>
    </div>
  );
}

export default App;
