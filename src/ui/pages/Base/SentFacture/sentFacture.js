import React, { useState } from 'react';
import { Modal } from 'reactstrap'
import ModalHeader from '../../../components/modal/modalHeader';
import ModalBody from '../../../components/modal/modalBody';


import '../../../../assets/scss/pages/modals.scss';
import "../../../../assets/scss/components/_sent-facture.scss"

import facturationSent from "../../../../assets/img/brand/facturation/facturation-sent.svg"

const SentFacture = (props) => {
	const {
		className
	} = props;

	const [modal, setModal] = useState(true);

	const toggle = () => setModal(!modal);


	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} className={className} size='lg' centered >
				<ModalHeader>
					<div className="Modal-headerWrapper yellow">
						<h3 className="Modal-titleSend">
							Factura Realizada
              </h3>
						<button onClick={toggle} className="Modal-buttonClose yellow"><i class="fas fa-times"></i></button>
					</div>
				</ModalHeader>
				<ModalBody>
					<div className="Modal-wrapperSend">
						<span className="Modal-textSend">Tu factura número 12345667890 ha sido realizada</span>
						<img className="Modal-imageSend" src={facturationSent} alt="Solicitud Enviada" />
						<button className="Modal-download"><i className="i-download" /> Descargar factura</button>
					</div>
				</ModalBody>
			</Modal>
		</div>
	);

}

export default SentFacture;
