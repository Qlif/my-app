//Core
import React from 'react';
//Api
import Api from '../../engine/services/api/index.js'

function ButtonDelete (props){
  const actionDel = (e) =>{Api.delRequest(delid);}
  const delid = props.delid;
  return(
    <input
      type = "button"
      value = "Delete"
      delid = {delid}
      onClick = {actionDel}
    />
  );
}

export default ButtonDelete;
