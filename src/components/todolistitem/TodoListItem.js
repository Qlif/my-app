import React  from 'react';

function TodoListItem(item){
//console.log(data);
let listItem = <li key={item.id.toString()}> {item.title}</li>;

  return(
    listItem
  );
}

export default TodoListItem;
