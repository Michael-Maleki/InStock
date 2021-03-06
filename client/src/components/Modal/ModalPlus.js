import React from "react";
import Modal from "react-modal";
import Switch from "react-switch";
import Axios from "axios";
import Plus from "../../assets/Icons/SVG/Icon-add.svg";
import "./ModalPlus.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class ModalPlus extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  ariaHideApp = false;

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#323232";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  uploadToServer = (event) => {
    // event.preventDefault();

    Axios.post("http://localhost:8080/inventory", {
      name: event.target.productInput.value,
      description: event.target.descriptionInput.value,
      quantity: event.target.quantityInput.value,
      lastOrdered: event.target.orderedInput.value,
      location: `${event.target.cityInput.value}, ${event.target.countryInput.value}`,
      isInstock: event.target.instockInput.checked,
    });
  };

  render() {
    return (
      <div>
        <button className="modal-button" onClick={this.openModal}>
          <img className="plus-box-img" src={Plus} alt="" />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="modal" onSubmit={this.uploadToServer}>
            <h1
              className="modal__title"
              ref={(subtitle) => (this.subtitle = subtitle)}
            >
              Create New
            </h1>

            <div>
              <div className="modal__row1">
                <div className="modal__row1__product">
                  <div htmlFor="productInput" className="modal-label">
                    PRODUCT
                  </div>
                  <input
                    required
                    name="productInput"
                    className="modal-input"
                    placeholder="Item Name"
                  />
                </div>

                <div className="modal__row1__last-ordered">
                  <div htmlFor="orderedInput" className="modal-label">
                    LAST ORDERED
                  </div>
                  <input
                    required
                    name="orderedInput"
                    className="modal-input"
                    type="date"
                    placeholder="yyyy-mm-dd"
                  />
                </div>
              </div>

              <div className="modal__row2">
                <div className="modal__row2__city">
                  <div htmlFor="cityInput" className="modal-label">
                    CITY
                  </div>
                  <input
                    required
                    name="cityInput"
                    className="modal-input"
                    placeholder="City"
                  />
                </div>

                <div className="modal__row2__country">
                  <div htmlFor="countryInput" className="modal-label">
                    COUNTRY
                  </div>
                  <select
                    name="countryInput"
                    className="modal-input"
                    placeholder="Canada"
                  >
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="U.S.A">U.S.A</option>
                    <option value="Zanzibar">Zanzibar</option>
                  </select>
                </div>
              </div>

              <div className="modal__row3">
                <div className="modal__row3__quantity">
                  <div htmlFor="quantityInput" className="modal-label">
                    QUANTITY
                  </div>
                  <input
                    required
                    name="quantityInput"
                    className="modal-input"
                    placeholder="0"
                  />
                </div>

                <div className="modal__row3__switch">
                  <div className="modal-label">STATUS</div>
                  <div className="modal__row3__switch-stock">
                    <div className="modal-stock-label">In Stock</div>
                    <div htmlFor="instockInput" className="toggle">
                      <div>
                        <Switch
                          name="instockInput"
                          onChange={this.handleChange}
                          checked={this.state.checked}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal__row4">
                <div htmlFor="descriptionInput" className="modal-label">
                  ITEM DESCRIPTION
                </div>
                <input
                  name="descriptionInput"
                  className="modal-desc-input"
                  placeholder="(Optional)"
                />
              </div>
              <div className="modal-buttons">
                <button className="modal-cancel" onClick={this.closeModal}>
                  CANCEL
                </button>
                <button type='submit' className="modal-save">SAVE</button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalPlus;
