//Core
import React  from 'react';
import PropTypes from 'prop-types';

function TodoListItem(props){
  let data = props.value

  if(props.value){
    return(data.map((item) => <li key={item.id.toString()}> {item.title}</li>))
  }else {
    return( <li />)
  }
}

TodoListItem.propTypes = {
  data: PropTypes.array
};
export default TodoListItem;
