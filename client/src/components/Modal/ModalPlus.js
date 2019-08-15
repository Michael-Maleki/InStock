import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Switch from "react-switch";
import SwitchToggle from './SwitchToggle'
import Plus from '../../assets/Icons/SVG/Icon-add.svg'
import './ModalPlus.scss'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#323232';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className='modal-button' onClick={this.openModal}><img className='plus-box-img' src={Plus} /></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div className='modal'>
            <h1 className='modal__title' ref={subtitle => this.subtitle = subtitle}>Create New</h1>

            <form>

              <div className='modal__row1'>
                <div className='modal__row1__product'>
                  <div className='modal-label'>PRODUCT</div>
                  <input className='modal-input' placeholder='Item Name' />
                </div>

                <div className='modal__row1__last-ordered'>
                  <div className='modal-label'>LAST ORDERED</div>
                  <input className='modal-input' type='date' placeholder='yyyy-mm-dd' />
                </div>
              </div>

              <div className='modal__row2'>
                <div className='modal__row2__city'>
                  <div className='modal-label'>CITY</div>
                  <input className='modal-input' placeholder='City' />
                </div>

                <div className='modal__row2__country'>
                  <div className='modal-label'>COUNTRY</div>
                  <select className='modal-input' placeholder='Canada'>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="U.S.A">U.S.A</option>
                    <option value="Zanzibar">Zanzibar</option>
                  </select>
                </div>
              </div>

              <div className='modal__row3'>
                <div className='modal__row3__quantity'>
                  <div className='modal-label'>QUANTITY</div>
                  <input className='modal-input' placeholder='0' />
                </div>

                <div className='modal__row3__switch'>
                  <div className='modal-label'>STATUS</div>
                  <div className='modal__row3__switch-stock'>
                    <div className='modal-stock-label'>In Stock</div>
                    <div className='toggle'><SwitchToggle /></div>
                  </div>
                </div>
              </div>

              <div className='modal__row4'>
                <div className='modal-label'>ITEM DESCRIPTION</div>
                <input className='modal-desc-input' placeholder='(Optional)' />
              </div>
              <div className='modal-buttons'>
                <button className='modal-cancel' onClick={this.closeModal}>CANCEL</button>
                <button className='modal-save'>SAVE</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalPlus;