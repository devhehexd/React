import Button from "./components/Button"
import Header from "./components/Header"
import Article from "./components/Article"
import Nav from "./components/Nav"
import MyComponent from "./components/MyComponent"
import YourComponent from "./components/YourComponent"

function App() {
  // const topics = [
  //   { id: 1, title: 'html5', body: 'html5 is ...' },
  //   { id: 2, title: 'css3', body: 'css is ...' },
  //   { id: 3, title: 'javascript', body: 'javascript is ...' }
  // ];
  // const buttonProps = {
  //   title: 'Red',
  //   color: 'red'
  // }
  // const array = [1, 2, 3];
  // const node = <h1>Node</h1>
  // const func = () => { console.log('메세지'); }
  // const student = {
  //   name: 'Jimin',
  //   age: 28
  // }
  const employee = { age: 30 };
  return (
    <>
      {/* <Button title={'Red'} color='red'></Button> */}
      {/* <Button {...buttonProps}></Button>
      <Button title={'Green'} color='green'></Button>
      <Button title={'Blue'} color='blue'></Button>
      <Button title={'Black'}>
        <div>자식 요소</div>
      </Button> */}
      {/* <Header title="React"></Header>
      <Article title="Welcome" body="Hello, Web"></Article>
      <Nav topics={topics}></Nav> */}
      {/* <MyComponent stringValue={'Cruz'} booleanValue={1 == 1} numberValue={28} arrayValue={array} nodeValue={node} functionValue={func} objectValue={student}></MyComponent> */}
      <YourComponent objValue={employee} requiredStringValue='문자'></YourComponent>

    </>
  )
}

export default App
