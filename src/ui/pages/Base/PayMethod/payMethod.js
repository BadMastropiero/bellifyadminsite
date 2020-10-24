import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Card from "../../../components/card/index";
import CardHeader from '../../../components/card/cardHeader';
import CardBody from '../../../components/card/cardBody';
import CardFooter from '../../../components/card/cardFooter';
import Switch from '../../../components/switch/index';
import payMethodFile1 from '../../../../assets/img/brand/payMethod/1-lacaixa.png';
import payMethodFile2 from '../../../../assets/img/brand/payMethod/2-sabadell.png';
import payMethodFile3 from '../../../../assets/img/brand/payMethod/3-BBVA.png';
import payMethodFile4 from '../../../../assets/img/brand/payMethod/4-bankTransfer.png';
import payMethodFile5 from '../../../../assets/img/brand/payMethod/5-bakinter.png';
import payMethodFile6 from '../../../../assets/img/brand/payMethod/6-paypal.png';
import payMethodFile7 from '../../../../assets/img/brand/payMethod/7-aplazame.png';
import Arrow from '../../../../assets/img/brand/checkout/flecha.png';
import SectionTitle from '../../../components/sectionTitle';
import ModalPayMethod from '../SetupPayMethod/setupPayMethod';
import ModalSend from '../Modal/modal';
import { Nav, NavItem, TabContent, TabPane } from "reactstrap";

import '../../../../assets/scss/pages/pay-methods.scss';
import '../../../../assets/scss/pages/checkout.scss';

// import BasementButton from '../../../components/basement/basementButton';


