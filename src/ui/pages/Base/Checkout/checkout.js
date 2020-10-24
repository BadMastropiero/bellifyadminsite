import React, { Component } from 'react';
import Card from "../../../components/card/index";
import CardHeader from '../../../components/card/cardHeader';
import CardBody from '../../../components/card/cardBody';
import CardFooter from '../../../components/card/cardFooter';
import SectionTitle from '../../../components/sectionTitle';
import SaveBar from '../../../components/saveBar';
import SaveIcon from '../../../../assets/img/brand/checkout/Group 96.png';
import ShowIcon from '../../../../assets/img/brand/checkout/Group 97.png';
import Arrow from '../../../../assets/img/brand/checkout/flecha.png';

import '../../../../assets/scss/pages/checkout.scss';
import '../../../../assets/scss/pages/cards.scss';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
    }

    state = {
        timeout: 300
    };


    toggle(name, value) {
        this.setState({ [name]: !value });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    render() {
        return (
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
                                        Checkout
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <span className="SectionTitle-text">Escoge como quieres que tus clientes realicen el proceso de compra, qué información rellenarán, qué será y qué no será obligatorio.</span>
                    </SectionTitle>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <Card useButton={true}>                                
                                <CardHeader>
                                    <div className="Card-headerWrapperCheckout">
                                        <h3 className="Card-checkoutTitle">Cuentas de usuario</h3>                                        
                                    </div>
                                    <p className="Card-checkoutHeaderText">Elije si quieres pedirle a tus clientes que creen una cuenta cuando salgan.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="BeonshopCard-border">
                                        <div className="Card-checkoutBodyWrapper">
                                            <label className="Card-container">Cuentas deshabilitada
                                                <span className="Card-checkoutBodyText">El usuario podrá comprar como invitado.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="Card-checkoutBodyWrapper">
                                            <label className="Card-container">Cuenta opcional
                                                <span className="Card-checkoutBodyText">El usuario podrá crear una cuenta una vez terminado el proceso de compra.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="Card-checkoutBodyWrapper">
                                            <label className="Card-container">Se requiere cuenta
                                                <span className="Card-checkoutBodyText">Los usuarios podrán únicamente realizar una compra si disponen de una cuenta de cliente activa.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="CheckoutButton-right">
                                        <button className="Card-checkoutButton">Guardar</button>
                                    </div>
                                </CardFooter>                                
                            </Card>
                            <Card useButton={true}>
                                <CardHeader>
                                    <div className="Card-headerWrapperCheckout">
                                        <h3 className="Card-purchaseTitle">Proceso de compra</h3>                                            
                                    </div>
                                    <p className="Card-purchaseHeaderText">Selecciona la información que tu tienda requerirá de los usuarios en los procesos de pago y pedidos. <span className="Card-purchaseTextUnderline">Aprende sobre la importancia del proceso de compra.</span></p>
                                </CardHeader>
                                <CardBody>
                                    <h4 className="Card-purchaseBodyTitle">Mientras el usuario está en el proceso de compra</h4>
                                    <div className="Card-purchaseWrapper">
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container purchase">Utiliza la dirección de envío como dirección de facturación por defecto.
                                                <span className="Card-checkboxPurchaseText">Reducirás el número de campos necesarios para la compra, agilizas por tanto el proceso pero tranquilo, la dirección de facturación se podrá editar.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container purchase">Se requiere confirmación
                                                <span className="Card-checkboxPurchaseText">Los usuarios deberán revisar los detalles de sus pedidos antes de comprar.</span>
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <h4 className="Card-purchaseBodyTitle">Aceptar el consentimiento para enviar correos electrónicos promocionales a los clientes de tu tienda.</h4>
                                    <div className="Card-purchaseWrapper">
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container noFontWeight">Los clientes aceptan recibir correos electrónicos promocionales por defecto.
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark noFontWeight"></span>
                                            </label>
                                        </div>
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container noFontWeight">El cliente no acepta recibir correos electrónicos promocionales de forma predeterminada y tendrá que aceptar haciendo click en la casilla correspondiente.
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark noFontWeight"></span>
                                            </label>
                                        </div>
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container noFontWeight">Deshabilitar y ocultar este campo
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark noFontWeight"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <h4 className="Card-purchaseBodyTitle">Después de que una compra haya sido pagada.</h4>
                                    <div className="Card-purchaseWrapper">
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container noFontWeight">Completar automáticamente las partidas de la orden.
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark noFontWeight"></span>
                                            </label>
                                        </div>
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container noFontWeight">No se puede hacer automáticamente ninguna de las partidas de la orden.
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark noFontWeight"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <h4 className="Card-purchaseBodyTitle">Después de que un pedido se haya cumplido y pagado</h4>
                                    <div className="Card-purchaseWrapper">
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <label className="Card-container noFontWeight">Archivar automáticamente la orden de compra.
                                                <input className="Card-checkContainer" type="checkbox" />
                                                <span className="Card-checkmark noFontWeight"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <h4 className="Card-purchaseBodyTitle">Información adicional que quieres indicar en tu tienda.</h4>
                                    <div className="Card-purchaseWrapper mb-0">
                                        <div className="Card-checkoutPurchaseBodyWrapper">
                                            <textarea className="Card-purchaseTextArea"></textarea>
                                        </div>
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
                                    <div className="Card-headerWrapperCheckout">
                                        <h3 className="Card-checkoutTitle">Opciones de formulario</h3>                                            
                                    </div>
                                    <p className="Card-checkoutHeaderText">Decide si el formulario de compra requiere información adicional de tus usuarios y cuál es la obligatoria.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="BeonshopCard-border">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <h4 className="Card-checkoutFormTitle">Nombre completo</h4>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Apellido obligatorio
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Nombre y apellido obligatorio
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <h4 className="Card-checkoutFormTitle">Segunda línea de dirección (piso, puerta, etc.)</h4>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Oculto
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Opcional
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Obligatorio
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <h4 className="Card-checkoutFormTitle">Nombre de empresa</h4>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Oculto
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Opcional
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Obligatorio
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <h4 className="Card-checkoutFormTitle margin">Número de teléfono</h4>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Oculto
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Opcional
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
                                                </div>
                                                <div className="Card-checkoutFormWrapper">
                                                    <label className="Card-container formOptions">Obligatorio
                                                        <input className="Card-checkContainer" type="checkbox" />
                                                        <span className="Card-checkmark formOptions"></span>
                                                    </label>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
