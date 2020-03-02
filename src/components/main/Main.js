//Core
import React from 'react';
import PropTypes from 'prop-types';
//components
import Todolist from '../todolist/TodoList.js'

function Main (props){
  return(
    <Todolist value = {props.value} />
  );
}

Todolist.propTypes = {
  value: PropTypes.array
};

export default Main;
