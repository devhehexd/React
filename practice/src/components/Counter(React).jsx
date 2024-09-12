import { useState } from "react";

function CounterReact() {

  const [count, setCount] = useState(0);
  //count: 변수, setCount: count변수의 setter함수

  function handleCountUp() {
    setCount(count + 1)
  }

  return (

    <div>
      <p>You clicked <span>{count}</span> times </p>
      <button onClick={handleCountUp}>
        Click me !
      </button>
    </div>
  )
}

export default CounterReact;