import React from 'react';
import { useRef } from 'react';

function Main(props) {
  const nameRef = useRef();
  const onSubmit = () => {
    //const name = document.querySelector('#username').value;
    //console.log(name);
    //const name = nameRef.current.value;
    if (!nameRef.current.value || nameRef.current.value === '') {
      nameRef.current.style.backgroundColor = 'yellow';
      nameRef.current.focus();
    }
  }
  return (
    <div>
      Name: <input type="text" ref={nameRef} /><br />
      <input type="button" value="Submit" onClick={onSubmit} />
    </div>
  );
}

export default Main;