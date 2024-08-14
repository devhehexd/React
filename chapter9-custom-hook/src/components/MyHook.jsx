import React, { useState } from 'react';
import useInputValue from '../hooks/useInputValue'

//1. Hook은 함수 component 혹은 Custom Hook 안에서만 호출 가능하다.
//Warning: Invalid hook call. Hooks can only be called inside of the body of a function component.
//const [count, setCount] = useState(0);
//const myChange = () => {
//const [state, setState] = useState(0);
//Invalid hook call. Hooks can only be called inside of the body of a function component.
//}
//function getInputValue() {

function MyHook(props) {
  const [input, myChange] = useInputValue();
  // //2. Hook은 조건문이나 반복문 내부에서 호출될 수 없다.
  // if (true) {
  //   const[state, setState] = useState(0);
  // }
  //3. 나만의 Hook을 만들 수 있다. 이 때 반드시 useXxx()로 시작하지 않아도 되지만, 관례이므로 따르는 것을 권장한다.
  return (
    <div>
      <input type="text" onChange={myChange} value={input} />
    </div>
  );
}

export default MyHook;