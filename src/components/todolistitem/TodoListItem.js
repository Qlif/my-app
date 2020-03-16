//Core
import React, {useState, useRef}   from 'react';
import PropTypes from 'prop-types';
//components
import ButtonEdit from '../actions/EditButton.js';

function TodoListItem(props) {
  const { item, getData  } = props;
  const [ editid, setEditId ] = useState(props.editid);
  const inputEl = useRef(null);

  const handleonClikEdit = ev =>{
    setEditId(ev.target.id);
  };

  if(item.id == editid){
    return  (
              <ButtonEdit item = {item} setEditId = {setEditId} inputEl={inputEl} getData={getData} />
    )
  } else {

    return <>
              {item.title} Status : {(item.stat === true ? "Done" : "Not done")}
              <button id = {item.id} onClick = {handleonClikEdit}>
                Edit
              </button>
            </>
   }
}
export default TodoListItem;
