import React from 'react';
import TodoListItem from '../todolistitem/TodoListItem.js'

function TodoList(data){

    let todoListItems = [];

  for(let item of data){
    todoListItems = TodoListItem(item);
    //console.log(item);
  }
return(
  <ul>
    {todoListItems}
  </ul>
  );
}

export default TodoList;
