//Core
import React from 'react';
//components
import Todolist from '../todolist/TodoList.js'

function Main (data){
  const todolist = Todolist (data);
  //console.log("From main");
  //console.log(data);
  return(
    todolist
  );
}

export default Main;
