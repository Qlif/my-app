//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TodoListItem from '../todolistitem/TodoListItem.js'

function TodoList(props){
  const { getData, data } = props

  return(data.map((item) =>
      <div key={item.id.toString()}>
        <TodoListItem item = {item} getData={getData} />
      </div>))

}
TodoListItem.propTypes = {
  value: PropTypes.arrayOf( PropTypes.shape({
    id : PropTypes.nuber,
    title: PropTypes.string,
    stat: PropTypes.boolean
  }))
};

TodoListItem.defaultProps = {
  value:[
    { id: 0,
      title : "test"
    }
  ]
};
export default TodoList;
