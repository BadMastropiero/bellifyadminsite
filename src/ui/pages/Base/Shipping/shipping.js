import React, { Component, Fragment } from 'react';
import Card from "../../../components/card/index";
import CardHeader from '../../../components/card/cardHeader';
import CardBody from '../../../components/card/cardBody';
import CardFooter from '../../../components/card/cardFooter';
import Switch from '../../../components/switch/index';
import ShippingFile1 from '../../../../assets/img/brand/shipping/envio-1-shipius.png';
import ShippingFile2 from '../../../../assets/img/brand/shipping/envio-2-deliverea.png';
import ShippingFile3 from '../../../../assets/img/brand/shipping/envio-3-sabadell.png';
import ShippingFile4 from '../../../../assets/img/brand/shipping/logo-packlink.png';
import Arrow from '../../../../assets/img/brand/checkout/flecha.png';
import SectionTitle from '../../../components/sectionTitle';
import { Modal, ModalBody, ModalHeader, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import Input from '../../../components/input/input';

import '../../../../assets/scss/pages/checkout.scss';
import '../../../../assets/scss/pages/cards.scss';
import '../../../../assets/scss/pages/tables.scss';
import '../../../../assets/scss/pages/modals.scss';
// import ShippingSpeechbubble from '../../../components/Shipping/ShippingSpeechbubble';
import Table from '../../../components/table';
import TableHeader from '../../../components/table/tableHeader';
import TableBody from '../../../components/table/tableBody';

// import BasementButton from '../../../components/basement/basementButton';
let position = "";

class Shipping extends Component {
	constructor(props) {
		super(props);


		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			openModal: false,
			showTable: false,
			showDetail: false,
			modal: false,
			activeTab: "1",
			withBorder1: false,
			withBorder2: false,
			withBorder3: false,
			withBorder4: false
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

	handlerShowTable = (idCard) => {
		switch (idCard) {
			case 1:
				position = "left1"
				break;

			case 2:
				position = "left2"
				break;

			case 3:
				position = "left3"
				break;

			case 4:
				position = "left4"
				break;

			default:
				break;
		}
		this.setState((prevState) => ({
			showTable: !prevState.showTable
		}))
	}

	handlerShowDetail = () => {
		this.setState((prevState) => ({
			showDetail: !prevState.showDetail,
			showTable: false
		}))
	}

	render() {
		const { showTable, showDetail, withBorder1, withBorder2, withBorder3, withBorder4 } = this.state;
		const externalCloseBtn = <button className="Modal-buttonClose" onClick={this.toggle}><i class="fas fa-times"></i></button>;
		return (
			<Fragment>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={"Modal"}>
					<ModalHeader toggle={this.toggle} className={"Modal-headerWrapper"} close={externalCloseBtn}>
						<span className="Modal-title">
							Costes de envío
            </span>
					</ModalHeader>
					<ModalBody className={"Modal-body request"}>
						<p className="Modal-text">Proporciona el nombre del rango de entrega y la ozna para el que estará disponible.</p>
						<div className="Modal-shippingCost">
							<div className="row">
								<div className="col-6">
									<div className="Select">
										<label className="Select-text" htmlFor="select">Nombre del rango de envío</label>
										<select class="Select-input" name="select" id="">
											<option value="">Entrega en 5-6 días</option>
											<option value="">Español</option>
										</select>
									</div>
								</div>
								<div className="col-6">
									<div className="Select">
										<label className="Select-text zone" htmlFor="select">A la zona</label>
										<select class="Select-input" name="select" id="">
											<option value=""></option>
											<option value="">Español</option>
										</select>
									</div>
								</div>
								<div className="col-6 offset-6">
									<div className="Modal-wrapperList">
										<ul className="Modal-listZone">
											<li className="Modal-list">China <span className="Modal-listItem">Eliminar</span></li>
											<li className="Modal-list">Canadá<span className="Modal-listItem">Eliminar</span></li>
											<li className="Modal-list">Italia <span className="Modal-listItem">Eliminar</span></li>
											<li className="Modal-list">Marruecos <span className="Modal-listItem">Eliminar</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="Modal-boxPrice">
							<p className="Card-shippingSubtitle">Precio</p>
							<p className="Card-shippingTitle">Configura el precio para este rango de entrega y define si va a ser calculado segun el precio del pedido o su peso.</p>
							<div className="row">
								<div className="col-6">
									<Input value={"0,00"} label={"Des del precio"} customClass={"modalCost"} />
								</div>
								<div className="col-6">
									<Input value={"100,00"} label={"Hasta el precio"} customClass={"modalCost"} />
								</div>
								<div className="col-6">
									<Input value={"7,00"} label={"Coste de envío"} customClass={"modalCost"} />
								</div>
							</div>
						</div>
					</ModalBody>
					<a href="/" className="Modal-button padding">Aplicar</a>
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
											Envíos
                      </h3>
									</div>
								</div>
							</div>
						</SectionTitle>
						<div className="row">
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder1 ? "Card-box withBorder" : "Card-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={ShippingFile1} alt="Shipius" />
												<h2 className="BeonshopCardHeader-title">Shipius click&ship</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Transporte y logística especializado en ecommerce con envíos nacionales a partir de 3,50€. También ofrece envíos internacionales y gestionan la at (+)</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch1()} id={"chck"} name={"chck"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.handlerShowTable(1)}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder2 ? "Card-box withBorder" : "Card-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={ShippingFile2} alt="Deliverea" />
												<h2 className="BeonshopCardHeader-title">Deliverea</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Deliverea te permite trabajar con varios transportistas unificando etiquetas, estados y opciones de seguimiento. Este es gratuito hasta 30 envíos (+)</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch2()} id={"chck1"} name={"chck1"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.handlerShowTable(2)}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder3 ? "Card-box withBorder" : "Card-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={ShippingFile3} alt="Transportista propio" />
												<h2 className="BeonshopCard-title">Transportista propio</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Añade los transportistas con los que trabajes y configura distintos gastos de envío dependiendo por ejemplo del peso o zona de envío..</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch3()} id={"chck2"} name={"chck2"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.handlerShowTable(3)}>Configurar</button>
											</div>
										</CardFooter>
									</div>

								</Card>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-lg-3">
								<Card>
									<div className={withBorder4 ? "Card-box withBorder" : "Card-box"}>
										<CardHeader>
											<div className="BeonshopCardHeader-wrapper">
												<img className="Card-payMethodImage" src={ShippingFile4} alt="Packlink" />
												<h2 className="BeonshopCard-title">Packlink</h2>
											</div>
										</CardHeader>
										<CardBody>
											<p className="BeonshopCard-description">Precio Mínimo Garantizado ¡Compara entre los servicios y ahorra con Packlink! Servicio puerta a puerta. Entrega día siguiente.</p>
										</CardBody>
										<CardFooter>
											<div className="BeonshopCardFooter-wrapper">
												<Switch onChange={() => this.handlerSwitch4()} id={"chck3"} name={"chck3"} />
												<button className="BeonshopCardFooter-button" onClick={() => this.handlerShowTable(4)}>Configurar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12">
								<Card className={"border-0"}>
									<div className={showTable ? `Card-shipping listing ${position}` : "d-none"}>
										<button onClick={() => this.handlerShowTable()} className="Modal-buttonClose gray"><i class="fas fa-times"></i></button>
										<CardHeader>
											<div className="Card-shippingHeader borderNone">
												<div className="Card-shippingWrappercolumn">
													<span className="Card-shippingSubtitle">Listado de transportista propio</span>
													<span className="Card-shippingTitle">Añade los transportistas con los que trabajes y configura distintos gastos de envío dependiendo por ejemplo del peso o zona de envío.</span>
												</div>
											</div>
											<button className="Card-shippingButton">+ Añadir</button>
										</CardHeader>
										<CardBody>
											<Table>
												<TableHeader>
													<tr className="Table-tableRow borderNone">
														<th className="Table-tableColumn">Nombre<i className="i-desplegable" /></th>
														<th className="Table-tableColumn">Descripción<i className="i-desplegable" /></th>
														<th className="Table-tableColumn">Activo<i className="i-desplegable" /></th>
														<th className="Table-tableColumn"></th>
													</tr>
												</TableHeader>
												<TableBody>
													<tr className="Table-tableRow">
														<td className="Table-tableColumn">MRV</td>
														<td className="Table-tableColumn">Nuestro sistema de entrega básico</td>
														<td className="Table-tableColumn">
															<Switch id={"list"} name={"list"} />
														</td>

														<td className="Table-tableColumn options mr-3">
															<button className="Table-tableOption p-0"><i className="i-duplicateShipping" /></button>
															<button onClick={() => this.handlerShowDetail()} className="Table-tableOption p-0"><i className="i-updateShipping" /></button>
															<button className="Table-tableOption p-0"><i className="i-deleteShipping" /></button>
														</td>
													</tr>
													<tr className="Table-tableRow">
														<td className="Table-tableColumn">MRV</td>
														<td className="Table-tableColumn">Nuestro sistema de entrega básico</td>
														<td className="Table-tableColumn">
															<Switch id={"list1"} name={"list1"} />
														</td>

														<td className="Table-tableColumn options mr-3">
															<button className="Table-tableOption p-0"><i className="i-duplicateShipping" /></button>
															<button onClick={() => this.handlerShowDetail()} className="Table-tableOption p-0"><i className="i-updateShipping" /></button>
															<button className="Table-tableOption p-0"><i className="i-deleteShipping" /></button>
														</td>
													</tr>
													<tr className="Table-tableRow">
														<td className="Table-tableColumn">MRV</td>
														<td className="Table-tableColumn">Nuestro sistema de entrega básico</td>
														<td className="Table-tableColumn">
															<Switch id={"list2"} name={"list2"} />
														</td>

														<td className="Table-tableColumn options mr-3" colSpan="2">
															<button className="Table-tableOption p-0"><i className="i-duplicateShipping" /></button>
															<button onClick={() => this.handlerShowDetail()} className="Table-tableOption p-0"><i className="i-updateShipping" /></button>
															<button className="Table-tableOption p-0"><i className="i-deleteShipping" /></button>
														</td>
													</tr>
												</TableBody>
											</Table>
										</CardBody>
										<CardFooter>
											<a className="text-decoration-none" href="/"><p class="Table-descriptionTable">En caso de querer que configuremos automáticamente tu sistema de recogida y envío, ponte en contacto con nosotros haciendo click aquí</p></a>
										</CardFooter>
									</div>
								</Card>
							</div>
							<div className="col-12">
								<Card className={"border-0"}>
									<div className={showDetail ? `Card-shipping ${position}` : "d-none"}>
										<button onClick={this.handlerShowDetail} className="Modal-buttonClose gray"><i class="fas fa-times"></i></button>
										<CardHeader>
											<div className="Card-shippingHeader">
												<img className="Card-shippingIcon" src={Arrow} alt="Arrow icon" />
												<div className="Card-shippingWrappercolumn">
													<span className="Card-shippingTitle">Listado de transportista propio</span>
													<span className="Card-shippingSubtitle">MRV</span>
												</div>
											</div>
										</CardHeader>
										<CardBody>
											<p className="Card-shippingSubtitle">Detalles básicos</p>
											<p className="Card-shippingTitle margin">Proporciona el nombre del transportista y una descripción interna si es necesario.</p>
											<Nav tabs>
												<NavItem className={this.state.activeTab === "1" ? "Card-shippingOption" : "Card-shippingOption bgWhite"}>
													<span onClick={() => { this.tabs('1') }} >
														ES
                          							</span>
												</NavItem>
												<NavItem className={this.state.activeTab === "2" ? "Card-shippingOption" : "Card-shippingOption bgWhite"}>
													<span onClick={() => { this.tabs('2'); }}>
														ENG
													</span>
												</NavItem>
											</Nav>
											<TabContent className="border-0" activeTab={this.state.activeTab}>
												<TabPane className="p-0" tabId="1" >
													<div className="Card-shippingWrapper">
														<p className="Card-shippingItem">Nombre<span className="Card-shippingItemBold">RSV</span></p>
														<p className="Card-shippingItem width">Descripción<span className="Card-shippingItemBold">Nuestro sistema de entrega básico</span></p>
													</div>
												</TabPane>
												<TabPane className="p-0" tabId="2" >
													<div className="Card-shippingWrapper">
														<p className="Card-shippingItem">Nombre<span className="Card-shippingItemBold">RSV</span></p>
														<p className="Card-shippingItem width">Descripción<span className="Card-shippingItemBold">Nuestro sistema de entrega básico</span></p>
													</div>
												</TabPane>
											</TabContent>
											<div className="Card-shippingTable">
												<p className="Card-shippingSubtitle withBorder">Costes de envío</p>
												<p className="Card-shippingTitle margin">Añadir costes de envío.</p>
												<button className="Table-addRegister" onClick={this.toggle}>+ Agregar rango de envío</button>
												<Table>
													<TableHeader >
														<tr className="Table-tableRow borderNone">
															<th className="Table-tableColumn">Nombre del rango de envío<i className="i-desplegable" /></th>
															<th className="Table-tableColumn">A la zona<i className="i-desplegable" /></th>
															<th className="Table-tableColumn">Valor<i className="i-desplegable" /></th>
															<th className="Table-tableColumn">Precio<i className="i-desplegable" /></th>
															<th className="Table-tableColumn"></th>
														</tr>
													</TableHeader>
													<tbody className="Table-tableBody">
														<tr className="Table-tableRow">
															<td className="Table-tableColumn">Entrega en 5-6 días</td>
															<td className="Table-tableColumn">España</td>
															<td className="Table-tableColumn">De 0,00€ a 200,00€</td>
															<td className="Table-tableColumn">15,00€</td>
															<td className="Table-tableColumn options mr-3">
																<button className="Table-tableOption p-0"><i className="i-duplicateShipping" /></button>
																<button onClick={() => this.handlerShowDetail()} className="Table-tableOption p-0"><i className="i-updateShipping" /></button>
																<button className="Table-tableOption p-0"><i className="i-deleteShipping" /></button>
															</td>
														</tr>
														<tr className="Table-tableRow">
															<td className="Table-tableColumn">Entrega en 5-6 días</td>
															<td className="Table-tableColumn">España</td>
															<td className="Table-tableColumn">De 0,00€ a 200,00€</td>
															<td className="Table-tableColumn">15,00€</td>
															<td className="Table-tableColumn options mr-3">
																<button className="Table-tableOption p-0"><i className="i-duplicateShipping" /></button>
																<button onClick={() => this.handlerShowDetail()} className="Table-tableOption p-0"><i className="i-updateShipping" /></button>
																<button className="Table-tableOption p-0"><i className="i-deleteShipping" /></button>
															</td>
														</tr>
														<tr className="Table-tableRow">
															<td className="Table-tableColumn">Entrega en 5-6 días</td>
															<td className="Table-tableColumn">España</td>
															<td className="Table-tableColumn">De 0,00€ a 200,00€</td>
															<td className="Table-tableColumn">15,00€</td>
															<td className="Table-tableColumn options mr-3" colSpan="2">
																<button className="Table-tableOption p-0"><i className="i-duplicateShipping" /></button>
																<button onClick={() => this.handlerShowDetail()} className="Table-tableOption p-0"><i className="i-updateShipping" /></button>
																<button className="Table-tableOption p-0"><i className="i-deleteShipping" /></button>
															</td>
														</tr>
													</tbody>
												</Table>
											</div>
										</CardBody>
										<CardFooter>
											<div className="Card-checkoutWrapperButton">
												<button className="Card-checkoutButton">Guardar</button>
											</div>
										</CardFooter>
									</div>
								</Card>
							</div>
							{/* <BasementButton /> */}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Shipping;
