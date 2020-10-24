import React, { Component } from 'react';
import { Modal } from 'reactstrap'

import ModalBody from '../../../components/modal/modalBody';
import ModalFooter from '../../../components/modal/modalFooter';
import FactureDesign from "../../../components/FacturationCard";
import SentFacture from "../SentFacture/sentFacture";

import '../../../../assets/scss/pages/setPayMethod.scss';
import "../../../../assets/scss/pages/facture-modal.scss"
import "../../../../assets/scss/components/facture-design/facture-design.scss"
import "../../../../assets/scss/components/_modal.scss"
import "../../../../assets/scss/main.scss"
import "../../../../assets/scss/components/_my-account.scss"


class ModalFacture extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			openModal: false
		};
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	toggleFade() {
		this.setState((prevState) => { return { fadeIn: !prevState } });
	}


	render() {
		return (
			<div>
				<ModalBody>
					<div className="Modal-body request facture p-0">
						<div className="Modal-bodyHeader">
							<button className="Modal-testBtn">
								Borrador
                			</button>
							<span className="Modal-factureNumber">
								Factura número 123456
                			</span>
						</div>
						<div className="ModalFacture">
							<div className="justify-content-center">
								<div className="FactureBorder">
									<FactureDesign />
								</div>
							</div>
						</div>
					</div>
				</ModalBody>
				<ModalFooter>
					<div className="row d-flex mr-3">
						<div className="Card-accountWrapperOption">
							<label className="Card-container ">He comprobado todos los datos.
                    <span className="Card-facture d-flex">Una vez emitida la factura no se podrá modificar.</span>
								<input className="Card-checkContainer" type="checkbox" />
								<span className="Card-checkmark fact modalFact"></span>
							</label>
						</div>
					</div>
					<button className="ModalFacture-change mr-1">Cambiar Datos</button>
					<button onClick={this.toggle} className="ModalFacture-send">Solicitar</button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className="" open={true} maxWidth='730px' centered={true}>
						<SentFacture />
					</Modal>
				</ModalFooter>
			</div>
		);
	}
}

export default ModalFacture;
