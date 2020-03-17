//Core
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
//components
import Todolist from '../todolist/TodoList.js';
import AddTodoItem from '../actions/AddTodoItem.js';
import Api from "../../engine/services/api";

function Main (){
  const [data, resivData] = useState([]);

  //Get data from server
  useEffect(()=> {
    Api.getRequest()
        .then((response) => {
          // handle success
          resivData(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
  }, []);

  return(
    <>
    <AddTodoItem getData={resivData} />
    <Todolist data = {data} getData={resivData} />
    </>
  );
}

Todolist.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func
};

export default Main;
