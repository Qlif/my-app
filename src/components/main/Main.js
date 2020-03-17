//Core
import React, {useEffect, useState} from 'react';
//components
import Todolist from '../todolist/TodoList.js';
import AddTodoItem from '../actions/AddTodoItem.js';
import Api from "../../engine/services/api";

function Main (props){
  const [data, resivData] = useState([]);
  const {actions} = props;


  //Get data from server
  useEffect(()=> {
       switch (actions) {
          case 'getRequest':
                              Api.getRequest()
                                  .then((response) => {
                                      // handle success
                                      resivData(response.data);
                                  })
                                  .catch((error) => {
                                      // handle error
                                      console.log(error);
                                  });

              break;

              case 'getDone':
                              Api.getDone()
                                  .then((response) => {
                                      // handle success
                                      resivData(response.data);
                                  })
                                  .catch((error) => {
                                      // handle error
                                      console.log(error);
                                  });

              break;
              case 'getNotDone':
                              Api.getNotDone()
                                  .then((response) => {
                                      // handle success
                                      resivData(response.data);
                                  })
                                  .catch((error) => {
                                      // handle error
                                      console.log(error);
                                  });

              break;

           default: Api.getRequest()
               .then((response) => {
                   // handle success
                   resivData(response.data);
               })
               .catch((error) => {
                   // handle error
                   console.log(error);
               });

      }

  }, [actions]);

  return(
    <>
        <div className = "Content">
            <AddTodoItem getData={resivData} />
            <Todolist data = {data} getData={resivData} />
        </div>

    </>
  );
}

export default Main;
