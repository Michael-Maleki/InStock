import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Switch from "react-switch";
import SwitchToggle from './SwitchToggle'
import Plus from '../../assets/Icons/SVG/Icon-add.svg'


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

Modal.setAppElement(document.getElementById(""))
 
class ModalPlus extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    this.subtitle.style.color = '#0095FF';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button onClick={this.openModal}><img className='plus-box-img' src={Plus}/></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <h2 ref={subtitle => this.subtitle = subtitle}>Create New</h2>
          
          <div>I am a modal</div>
          <form>
            <input placeholder='enter text'/>
            
            <div><SwitchToggle /></div>
            <button onClick={this.closeModal}>CANCEL</button>
            <button>SAVE</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalPlus;