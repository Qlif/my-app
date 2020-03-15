//Core
import React  from 'react';
import PropTypes from 'prop-types';
//components
import ButtonDelete from '../actions/ButtonDelete.js';
import ButtonEdit from '../actions/EditButton.js';

function TodoListItem(props) {
  const { getData, data } = props;

  if(data){

    return(data.map((item) =>
        <div key={item.id.toString()}>
          {item.title} Status : {(item.stat === true ? "Done" : "Not done")}
           <ButtonDelete delid = {item.id} getData={getData} />
           <ButtonEdit itemid = {item.id} itemtitle = {item.title}  />
        </div>))
  }
    return null;
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
export default TodoListItem;
