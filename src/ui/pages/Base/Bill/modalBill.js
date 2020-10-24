import React, { Component } from 'react';
import BillFile from '../../../../assets/img/brand/modal/Grupo 240.png';
import DownloadIcon from '../../../../assets/img/brand/modal/Grupo 60.png';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';

import '../../../../assets/scss/pages/modals.scss';

class ModalBill extends Component {
    constructor(props) {
        super(props);


        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            openModal: false,
            modal: false
        };
    }

    toggle() {
        this.setState({
          modal: !this.state.modal,
        });
      }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        const externalCloseBtn = <button className="Modal-buttonClose yellow" onClick={this.toggle}><i class="fas fa-times"></i></button>;
        return (
            <div className="animated fadeIn">
                <Button onClick={this.toggle} className="mr-1">Launch demo modal</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={"Modal"} >
                    <ModalHeader toggle={this.toggle} className={"Modal-headerWrapper yellow"} close={externalCloseBtn}>
                        <h3 className="Modal-titleSend">
                            Factura realizada
                        </h3>
                    </ModalHeader>
                    <ModalBody >
                        <div className="Modal-wrapperSend">
                            <p className="Modal-billText">Tu factura número <span className="font-weight-bold">0987347</span> ha sido realizada.</p>
                            <img className="Modal-imageSend" src={BillFile} alt="Factura Realizada" />
                            <button className="Modal-buttonBill"><img className="Modal-buttonBillIcon" src={DownloadIcon} alt="Cuenta"/>Descargar Factura</button>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalBill;
