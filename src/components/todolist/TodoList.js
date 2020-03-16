//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TodoListItem from '../todolistitem/TodoListItem.js'
import ButtonDelete from '../actions/ButtonDelete.js';

function TodoList(props){
  const { getData, data } = props


//   const handleonClikEdit = ev =>(()=>{
//     setEdit(true);
//     setEditId(ev.target.id);
//     console.log(ev.target);
//   },[setEdit,setEditId,edit,editId]
// );




  return(data.map((item) =>
      <div key={item.id.toString()}>
        <TodoListItem item = {item} getData={getData} />
        <ButtonDelete delid = {item.id} getData={getData} />

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
