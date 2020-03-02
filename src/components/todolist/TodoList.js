//Core
import React from 'react';
//Components
import TodoListItem from '../todolistitem/TodoListItem.js'

function TodoList(props){
return(
  <ul>
    <TodoListItem value= {props.value} />
  </ul>
  );
}

export default TodoList;
