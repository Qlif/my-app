//Core
import React from 'react';
import PropTypes from 'prop-types';
//components
import Todolist from '../todolist/TodoList.js';
import AddTodoItem from '../actions/AddTodoItem.js';

function Main (props){
  const { getData, data } = props;
  return(
    <>
    <AddTodoItem getData={getData} />
    <Todolist data = {data} getData={getData} />
    </>
  );
}

Todolist.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func
};

export default Main;
