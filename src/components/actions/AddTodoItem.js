//Core
import React, {useState} from 'react';
//Api
import Api from '../../engine/services/api/index.js';

function AddTodoItem (props){

const [title, setTitle] = useState('')
const [satus, setSatus] = useState(false)


const handleChangeUsername = e => {
    setTitle(e.target.value)
  };
  
const handleonClikStatus = e => {
    setSatus(true)
  };

 const onFormSubmit = ev => {
    ev.preventDefault();
    Api.postRequest(title, satus);
   console.log(title);
   console.log(satus);
}

  return(
    <form onSubmit={onFormSubmit}>
      <input type = "text" value={title} onChange ={handleChangeUsername}  />
      <input type = "checkbox" id="satus" name="satus" onChange ={handleonClikStatus}  />
      <label> Done </label>
      <button type = "submit"> Send </button>
    </form>
  );

}

export default AddTodoItem;
