//Core
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//Api
import Api from '../../engine/services/api/index.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

function ButtonDelete (props){
  const { getData } = props;
const delid = props.delid;
const actionDel = (e) =>{
  Api.delRequest(delid)
    .then(() => Api.getRequest())
    .then((res) => {
      getData(res.data);
    });
  setIsOpen(false);
}
var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>Delete</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Are you sure you want to delete?</h2>
          <button onClick = {actionDel}>Yes</button>
          <button onClick={closeModal}>No</button>

        </Modal>
      </div>
    );
}
export default ButtonDelete;
