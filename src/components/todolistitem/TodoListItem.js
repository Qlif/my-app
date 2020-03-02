//Core
import React  from 'react';

function TodoListItem(props){
  let data = props.value

  if(props.value){
    return(data.map((item) => <li key={item.id.toString()}> {item.title}</li>))
  }else {
    return( <li />)
  }
}

export default TodoListItem;
