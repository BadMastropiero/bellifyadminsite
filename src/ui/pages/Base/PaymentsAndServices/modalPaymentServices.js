import React from 'react';
import {Modal} from "reactstrap"
import {Link} from "react-router-dom"
import ModalHeader from '../../../components/modal/modalHeader';
import ModalBody from '../../../components/modal/modalBody';

import '../../../../assets/scss/pages/setPayMethod.scss';

const PaymentServices = (props) => {

        return (
            <div className="animated fadeIn">
                <Modal isOpen={props.isOpen} toggle={props.toggleModal} centered size='lg' className="className">
                    <ModalHeader>
                        <div className="Modal-headerWrapper">
                            <h3 className="Modal-title">
                                Tus pagos y servicios contratados este mes
                            </h3>
                            <button onClick={props.toggleModal} className="Modal-buttonClose"><i class="fas fa-times"></i></button>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="Modal-paymentServices">
                            <div>
                                <div className="Modal-nameServiceWrapper">
                                    <div className="Modal-circle"></div>
                                    <div className="Modal-wrapperServiceText">
                                        <p className="Modal-serviceName">Nombre del servicio</p>
                                        <p className="Modal-price">4,00€
                                            <span className="Modal-month">/mes</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="Modal-date">
                                    Fecha certificación: 09/08/19
                                </p>
                                <p className="Modal-contractText">Contratado con E-Basic ¿
                                    <Link className="Modal-contractChanger">Quieres cambiar de plan?</Link>
                                </p>
                                <p className="Modal-paymentServicesText">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis ante eget leo feugiat, vitae porttitor nunc tristique. Curabitur turpis sem, bibendum et malesuada ut, luctus id eros. Cras faucibus viverra orci. Nullam eget ultricies leo, vel luctus orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
        </div>
    );
}

export default PaymentServices;
