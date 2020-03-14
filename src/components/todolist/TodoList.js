//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TodoListItem from '../todolistitem/TodoListItem.js'

function TodoList(props){
  const { getData, data } = props;
return(
  <ul>
    <TodoListItem data= {data} getData={getData} />
  </ul>
  );
}

TodoListItem.propTypes = {
  value: PropTypes.array
};

export default TodoList;
