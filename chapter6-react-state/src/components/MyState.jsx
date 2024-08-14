import React, { useState } from 'react';


const MyState = () => {
  let name = 'Jimin';
  let age = 28;
  const changeName = (evt) => {
    console.log(evt.target);
    name = 'Chulsu';
    console.log(name);
  }
  const changeAge = (num, evt) => {
    console.log(num)
    age = num;
  }
  //5. 상태관리를 위한 변수 선언 또는 변경할 때 useState라는 Hook을 사용한다.
  //const[변수명, 변수를 변경할 setter 함수명] = usetState(초기값)
  const [address, setAddress] = useState('Seoul');
  const [num, setNum] = useState(0);
  const [check, setCheck] = useState(true);
  const [array, setArray] = useState([10, 20]);
  const [user, setUser] = useState({ name: 'Younghee', age: 30 });

  const changeAddress = () => setAddress('Busan') //문장이 하나일 경우 중괄호 생략 가능 (원래는 {setAddress('Busan')})
  const increase = (howMany) => setNum(num + howMany)
  const decrease = (howMany) => setNum(num - howMany)
  const changeCheck = () => setCheck(!check)

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    const newArray = array.concat(random);
    setArray(newArray);
    //setArray([...array, random]); concat말고 ','를 사용하여 바로 붙일 수도 있다.
  }
  const deleteArray = (idx) => {
    const newArray = array.filter((item, i) => idx === i ? false : true);
    setArray(newArray);
  }
  const changeArray = (idx, value) => {
    const newArray = array.map((item, i) => idx === i ? value : item);
    setArray(newArray);
  }
  const addObject = (key, value) => {
    //{ name: 'Younghee', age: 30 }
    const newObj = { ...user, [key]: value };
    setUser(newObj);
  }
  const changeObject = (key, value) => {
    const newObj = { ...user, [key]: value };
    setUser(newObj);
  }
  const deleteObject = (key) => {
    delete user[key];
    const newObj = { ...user }; //객체이기 때문에 중괄호를 사용하지 않으면 주소가 newObj에 복사가 되는 것이기 때문에 중괄호를 사용하여 값을 복사해야 한다.
    setUser(newObj);
  }
  return (
    <div>
      <h2>Function State</h2>
      <div>
        Name: {name}<br />
        Age: {age}<br />
        Address: {address}<br />
        Counter: {num}<br />
        Check: {check ? '동의' : '동의 안함'}<br />
        Array: {array[0]} / {array[1]} / {array[2]} / {array[3]} <br />
        User: {user.name} / {user.age} / {user.address}<br />
      </div>
      <div>
        <button onClick={changeName}>Change Name</button>
        <button onClick={(evt) => { changeAge(50, evt) }}>Change Age</button>
        <button onClick={changeAddress}>Change Address</button>
        <button onClick={() => { increase(10) }}>Increase: 10</button>
        <button onClick={() => { decrease(5) }}>Decrease: 5</button>
        <button onClick={changeCheck}>Change Check</button>
      </div>
      <br />
      <div>
        <button onClick={addArray}>Add Array</button>
        <button onClick={() => { changeArray(1, 100) }}>Change Array</button>
        <button onClick={() => { deleteArray(1) }}>Delete Array</button>
      </div>
      <br />
      <div>
        <button onClick={() => { addObject('address', '서울시 영등포구') }}>Add Object</button>
        <button onClick={() => { changeObject('address', '강남구 역삼동') }}>Change Object</button>
        <button onClick={() => { deleteObject('address') }}>Delete Object</button>
      </div>
    </div>
  );
};

export default MyState;