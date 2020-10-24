import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../../../assets/scss/pages/setPayMethod.scss';

export default function SetupPayMethod(props) {
    const externalCloseBtn = <button className="Modal-buttonClose" onClick={props.toggleModal}><i class="fas fa-times"></i></button>;
    return (
        <div className="animated fadeIn">
            <Modal isOpen={props.isOpen} toggle={props.toggleModal} className="Modal">
                <ModalHeader className="Modal-headerWrapper" close={externalCloseBtn}>
                    <h3 className="Modal-title mb-0">
                        Configurar forma de pago
                    </h3>
                </ModalHeader>
                <ModalBody className="Modal-body request">                   
                    <p className="Modal-text">El TPV de La Caixa se integra facilmente con su tienda virtual y ofrece una amplia gama de servicios para dar a sus clientes las máximas prestaciones.</p>
                    <textarea className="Modal-textArea" placeholder="Cuéntanos qué forma de pago quieres solicitar"></textarea>                        
                </ModalBody>
                <ModalFooter className="Modal-footer">
                    <button className="Modal-button" onClick={props.toggleModal}>Enviar solicitud</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
