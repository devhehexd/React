import React, { Component } from 'react';
import Comment from './Comment';

function Todo() {
  return (
    <div>
      <ul>
        <li>리액트 배우기</li>
        <Comment></Comment>
      </ul>
    </div>
  );
}

export default Todo;