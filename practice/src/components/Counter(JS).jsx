function CounterJS() {

  function handleCountUp() {

    document.querySelector('span').textContent =
      Number(document.querySelector('span').textContent) + 1

  }

  return (

    <div>
      <p>You clicked <span>0</span> times </p>
      <button onClick={handleCountUp}>
        Click me !
      </button>
    </div>
  )
}

export default CounterJS;