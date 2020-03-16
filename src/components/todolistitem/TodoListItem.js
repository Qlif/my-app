//Core
import React, {useState, useRef}   from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
//Components
import ButtonEdit from '../actions/EditButton.js';
import ButtonDelete from '../actions/ButtonDelete.js';
//Style
import './TodoListItem.css';

function TodoListItem(props) {
  const { item, getData  } = props;
  const [ editid, setEditId ] = useState(props.editid);
  const inputEl = useRef(null);

  const handleonClikEdit = ev =>{
    setEditId(ev.target.id);
  };

  if(item.id === parseInt(editid,10)){
    return  (
              <ButtonEdit item = {item} setEditId = {setEditId} inputEl={inputEl} getData={getData} />
    )
  } else {

    return (
            <>
            <span className = {cx({Done : item.stat})}>
              {item.title}
              </span>
              <button id = {item.id} onClick = {handleonClikEdit}>
                Edit
              </button>
              <ButtonDelete delid = {item.id} getData={getData} />
            </>
            )

   }
}
export default TodoListItem;
