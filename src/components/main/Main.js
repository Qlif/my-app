//Core
import React from 'react';
//Api
import Api from '../../engine/services/api/index.js';
import PropTypes from 'prop-types';
//components
import Todolist from '../todolist/TodoList.js';
import AddTodoItem from '../actions/AddTodoItem.js';

function Main (props){
  return(
    <>
    <AddTodoItem />
    <Todolist value = {props.value} />
    </>
  );
}

Todolist.propTypes = {
  value: PropTypes.array
};

export default Main;
