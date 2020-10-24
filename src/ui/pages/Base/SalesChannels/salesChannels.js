import React, { Component, Fragment } from 'react';
import Card from "../../../components/card/index";
import CardHeader from '../../../components/card/cardHeader';
import CardBody from '../../../components/card/cardBody';
import CardFooter from '../../../components/card/cardFooter';
import Switch from '../../../components/switch/index';
import Table from '../../../components/table/index';
import TableHeader from '../../../components/table/tableHeader';
import TableBody from '../../../components/table/tableBody';
import Arrow from '../../../../assets/img/brand/checkout/flecha.png';
import SectionTitle from '../../../components/sectionTitle';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Input from '../../../components/input/input';
import '../../../../assets/scss/pages/checkout.scss';
import '../../../../assets/scss/pages/cards.scss';
import '../../../../assets/scss/pages/tables.scss';
import '../../../../assets/scss/pages/modals.scss';

// import BasementButton from '../../../components/basement/basementButton';


class Shipping extends Component {
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

    // toggle() {
    //   this.setState({ collapse: !this.state.collapse });
    // }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    openModal = _ => {
        this.setState({ openModal: true })
    }

    closeModal = _ => {
        this.setState({ openModal: false })
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
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={"Modal"}>
                    <ModalHeader toggle={this.toggle} className={"Modal-headerWrapper"} close={externalCloseBtn}>
                        <span className="Modal-title">
                            Añadir punto de venta
                        </span>
                    </ModalHeader>
                    <ModalBody className={"Modal-body request"}>
                        <p className="Modal-text">Añade a continuación la información de los locales que quieres que aparezxan en tu tienda online para que tus clientes puedan visitarte o recoger su pedido.</p>
                        <div className="Modal-shippingCost">
                            <div className="row">
                                <div class="col-12 col-md-6">
                                    <Input value={"Nombre"} label={"Nombre de la tienda"} />
                                </div>
                                <div class="col-12 col-md-6">
                                    <Input value={"Barcelona"} label={"Ciudad"} />
                                </div>
                                <div class="col-12 col-md-6">
                                    <Input value={"C/ Santaló, 43"} label={"Dirección"} />
                                </div>
                                <div class="col-12 col-md-6">
                                    <Input value={"123456"} label={"Código"} />
                                </div>
                                <div class="col-12 col-md-6">
                                    <div className="Select">
                                        <label className="Select-text" htmlFor="select">Pais</label>
                                        <select className="Select-input" name="select" id="">
                                            <option value="">España</option>
                                            <option value="">Español</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <Input value={"4"} label={"Orden"} />
                                </div>
                                <div class="col-12 col-md-6">
                                    <div className="Select">
                                        <label className="Select-text" htmlFor="select">Provincia</label>
                                        <select className="Select-input" name="select" id="">
                                            <option value="">Barcelona</option>
                                            <option value="">Español</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <Input value={"123 456 789"} label={"Teléfono"} />
                                </div>
                                <div class="col-12 col-md-6">
                                    <Input value={"08008"} label={"CP"} />
                                </div>
                            </div>
                        </div>
                        <div class="Card-sectionForm">
                            <h4 class="Card-titleSectionForm">Horario</h4>
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="Card-wrapperSchedule">
                                        <label className="Card-container margin">Lunes
                                                        <input className="Card-checkContainer" type="checkbox" />
                                            <span className="Card-checkmark sales"></span>
                                        </label>
                                        <div className="Card-wrapperHours monday">
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>


                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="Card-wrapperSchedule">
                                        <label className="Card-container margin">Viernes
                                                <input className="Card-checkContainer" type="checkbox" />
                                            <span className="Card-checkmark sales"></span>
                                        </label>
                                        <div className="Card-wrapperHours">
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select class="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="Card-wrapperSchedule">
                                        <label className="Card-container margin">Martes
                                                <input className="Card-checkContainer" type="checkbox" />
                                            <span className="Card-checkmark sales"></span>
                                        </label>
                                        <div className="Card-wrapperHours">
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="Card-wrapperSchedule">
                                        <label className="Card-container margin">Sabado
                                                <input className="Card-checkContainer" type="checkbox" />
                                            <span className="Card-checkmark sales"></span>
                                        </label>
                                        <div className="Card-wrapperHours">
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="Card-wrapperSchedule">
                                        <label className="Card-container margin">Miercoles
                                                <input className="Card-checkContainer" type="checkbox" />
                                            <span className="Card-checkmark sales"></span>
                                        </label>
                                        <div className="Card-wrapperHours wednesday">
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="Card-wrapperSchedule">
                                        <label className="Card-container margin">Domingo
                                                <input className="Card-checkContainer" type="checkbox" />
                                            <span className="Card-checkmark sales"></span>
                                        </label>
                                        <div className="Card-wrapperHours sunday">
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="Card-wrapperSchedule">
                                        <label className="Card-container margin">Jueves
                                                <input className="Card-checkContainer" type="checkbox" />
                                            <span className="Card-checkmark sales"></span>
                                        </label>

                                        <div className="Card-wrapperHours">
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                            <div className="Select marginRight">
                                                <label className="Select-text" htmlFor="select">De:</label>
                                                <select className="Select-input width" name="select" id="">
                                                    <option value="">08:00</option>
                                                    <option value="">18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Card-sectionForm">
                            <p className="Card-text lessMargin">Foto principal</p>
                            <div className="Card-flexRow">
                                <div className="Card-wrapImage">
                                </div>
                                <input type="file" name="" id="image" className="d-none" />
                                <button for="image" className="Card-labelImage">
                                    <i className="i-uploadPicture" />
                                    <label className="mb-0" htmlFor="image">cargar</label>
                                </button>
                                <a href="/" className="Card-button">
                                    <i className="i-deletePicture" />
                                </a>
                                <a href="/" className="Card-button">
                                    <i className="i-updatePicture" />
                                </a>
                            </div>
                        </div>
                        <div className="Card-sectionForm">
                            <textarea name="" id="" cols="30" rows="10" class="Card-textarea" placeholder="Observaciones"></textarea>
                        </div>
                        <div className="Card-sectionForm mb-0 pb-0">
                            <input type="text" name="" id="" className="Card-inputText marginBottom" placeholder="Enlace mapa (Google Maps)"/>
                            <div className="Card-accountWrapperOption">
                                <label className="Card-container">¿Quieres que sea un punto de recogida?<i className="i-infoIcon" />
                                        <span className="Card-checkoutBodyText">Selecciona esta casilla si quieres que tus clientes puedan recoger su pedido en esta tienda.</span>
                                    <input className="Card-checkContainer" type="checkbox" />
                                    <span className="Card-checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="Modal-footer pt-0">
                        <a href="/" className="Modal-button padding">Aplicar</a>
                    </ModalFooter>
                </Modal>
                <div className="animated fadeIn">
                    <div className="content">
                        <SectionTitle>
                            <div className="SectionTitle-wrapperTitle payMethod">
                                <div className="SectionTitle-wrapperRow">
                                    <a href="/"><img src={Arrow} alt="Arrow" /></a>
                                    <div className="SectionTitle-wrapperColumn">
                                        <h2 className="SectionTitle-subtitle">
                                            Mi cuenta
                                        </h2>
                                        <h3 className="SectionTitle-title">
                                            Canales de venta
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </SectionTitle>
                        <div className="row">
                            <div className="col-12">
                                <Card className="no-border">
                                    <div className="Card-shipping listing">
                                        <CardHeader>
                                            <div className="Card-accountWrapperTitle mb-0">
                                                <span className="Card-shippingSubtitle">¿Tienes tiendas físicas?</span>
                                                <button className="Card-buttonLess"><i className="fas fa-minus" /></button>
                                            </div>
                                            <span className="Card-shippingTitle salesChannels">Añade a continuación la información de los locales que quieres que aparezxan en tu tienda online para que tus clientes puedan visitarte o recoger su pedido.</span>
                                        </CardHeader>
                                        <CardBody className="p-bottom">
                                            <button onClick={this.toggle} className="Table-addRegister mb-3">+ Agregar nuevo</button>
                                            <Table>
                                                <TableHeader >
                                                    <tr className="Table-tableRow borderNone">
                                                        <th className="Table-tableColumn">Nombre<i className="i-desplegable" /></th>
                                                        <th className="Table-tableColumn">Código<i className="i-desplegable" /></th>
                                                        <th className="Table-tableColumn">Dirección<i className="i-desplegable" /></th>
                                                        <th className="Table-tableColumn">Teléfono<i className="i-desplegable" /></th>
                                                        <th className="Table-tableColumn">Orden<i className="i-desplegable" /></th>
                                                        <th className="Table-tableColumn">Activa<i className="i-desplegable" /></th>
                                                        <th className="Table-tableColumn state">Estado<i className="i-desplegable" /></th>
                                                        <th className="Table-tableColumn actions"></th>
                                                    </tr>
                                                </TableHeader>
                                                <TableBody>
                                                    <tr className="Table-tableRow">
                                                        <td className="Table-tableColumn">Barcelona Sarrià</td>
                                                        <td className="Table-tableColumn">45234463</td>
                                                        <td className="Table-tableColumn">C/ Santaló, 43</td>
                                                        <td className="Table-tableColumn">45 345 678</td>
                                                        <td className="Table-tableColumn">1</td>
                                                        <td className="Table-tableColumn">Sí</td>
                                                        <td className="Table-tableColumn">
                                                            <Switch id={"state1"} name={"state1"} />
                                                        </td>

                                                        <td className="Table-tableColumn options">
                                                            <button className="Table-tableOption"><i className="i-duplicateShipping" /></button>
                                                            <button onClick={() => this.handlerShowDetail()} className="Table-tableOption"><i className="i-updateShipping" /></button>
                                                            <button className="Table-tableOption"><i className="i-deleteShipping" /></button>
                                                        </td>
                                                    </tr>

                                                    <tr className="Table-tableRow">
                                                        <td className="Table-tableColumn">Diagonal</td>
                                                        <td className="Table-tableColumn">45234463</td>
                                                        <td className="Table-tableColumn">Avida. Diagonal 345</td>
                                                        <td className="Table-tableColumn">45 345 678</td>
                                                        <td className="Table-tableColumn">2</td>
                                                        <td className="Table-tableColumn">Sí</td>
                                                        <td className="Table-tableColumn">
                                                            <Switch id={"state2"} name={"state2"} />
                                                        </td>

                                                        <td className="Table-tableColumn options">
                                                            <button className="Table-tableOption"><i className="i-duplicateShipping" /></button>
                                                            <button onClick={() => this.handlerShowDetail()} className="Table-tableOption"><i className="i-updateShipping" /></button>
                                                            <button className="Table-tableOption"><i className="i-deleteShipping" /></button>
                                                        </td>
                                                    </tr>

                                                    <tr className="Table-tableRow">
                                                        <td className="Table-tableColumn">Plaça Espanya</td>
                                                        <td className="Table-tableColumn">45234463</td>
                                                        <td className="Table-tableColumn">C/ Creu coberta, 88</td>
                                                        <td className="Table-tableColumn">45 345 678</td>
                                                        <td className="Table-tableColumn">3</td>
                                                        <td className="Table-tableColumn">Sí</td>
                                                        <td className="Table-tableColumn">
                                                            <Switch id={"state3"} name={"state3"} />
                                                        </td>

                                                        <td className="Table-tableColumn options">
                                                            <button className="Table-tableOption"><i className="i-duplicateShipping" /></button>
                                                            <button onClick={() => this.handlerShowDetail()} className="Table-tableOption"><i className="i-updateShipping" /></button>
                                                            <button className="Table-tableOption"><i className="i-deleteShipping" /></button>
                                                        </td>
                                                    </tr>

                                                </TableBody>
                                            </Table>
                                        </CardBody>
                                        <CardFooter>
                                            <a className="text-decoration-none" href="/"><p className="Table-descriptionTable red">¿Quieres conectar tus canales de venta con tu tienda online para tener una gestión única de todos tus puntos de venta? <span className="Table-textDecoration">Solicítanos información sin compromiso</span></p></a>
                                        </CardFooter>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Shipping;
