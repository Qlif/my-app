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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
// function ButtonDelete (props){
//   const actionDel = (e) =>{Api.delRequest(delid);}
//   const delid = props.delid;
//   return(
//     <input
//       type = "button"
//       value = "Delete"
//       delid = {delid}
//       onClick = {actionDel}
//     />
//   );
// }
function ButtonEdit (props){
const [itemtitle, setItemTitle] = useState(props.itemtitle);

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
        <button onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <input type = "text" value = {itemtitle} />
          <button onClick = "">Apply</button>
          <button onClick={closeModal}>Cancel</button>

        </Modal>
      </div>
    );
}
export default ButtonEdit;
