import React from 'react';

function Student({ name, age, major }) {
  return (
    <div>
      <ul>
        < li style={{ textDecoration: age >= 20 ? 'underline' : 'none' }}>{name}, {age}, {major}</li>
      </ul>
    </div >
  );
}

export default Student;