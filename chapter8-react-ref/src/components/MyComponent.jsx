import React from 'react';
import { useState, useRef } from 'react';

//1. useRef vs useState
//  1) useState: 값 유지, 값이 변경이 되면 변경된 값 기준으로 화면을 re-rendering한다.
//  2) useRef: 값이 변경되어도 화면의 갱신(re-rendering) 작업을 하지 않는다.
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const useRefObj = useRef(0);
  console.log('useRef 렌더링')
  console.log('useState 렌더링')
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>state: Count Up</button>

      <h1>useRef Count: {useRefObj.current}</h1>
      <button onClick={() => {
        setCount(useRefObj.current++)
        console.log(useRefObj.current)
      }}>ref: Count Up</button>
    </div>
  );
};

export default MyComponent;