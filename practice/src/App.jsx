import './App.css'
import Todo from './components/Todo';
import User from './components/User';
import Student from './components/Student'
import CounterJS from './components/Counter(JS)';
import CounterReact from './components/Counter(React)'
import MyComponent from './components/MyComponent';
import LikeDislike from './components/LikeDislike';

function App() {

  const number = 1;
  const user = {
    name: 'John',
    age: 20
  }

  const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 }
  ]

  const students = [
    { name: 'John Doe', age: 20, major: 'Computer Science' },
    { name: 'Jane Smith', age: 22, major: 'Mathmatics' },
    { name: 'Alice Johnson', age: 19, major: 'Physics' },
    { name: 'Bob Brown', age: 21, major: 'Chemistry' },
  ]

  return (
    <>
      {students.map((student) =>
        <Student key={student.name} {...student}></Student>
      )}<br />
      <CounterJS></CounterJS><br />
      <CounterReact></CounterReact><br />
      <MyComponent></MyComponent><br />
      <LikeDislike></LikeDislike>
    </>
    // <>
    //   {students.map((student) => {
    //     return <Student key={student.name} {...student}></Student>
    //   })}
    // </>

  )
}

export default App;
