//Core
import React from 'react';
//components
import Todolist from '../todolist/TodoList.js'

function Main (props){
  return(
    <Todolist value = {props.value} />
  );
}

export default Main;
