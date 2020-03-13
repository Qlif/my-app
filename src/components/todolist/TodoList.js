//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TodoListItem from '../todolistitem/TodoListItem.js'

function TodoList(props){
  const { getData } = props;
return(
  <ul>
    <TodoListItem value= {props.value} getData={getData} />
  </ul>
  );
}

TodoListItem.propTypes = {
  value: PropTypes.array
};

export default TodoList;
