//Core
import React  from 'react';
import PropTypes from 'prop-types';
//components
import ButtonDelete from '../actions/ButtonDelete.js';

function TodoListItem(props) {
  const data = props.value

  if(props.value){
    return(data.map((item) =>
        <li key={item.id.toString()}>
          {item.title}
          <ButtonDelete delid = {item.id} />
        </li>))
  }
    return null;
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
export default TodoListItem;
