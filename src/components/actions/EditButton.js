//Core
import React, {useState, useEffect} from 'react';
//Api
import Api from '../../engine/services/api/index.js';



function ButtonEdit (props){
const { item, setEditId, inputEl, getData } = props;
const [status, setSatus] = useState(item.stat);
const [title, setTitle] = useState(item.title);


const handleonClikCancel = ev =>{
  setEditId('');
}

const handleonClikStatus = ev => {
      setSatus(ev.target.checked);
  };

const handleonChangeInput = ev =>{
      setTitle(ev.target.value);
}

const onFormEditSubmit = ev => {
    ev.preventDefault();
    Api.putRequest(item.id, title, status)
    .then(() => Api.getRequest())
    .then((res) => {
      getData(res.data);
    });
  setEditId('');
}

useEffect(()=>inputEl.current.focus());

    return (
      <>
      <form onSubmit={onFormEditSubmit}>
        <input type = "text"
               defaultValue = {title}
               ref={inputEl}
               onChange ={handleonChangeInput}
        />
        <input type = "checkbox"
               id="satus"
               name="satus"
               onChange ={handleonClikStatus}
               checked={status}
        />
        <input type = "submit" value = "Update" />
        <input type = "button" value = "Cancel"
               onClick = {handleonClikCancel}
        />
      </form>
      </>
    );
}
export default ButtonEdit;
