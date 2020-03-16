//Core
import React, {useState} from 'react';
//Api
import Api from '../../engine/services/api/index.js';

function AddTodoItem (props){

const [title, setTitle] = useState("");
const [satus, setSatus] = useState(false);
const {getData} = props;


const handleChangeUsername = e => {
    setTitle(e.target.value)
  };

const handleonClikStatus = e => {
      setSatus(e.target.checked);
  };

 const onFormAddSubmit = ev => {
    ev.preventDefault();
    Api.postRequest(title, satus)
      .then(() => Api.getRequest())
      .then((res) =>{
          getData(res.data)
       });
    setTitle("");
    setSatus(false);
 }

  return(
    <form onSubmit={onFormAddSubmit}>
      <input type = "text" value={title} onChange ={handleChangeUsername}  />
      <input type = "checkbox"
             id="satus"
             name="satus"
             onChange ={handleonClikStatus}
      />
      <label> Done </label>
      <button type = "submit"> Send </button>
    </form>
  );
}

export default AddTodoItem;
