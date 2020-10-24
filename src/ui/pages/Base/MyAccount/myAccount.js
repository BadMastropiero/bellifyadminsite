import React, { Component, Fragment } from 'react';
import Card from "../../../components/card/index";
import CardHeader from '../../../components/card/cardHeader';
import CardBody from '../../../components/card/cardBody';
import CardFooter from '../../../components/card/cardFooter';
import SectionTitle from '../../../components/sectionTitle';
import SaveBar from '../../../components/saveBar';
import SaveIcon from '../../../../assets/img/brand/checkout/Group 96.png';
import ShowIcon from '../../../../assets/img/brand/checkout/Group 97.png';
import Arrow from '../../../../assets/img/brand/checkout/flecha.png';
import MasterCard from '../../../../assets/img/brand/myAccount/mastercard.png';
import updateAccount from '../../../../assets/img/brand/myAccount/boton-editar-mini@2x.png';
import deleteAccount from '../../../../assets/img/brand/myAccount/boton-borrar-mini@2x.png';
import uploadAccount from '../../../../assets/img/brand/myAccount/Group 33.png';
import Table from '../../../components/table/index';
import TableHeader from '../../../components/table/tableHeader';
import TableBody from '../../../components/table/tableBody';
import TableFooter from '../../../components/table/tableFooter';
import Input from '../../../components/input/input';
import ModalService from '../PaymentsAndServices/modalPaymentServices';
import ModalAnnualPayment from '../AnnualPayments/annualPayments';
import ModalMonthPayment from '../MonthlyPayments/monthlyPayments';

import '../../../../assets/scss/pages/cards.scss';
import '../../../../assets/scss/pages/checkout.scss';
import '../../../../assets/scss/pages/tables.scss';


class MyAccount extends Component {

