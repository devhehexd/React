import { useState, useEffect, useRef } from 'react'
import MyComponent from './components/MyComponent';
//import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const flag = useRef(false);
  //1. Mount
  useEffect(() => {
    console.log('mount...')
  }, []);
  //page가 처음 rendering 될 때 딱 한번만 호출

  const myClick = () => {
    setCount(count + 1);
  }

  //2. Update
  useEffect(() => {
    if (!flag.current) {
      flag.current = true;
      return;
    }
    console.log('Update...');
  }); //페이지가 re-rendering 될 때 마다

  return (
    <>
      <h1>Count: {count}</h1>
      {count % 2 == 0 ? <MyComponent /> : null}
      <button onClick={myClick} type='button'>Count Up</button>
    </>
  )
}

export default App
