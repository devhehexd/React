import Counter from "./components/Counter";
import Lighter from "./components/Lighter";
import MyState from "./components/MyState";
//import './App.css'

function App() {

  //1. State가 변경되면 화면이 re-rendering 된다.
  //2. 부모 component에서 자식 component로 데이터를 전달하는 props와 달리, state는 자식 component에서만 사용할 수 있는 전역변수이다.
  //3. State가 여러개일 경우 계속 re-rendering이 발생하기 때문에, 분리해야 한다.
  //4. 페이지가 re-rendering 되는 3가지 이유
  //1)Props가 변경되면
  //2)State가 변경되면
  //3)부모 Component가 변경되면
  return (
    <>
      <MyState></MyState>
    </>
  )
}

export default App
