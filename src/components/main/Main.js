//Core
import React from 'react';
//Api
import Api from '../../engine/services/api/index.js'
import PropTypes from 'prop-types';
//components
import Todolist from '../todolist/TodoList.js'

function Main (props){
  return(
    <>
    <div>
      <input name = "title" />
      <input type = "button" value="Send" onClick = {()=>Api.postRequest()} />
    </div>
    <Todolist value = {props.value} />
    </>
  );
}

Todolist.propTypes = {
  value: PropTypes.array
};

export default Main;
