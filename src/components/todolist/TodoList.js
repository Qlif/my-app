import React from 'react';
import TodoListItem from '../todolistitem/TodoListItem.js'

function TodoList(){
  return(
    <ul>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
    </ul>
  );
}

export default TodoList;
