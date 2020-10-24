import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import '../../../../assets/scss/pages/popups.scss';
import '../../../../assets/scss/pages/cards.scss';
import '../../../../assets/scss/pages/tables.scss';
import '../../../../assets/scss/pages/modals.scss';

class MonthlyPayments extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			modal: false
		};
	}

	toggleFade() {
		this.setState((prevState) => { return { fadeIn: !prevState } });
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}

  render() {
    const externalCloseBtn = <button className="Modal-buttonClose" onClick={this.toggle}><i class="fas fa-times"></i></button>;
    return (
      <Fragment>
          <Button onClick={this.toggle} className="mr-1">Launch demo modal</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={"Modal popups"} >
          <ModalHeader toggle={this.toggle} className={"Modal-headerWrapper popups"} close={externalCloseBtn}>
              <h3 className="Modal-deleteTitle">¿Estas seguro de que quieres [Nombre de la acción]?</h3>
          </ModalHeader>
          <ModalBody className={"Modal-wrapperPopups pb-0"}>
		  	<p className="Modal-popupsText">Esta acción no podrá deshacerse una vez creada.</p>
          </ModalBody>
		  	<div className="Modal-wrapperButtonsOptions">
				<button className="Modal-buttonAction">Cancelar</button>
				<button className="Modal-buttonAction perform">Realizar</button>
			</div>
        </Modal>
      </Fragment>
    );
  }
}

export default MonthlyPayments;

