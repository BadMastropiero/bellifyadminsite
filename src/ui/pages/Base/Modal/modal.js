import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import requesteFile from '../../../../assets/img/brand/modal/Group 247.png';

import '../../../../assets/scss/pages/modals.scss';

export default function SendRequest(props) {
    const externalCloseBtn = <button className="Modal-buttonClose yellow" onClick={props.toggleModal}><i class="fas fa-times"></i></button>;
    return (
        <div className="animated fadeIn">
            <Modal isOpen={props.isOpen} toggle={props.toggleModal} className="Modal">
                <ModalHeader className="Modal-headerWrapper yellow" close={externalCloseBtn}>
					<h3 className="Modal-titleSend mb-0">
						Solicitud enviada
					</h3>
                </ModalHeader>
                <ModalBody>
					<div className="Modal-wrapperSend">
						<p className="Modal-textSend">Hemos enviado tu solicitud, nos pondremos en contacto contigo lo antes posible, ¡Gracias!</p>
						<img className="Modal-imageSend" src={requesteFile} alt="Solicitud Enviada" />
					</div>
                </ModalBody>
            </Modal>
        </div>
    );
}