    state = {
        collapse1: true,
        collapse2: true,
        collapse3: true,
        collapse4: true,
        collapse5: true,
        collapse6: true,
        fadeIn: true,
        timeout: 300,
        openModal: false,
        isOpen: false,
        annualPayment: false,
        monthPayment: false
    };

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
    }

    toggle(name, value) {
        this.setState({ [name]: !value });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    openModal = () => {
        this.setState({ openModal: true })
    }

    toggleModal = () => {
		this.setState((prevState) => {
			return { isOpen: !prevState.isOpen}
		});
    }

    toggleAnnualModal = () => {
		this.setState((prevState) => {
			return { annualPayment: !prevState.annualPayment}
		});
    }
    
    toggleMonthModal = () => {
        console.log("cerrando modal")
		this.setState((prevState) => {
			return { monthPayment: !prevState.monthPayment}
		});
	}
    
    render() {

        return (
            <Fragment>
                <div className="animated fadeIn">
                    <SaveBar>
                        <button className="SectionTitle-buttonSave show"><img className="SectionTitle-icon show" src={ShowIcon} alt="Show" /></button>
                        <button className="SectionTitle-buttonSave">Guardar todo <img className="SectionTitle-icon" src={SaveIcon} alt="Save" /></button>
                    </SaveBar>
                    <div className="content">
                        <SectionTitle>
                            <div className="SectionTitle-wrapperTitle">
                                <div className="SectionTitle-wrapperRow">
                                    <a href="/"><img src={Arrow} alt="Arrow" /></a>
                                    <div className="SectionTitle-wrapperColumn">
                                        <h2 className="SectionTitle-subtitle">
                                            Mi cuenta
                                        </h2>
                                        <h3 className="SectionTitle-title">
                                            Editar Perfil
                                        </h3>
                                    </div>
                                </div>
                            </div>                        
                        </SectionTitle>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <Card useButton={true}>
                                <CardHeader>
                                    <div className="Card-accountWrapperTitle">
                                        <h3 className="Card-accountTitle">Información de contacto</h3>
                                    </div>
                                    <p className="Card-accountText mb-0">Déjanos tu información de contacto para poder hablar con el responsable de gestión del proyecto en caso de necesidad. </p>
                                </CardHeader>
                                <CardBody>
                                    <div className="Card-accountBodyWrapper">
                                        <div className="row">
                                            <div className="col-6">
                                                <Input value={"Antonio"} label={"Nombre"} />
                                            </div>
                                            <div className="col-6">
                                            <Input value={"antonio@logotipo.com"} label={"Cuenta de email"} />
                                            </div>
                                            <div className="col-6">
                                                <Input value={"Horcajo Nicolau"} label={"Apellidos"} />
                                            </div>
                                            <div className="col-6">
                                                <Input value={"+34   932800150"} label={"Teléfono de contacto personal"} customClass={"margin"}/>
                                            </div>
                                            <div className="col-6">
                                                <div class="Card-sectionForm border-bottom-0 pb-0">
                                                    <p class="Card-text lessMargin font-weight-bold">Foto de portada</p>
                                                    <div class="Card-flexRow">
                                                        <div class="Card-wrapImage">
                                                            <img src="" alt="" />
                                                        </div>
                                                        <input type="file" name="" id="image" class="d-none" />
                                                        <a href="/"><label for="image" class="Card-labelImage"> <img className="Card-iconUpload" src={uploadAccount} alt="" /> cargar</label></a>

                                                        <a href="/" class="Card-button">
                                                            <img className="Card-iconForm" src={deleteAccount} alt="" />
                                                        </a>
                                                        <a href="/" class="Card-button">
                                                            <img className="Card-iconForm" src={updateAccount} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="Select">
                                                    <label className="Select-text" htmlFor="select">Idioma del gestor</label>
                                                    <select class="Select-input" name="select" id="">
                                                        <option value="">Español</option>
                                                        <option value="">Español</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="Card-checkoutWrapperButton">
                                        <button className="Card-checkoutButton">Guardar</button>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card useButton={true}>
                                <CardHeader>
                                    <div className="Card-accountWrapperTitle">
                                        <h3 className="Card-accountTitle">Edición de impuestos</h3>
                                        
                                    </div>
                                    <p className="Card-accountText">Edita la forma en que tu tienda trabajará los impuestos agrédanos a tus productos o servicios. Cambiar la forma en que se calculan las compras en tu tienda. Para ver lo que has recaudado <span className="Card-purchaseTextUnderline">mira tu informe de impuestos.</span></p>
                                </CardHeader>
                                <CardBody>
                                    <div className="Card-accountBodyWrapper">
                                    <div className="Select-wrapper">
                                            <div className="Select myAccount">
                                                <label className="Select-text zone" htmlFor="select">IVA</label>
                                                <select class="Select-input width" name="select" id="">
                                                    <option value=""></option>
                                                    <option value="">IVA</option>
                                                </select>
                                            </div>
                                            <div className="Select myAccount">
                                                <label className="Select-text zone" htmlFor="select">IRPF</label>
                                                <select class="Select-input width" name="select" id="">
                                                    <option value=""></option>
                                                    <option value="">IRPF</option>
                                                </select>
                                            </div>
                                            <Input value={"G374392879243"} label={"¿Tienes VAT Number? Introdúcelo"} customClass={"myAccount"}/>
                                        </div>
                                        <div className="Card-accountWrapperOption">
                                            <label className="Card-container">Todos los impuestos están incluidos en mis precios
                                                <span className="Card-checkoutBodyText">Si se selecciona, todos los impuestos se aplicarán en bas a los impuestos marcados en el apartado anterior y a la legislación de tu país.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="Card-accountWrapperOption">
                                            <label className="Card-container">Cargar los impuestos sobre las tarifas de envío (los impuestos de envío se calculan automáticamente)<span className="font-weight-normal"> cuenta al final del proceso de compra.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="Card-accountWrapperOption">
                                            <label className="Card-container"><span className="font-weight-normal">Realizar operaciones sin impuestos.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark top"></span>
                                            </label>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="CardFooterAccount">
                                    <p className="Card-accountText">Si quieres cambiar o ajustar tus impuestos, <span className="Card-purchaseTextUnderline">por favor ponte en contacto.</span></p>
                                        <button className="Card-checkoutButton">Guardar</button>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card useButton={true}>
                               
                                    <CardHeader>
                                        <div className="Card-accountWrapperTitle">
                                            <h3 className="Card-accountTitle">Información de contacto</h3>
                                        </div>
                                        <p className="Card-accountText margin">Déjanos tu información de contacto para poder hablar con el responsable de gestión del proyecto en caso de necesidad. </p>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="Card-accountBodyWrapper">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Input value={"Antonio"} label={"Nombre"} />
                                                </div>
                                                {/* <div className="Card-accountPayMethodWrapper justify-content-between mb-0 pb-0">
                                                    <p className="Card-accountTextPrincipal">Forma de pago principal</p>
                                                    <p className="Card-accountTextPrincipal underline">Otras formas de pago +</p>
                                                </div> */}
                                                <div className="col-6">
                                                    <Input value={"antonio@logotipo.com"} label={"Cuenta de email"} />
                                                </div>
                                                <div className="col-6">
                                                    <Input value={"Horcajo Nicolau"} label={"Apellidos"} />
                                                </div>
                                                <div className="col-6">
                                                    <Input value={"+34   932800150"} label={"Teléfono de contacto personal"} customClass={"margin"}/>
                                                </div>
                                                <div className="col-6">
                                                    <div class="Card-sectionForm border-bottom-0 pb-0">
                                                        <p class="Card-text lessMargin font-weight-bold">Foto de portada</p>
                                                        <div class="Card-flexRow">
                                                            <div class="Card-wrapImage">
                                                                <img src="" alt="" />
                                                            </div>
                                                            <input type="file" name="" id="image" class="d-none" />
                                                            <a href="/"><label for="image" class="Card-labelImage"> <img className="Card-iconUpload" src={uploadAccount} alt="" /> cargar</label></a>

                                                            <a href="/" class="Card-button">
                                                                <img className="Card-iconForm" src={deleteAccount} alt="" />
                                                            </a>
                                                            <a href="/" class="Card-button">
                                                                <img className="Card-iconForm" src={updateAccount} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="Select">
                                                        <label className="Select-text" htmlFor="select">Idioma del gestor</label>
                                                        <select class="Select-input" name="select" id="">
                                                            <option value="">Español</option>
                                                            <option value="">Español</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="Card-checkoutWrapperButton">
                                            <button className="Card-checkoutButton">Guardar</button>
                                        </div>
                                    </CardFooter>
                                </Card>
                                <Card useButton={true}>
                                    <CardHeader>
                                        <div className="Card-accountWrapperTitle">
                                            <h3 className="Card-accountTitle">Edición de impuestos</h3>
                                            
                                        </div>
                                        <p className="Card-accountText mb-0">Edita la forma en que tu tienda trabajará los impuestos agrédanos a tus productos o servicios. Cambiar la forma en que se calculan las compras en tu tienda. Para ver lo que has recaudado <span className="Card-purchaseTextUnderline">mira tu informe de impuestos.</span></p>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="Card-accountBodyWrapper">
                                        <div className="Select-wrapper">
                                                <div className="Select myAccount">
                                                    <label className="Select-text zone" htmlFor="select">IVA</label>
                                                    <select class="Select-input width" name="select" id="">
                                                        <option value=""></option>
                                                        <option value="">IVA</option>
                                                    </select>
                                                </div>
                                                <div className="Select myAccount">
                                                    <label className="Select-text zone" htmlFor="select">IRPF</label>
                                                    <select class="Select-input width" name="select" id="">
                                                        <option value=""></option>
                                                        <option value="">IRPF</option>
                                                    </select>
                                                </div>
                                                <Input value={"G374392879243"} label={"¿Tienes VAT Number? Introdúcelo"} customClass={"myAccount"}/>
                                            </div>
                                            <div className="Card-accountWrapperOption">
                                                <label className="Card-container">Todos los impuestos están incluidos en mis precios
                                                    <span className="Card-checkoutBodyText">Si se selecciona, todos los impuestos se aplicarán en bas a los impuestos marcados en el apartado anterior y a la legislación de tu país.</span>
                                                    <input className="Card-checkContainer" type="checkbox" />
                                                    <span className="Card-checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="Card-accountWrapperOption">
                                                <label className="Card-container">Cargar los impuestos sobre las tarifas de envío (los impuestos de envío se calculan automáticamente)<span className="font-weight-normal"> cuenta al final del proceso de compra.</span>
                                                    <input className="Card-checkContainer" type="checkbox" />
                                                    <span className="Card-checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="Card-accountWrapperOption">
                                                <label className="Card-container"><span className="font-weight-normal">Realizar operaciones sin impuestos.</span>
                                                    <input className="Card-checkContainer" type="checkbox" />
                                                    <span className="Card-checkmark top"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="CardFooterAccount">
                                        <p className="Card-accountText">Si quieres cambiar o ajustar tus impuestos, <span className="Card-purchaseTextUnderline">por favor ponte en contacto.</span></p>
                                            <button className="Card-checkoutButton">Guardar</button>
                                        </div>
                                    </CardFooter>
                                </Card>
                                <Card useButton={true}>                                
                                        <CardHeader>
                                            <div className="Card-accountWrapperTitle">
                                                <h3 className="Card-accountTitle">Tus formas de pago</h3>
                                                
                                            </div>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="Card-accountBodyWrapper">
                                                <div className="Card-accountPayMethod">
                                                    <div className="Card-accountPayMethodWrapper">
                                                        <img src={MasterCard} alt="Master Card"/>
                                                        <p className="Card-accountPayMethodName">Mastercard****1009</p>
                                                    </div>
                                                    <div className="Card-accountPayMethodWrapper justify-content-between mb-0 pb-0">
                                                        <p className="Card-accountTextPrincipal">Forma de pago principal</p>
                                                        <p className="Card-accountTextPrincipal underline">Otras formas de pago +</p>
                                                    </div>
                                                </div>
                                                <div className="Card-accountPayMethod">
                                                    <div className="Card-accountPayMethodWrapper">
                                                        <img src={MasterCard} alt="Master Card"/>
                                                        <p className="Card-accountPayMethodName">Mastercard****1009</p>
                                                    </div>
                                                    <div className="Card-accountPayMethodWrapper justify-content-between mb-0 pb-0">
                                                        <p className="Card-accountTextPrincipal">Forma de pago principal</p>
                                                        <p className="Card-accountTextPrincipal underline">Otras formas de pago +</p>
                                                    </div>
                                                </div>
                                                <button className="Table-addRegister ml-0">+ Agregar forma de pago</button>
                                            </div>
                                        </CardBody>
                                        <CardFooter>
                                            <div className="Card-checkoutWrapperButton">
                                                <button className="Card-checkoutButton">Guardar</button>
                                            </div>
                                        </CardFooter>
                                
                                </Card>
                            </div>
                            <div className="col-12 col-sm-6">
                                <Card useButton={true}>
                                
                                        <CardHeader>
                                            <div className="Card-accountWrapperTitle">
                                                <h3 className="Card-accountTitle">Información de la tienda</h3>
                                                
                                            </div>
                                            <p className="Card-accountText margin">Esta información aparecerá en tus facturas e información de tu tienda para tus clientes. Puedes editar la dirección utilizada para el cálculo de las tarifas de transporte en la configuración de envío. </p>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="Card-accountBodyWrapper">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Input value={"Mi tienda S.L."} label={"Denominación social"} />
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"Nombre comercial"} label={"Nombre comercial"} />
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"B1234567"} label={"NIF / CIF / Célula"} />
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"+34   932800150"} label={"Número de teléfono"} />
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"+34.  456789123"} label={"Teléfono de atención al cliente"} />
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"C/ Santaló 9"} label={"Dirección"}/>
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"Puerta, número (opcional)"} label={""} customClass={"mt-1"}/>
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"08008"} label={"Código Postal"}/>
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"Barcelona"} label={"Ciudad"}/>
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"España"} label={"País"}/>
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"Barcelona"} label={"Provincia"}/>
                                                    </div>
                                                    <div className="col-6">
                                                        <Input value={"hola@logotipo.com"} label={"Email para el cliente"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                        <CardFooter>
                                            <div className="Card-checkoutWrapperButton">
                                                <button className="Card-checkoutButton">Guardar</button>
                                            </div>
                                        </CardFooter>
                                </Card>
                                <Card useButton={true}>
                                
                                        <CardHeader>
                                            <div className="Card-accountWrapperTitle">
                                                <h3 className="Card-accountTitle">Resumen del año por meses.</h3>
                                                
                                            </div>
                                            <p className="Card-accountText margin">Aquí tienes el resumen de facturación mensual de todo el año.</p>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="Card-accountBodyWrapper mb-4">
                                                <Table customClass={"mb-0 pb-0"}>
                                                    <TableHeader>
                                                        <tr className="Table-tableRow borderNone">
                                                            <th class="Table-tableColumn">Fecha<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Precio<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn text-center">Factura<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn"></th>
                                                        </tr>
                                                    </TableHeader>
                                                    <TableBody>
                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderNone">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">150,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleMonthModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </CardBody>
                                        <CardFooter>
                                            <div className="Card-checkoutWrapperButton pb-0">
                                                <button onClick={this.toggleAnnualModal} className="Table-addRegister ml-0">Ver resumen mensual</button>
                                            </div>
                                        </CardFooter>
                                    
                                </Card>
                            </div>
                            <div className="col-12">
                                <Card useButton={true}>
                                    
                                        <CardHeader>
                                            <div className="Card-accountWrapperTitle">
                                                <h3 className="Card-accountTitle">Tus pagos y servicios contratados este mes</h3>
                                                
                                            </div>
                                            <p className="Card-accountText maxWidth">A continuación te presentamos el resumen de todos aquellos productos y servicios contratados que están activos en este momento en tu cuenta. El cobro se realizará 30 días después entrando en la facturación de mes correspondiente y se sumará al cargo del día 25 .</p>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="Card-accountBodyWrapper padding">
                                                <Table customClass={"mb-0"}>
                                                    <TableHeader>
                                                        <tr className="Table-tableRow borderNone">
                                                            <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn text-center">Total<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn text-center">Factura<i className="i-desplegable" /></th>
                                                            <th class="Table-tableColumn"></th>
                                                        </tr>
                                                    </TableHeader>
                                                    <TableBody>
                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">623178621</td>
                                                            <td className="Table-tableColumn">Plan E-basic</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">Mantenimiento</td>
                                                            <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                                                            <td className="Table-tableColumn"><span className="Table-tableStatus validate">Si</span></td>
                                                            <td className="Table-tableColumn text-center">4,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">623178621</td>
                                                            <td className="Table-tableColumn">Nombre del servicio</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">Servicio</td>
                                                            <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                                                            <td className="Table-tableColumn"><span className="Table-tableStatus validate">Si</span></td>
                                                            <td className="Table-tableColumn text-center">4,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                            <button onClick={() => this.toggleModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">623178621</td>
                                                            <td className="Table-tableColumn">Nombre de la app</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">App</td>
                                                            <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                                                            <td className="Table-tableColumn"><span className="Table-tableStatus revision">En revisión</span></td>
                                                            <td className="Table-tableColumn text-center">4,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                            <button onClick={() => this.toggleModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">623178621</td>
                                                            <td className="Table-tableColumn">Nombre de la app</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">App</td>
                                                            <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                                                            <td className="Table-tableColumn"><span className="Table-tableStatus validate">Si</span></td>
                                                            <td className="Table-tableColumn text-center">4,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                            <button onClick={() => this.toggleModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>

                                                        <tr className="Table-tableRow borderTop">
                                                            <td className="Table-tableColumn">02/08/20</td>
                                                            <td className="Table-tableColumn">623178621</td>
                                                            <td className="Table-tableColumn">Nombre de la app</td>
                                                            <td className="Table-tableColumn">1</td>
                                                            <td className="Table-tableColumn">App</td>
                                                            <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                                                            <td className="Table-tableColumn"><span className="Table-tableStatus revision">En revisión</span></td>
                                                            <td className="Table-tableColumn text-center">4,00€</td>
                                                            <td className="Table-tableColumn">
                                                                <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                                                            </td>
                                                            <td className="Table-tableColumn">
                                                                <button onClick={() => this.toggleModal()} className="Table-tableOption"><i className="i-searchIcon"></i></button>
                                                            </td>
                                                        </tr>
                                                    </TableBody>
                                                    <TableFooter>
                                                        <tr>
                                                            <td class="Table-tableColumn" colspan="7"></td>
                                                            <td class="Table-tableColumn size">Total mes:</td>
                                                            <td class="Table-tableColumn size">150,00 €</td>
                                                            <td class="Table-tableColumn"></td>
                                                        </tr>
                                                    </TableFooter>
                                                </Table>
                                            </div>
                                        </CardBody>
                                        <CardFooter>
                                            <div className="Card-checkoutWrapperButton">
                                                <button className="Card-checkoutButton">Guardar</button>
                                            </div>
                                        </CardFooter>
                                
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalService isOpen={this.state.isOpen} toggleModal={this.toggleModal} />
                <ModalAnnualPayment isOpen={this.state.annualPayment} toogleModal={this.toggleAnnualModal} />
                <ModalMonthPayment isOpen={this.state.monthPayment} toggleModal={this.toggleMonthModal} />
            </Fragment>
        );
    }
}

export default MyAccount;
