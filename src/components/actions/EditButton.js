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

function ButtonEdit (props){

  const [itemtitle, setItemTitle] = useState(props.itemtitle);
  const [satus, setSatus] = useState(props.stat)
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

  const handleonClikStatus = e => {
      setSatus(true)
      }

    return (
      <div>
        <button onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <input type = "text" value = {itemtitle} />
          <input type = "checkbox" id="satus" name="satus" cheked />
          <button onClick = "">Apply</button>
          <button onClick={closeModal}>Cancel</button>

        </Modal>
      </div>
    );
}
export default ButtonEdit;