class PayMethod extends Component {
	constructor(props) {
		super(props);


		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			openModal: false,
			modal: false,
			isOpen: false,
			finalModal: false,
			activeTab: "1",
			withBorder1: false,
			withBorder2: false,
			withBorder3: false,
			withBorder4: false,
			withBorder5: false,
			withBorder6: false,
			withBorder7: false,
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

	toggleModal = () => {
		this.setState((prevState) => {
			return { isOpen: !prevState.isOpen, modal: false, finalModal: false }
		});
	}

	finalToggleModal = () => {
		this.setState((prevState) => {
			return { finalModal: !prevState.finalModal, isOpen: false }
		});
	}

	tabs(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	handlerSwitch1 = () => {
		this.setState((prevState) => ({
			withBorder1: !prevState.withBorder1
		}))
	}

	handlerSwitch2 = () => {
		this.setState((prevState) => ({
			withBorder2: !prevState.withBorder2
		}))
	}

	handlerSwitch2 = () => {
		this.setState((prevState) => ({
			withBorder2: !prevState.withBorder2
		}))
	}
	handlerSwitch3 = () => {
		this.setState((prevState) => ({
			withBorder3: !prevState.withBorder3
		}))
	}

	handlerSwitch4 = () => {
		this.setState((prevState) => ({
			withBorder4: !prevState.withBorder4
		}))
	}

	handlerSwitch5 = () => {
		this.setState((prevState) => ({
			withBorder5: !prevState.withBorder5
		}))
	}

	handlerSwitch6 = () => {
		this.setState((prevState) => ({
			withBorder6: !prevState.withBorder6
		}))
	}

	handlerSwitch7 = () => {
		this.setState((prevState) => ({
			withBorder7: !prevState.withBorder7
		}))
	}

	render() {
		const externalCloseBtn = <button className="Modal-buttonClose" onClick={this.toggle}><i class="fas fa-times"></i></button>;
		const { withBorder1, withBorder2, withBorder3, withBorder4, withBorder5, withBorder6, withBorder7 } = this.state;

		return (
			<Fragment>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={"Modal"}>
					<ModalHeader toggle={this.toggle} className={"Modal-headerWrapper"} close={externalCloseBtn}>
						<span className="Modal-title">
							Configurar forma de pago
            			</span>
					</ModalHeader>
					<ModalBody className={"Modal-body"}>
						<p className="Modal-text">El TPV de La Caixa se integra facilmente con su tienda virtual y ofrece una amplia gama de servicios para dar a sus clientes las máximas prestaciones.</p>
						<Nav tabs>
							<NavItem className={this.state.activeTab === "1" ? "Modal-option" : "Modal-option bgWhite"}>
								<span onClick={() => { this.tabs('1') }} >
									Real
								</span>
							</NavItem>
							<NavItem className={this.state.activeTab === "2" ? "Modal-option" : "Modal-option bgWhite"}>
								<span onClick={() => { this.tabs('2'); }}>
									Test
								</span>
							</NavItem>
						</Nav>
						<TabContent className="border-0" activeTab={this.state.activeTab}>
							<TabPane className="p-0" tabId="1" >
								<div className="Modal-wrapper">
									<p className="Modal-itemName">Código de Comercio<span className="Modal-itemCode">8765875</span></p>
									<p className="Modal-itemName key">Clave secreta<span className="Modal-itemCode">43635</span></p>
									<p className="Modal-itemName terminal">Terminal<span className="Modal-itemCode">2453677</span></p>
								</div>
							</TabPane>
							<TabPane className="p-0" tabId="2" >
								<div className="Modal-wrapper">
									<p className="Modal-itemName">Código de Comercio<span className="Modal-itemCode">8765875</span></p>
									<p className="Modal-itemName key">Clave secreta<span className="Modal-itemCode">43635</span></p>
									<p className="Modal-itemName terminal">Terminal<span className="Modal-itemCode">2453677</span></p>
								</div>
							</TabPane>
						</TabContent>
						<div className="Modal-wrapperButtons">
							<div className="Modal-wrapperButton">
								<Switch id={"chck7"} name={"chck7"} />
								<span className="Modal-payMethodType">Modo test activado</span>
							</div>
							<div className="Modal-wrapperButton">
								<Switch id={"chck8"} name={"chck8"} />
								<span className="Modal-payMethodType">TPV Activado</span>
							</div>
						</div>
					</ModalBody>
					<ModalFooter className="Modal-footer">
						<button className="Modal-button" onClick={this.toggleModal}>Solicitar</button>
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
											Formas de pago
                      					</h3>
									</div>
								</div>
							</div>
						</SectionTitle>
						<div className="row">
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder1 ? "BeonshopCard-box withBorder" : "BeonshopCard-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={payMethodFile1} alt="La Caixa" />
												<h2 className="BeonshopCard-title">TPV La Caixa</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">El TPV de La Caixa se integra facilmente con su tienda virtual y ofrece una amplia gama de servicios para dar a sus clientes las máximas prestaciones.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch1()} id={"chck"} name={"chck"} />
												<button className="BeonshopCardFooter-button" onClick={this.toggle}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder2 ? "BeonshopCard-box withBorder" : "BeonshopCard-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={payMethodFile2} alt="Sabadell" />
												<h2 className="BeonshopCard-title">TPV Banc Sabadell</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">El TPV de La Caixa se integra facilmente con su tienda virtual y ofrece una amplia gama de servicios para dar a sus clientes las máximas prestaciones.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch2()} id={"chck1"} name={"chck1"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.openModal()}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder3 ? "BeonshopCard-box withBorder" : "BeonshopCard-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={payMethodFile3} alt="BBBVA" />
												<h2 className="BeonshopCard-title">TPV BBVA</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra lectus tincidunt, hendrerit lacus eu, lorem sagittis eros.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch3()} id={"chck2"} name={"chck2"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.openModal()}>Configurar</button>
											</div>
										</CardFooter>
									</div>

								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder4 ? "BeonshopCard-box withBorder" : "BeonshopCard-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={payMethodFile4} alt="TransferBank" />
												<h2 className="BeonshopCard-title">Transferencia bancaria</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra lectus tincidunt, hendrerit lacus eu, lorem sagittis eros.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch4()} id={"chck3"} name={"chck3"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.openModal()}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder5 ? "BeonshopCard-box withBorder" : "BeonshopCard-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={payMethodFile5} alt="Bakinter" />
												<h2 className="BeonshopCard-title">TPV Bankinter</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra lectus tincidunt, hendrerit lacus eu, lorem sagittis eros.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch5()} id={"chck4"} name={"chck4"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.openModal()}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder6 ? "BeonshopCard-box withBorder" : "BeonshopCard-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={payMethodFile6} alt="Paypal" />
												<h2 className="BeonshopCard-title">Paypal</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra lectus tincidunt, hendrerit lacus eu, lorem sagittis eros.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch6()} id={"chck5"} name={"chck5"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.openModal()}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder7 ? "BeonshopCard-box withBorder" : "BeonshopCard-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={payMethodFile7} alt="Aplazame" />
												<h2 className="BeonshopCard-title">Aplazame</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra lectus tincidunt, hendrerit lacus eu, lorem sagittis eros.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch7()} id={"chck6"} name={"chck6"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.openModal()}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							{/* <BasementButton /> */}
						</div>

					</div>
				</div>
				<ModalPayMethod isOpen={this.state.isOpen} toggleModal={this.finalToggleModal} />
				<ModalSend isOpen={this.state.finalModal} toggleModal={this.finalToggleModal} />
			</Fragment>
		);
	}
}

export default PayMethod;
