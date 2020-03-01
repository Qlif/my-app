import React from 'react';
import TodoListItem from '../todolistitem/TodoListItem.js'

function TodoList(props){
return(
  <ul>
    <TodoListItem value= {props.value} />
  </ul>
  );
}

export default TodoList;
