import React, { Component } from 'react';
import Card from "../../../components/card/index";
import CardHeader from '../../../components/card/cardHeader';
import CardBody from '../../../components/card/cardBody';
import CardFooter from '../../../components/card/cardFooter';
import CardImage1 from '../../../../assets/img/brand/card/Group 210.png';
import CardImage2 from '../../../../assets/img/brand/card/Group 212.png';
import CardImage3 from '../../../../assets/img/brand/card/Group 214.png';
import CardImage4 from '../../../../assets/img/brand/card/Group 217.png';
import CardImage5 from '../../../../assets/img/brand/card/Group 258.png';
import CardImage6 from '../../../../assets/img/brand/card/Group 221.png';
import CardImage7 from '../../../../assets/img/brand/card/Group 223.png';
import CardImage8 from '../../../../assets/img/brand/card/Group 225.png';
import CardIcon from '../../../../assets/img/brand/card/Group 204.png';
import Logout from '../../../../assets/img/brand/card/Group 206.png';
import SectionTitle from '../../../components/sectionTitle';

import '../../../../assets/scss/components/card/card.scss';
import '../../../../assets/scss/pages/checkout.scss';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="content">
          <SectionTitle>
            <div className="SectionTitle-wrapperTitle">
              <div className="SectionTitle-wrapperRow">
                <a href="/"><img src={CardIcon} alt="Arrow" /></a>
                <div className="SectionTitle-wrapperColumn">
                  <h3 className="SectionTitle-title mb-0">
                    Mi cuenta
                  </h3>
                </div>
                <button className="SectionTitle-logout"><img className="SectionTitle-iconLogout" src={Logout} alt="Log out" />Cerrar sesión</button>
              </div>
            </div>
          </SectionTitle>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper">
                        <img src={CardImage1} alt="Perfil" />
                      </div>
                      <h2 className="BeonshopCard-title">Editar Perfil</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">Gestiona la Información principal de tu cuenta. En ella encontrarás desde datos de facturación hasta impuestos o resumen de tu actividad en beonshop.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/my-account" className="BeonshopCard-button">Gestionar <i className="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper yellow">
                        <img src={CardImage2} alt="Formas de pago" />
                      </div>
                      <h2 className="BeonshopCard-title">Formas de pago</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">¿Tienes una, dos o incluso tres formas de pago activas? Gestiona con qué proveedor y cómo quieres cobrar a tus clientes.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/pay-method" className="BeonshopCard-button yellow">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper blue">
                        <img src={CardImage3} alt="Checkout" />
                      </div>
                      <h2 className="BeonshopCard-title">Checkout</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">Escoge como quieres que tus clientes realicen el proceso de compra, qué información rellenarán, qué será y qué no será obligatorio.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/checkout" className="BeonshopCard-button blue">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper darkblue">
                        <img src={CardImage4} alt="Envios" />
                      </div>
                      <h2 className="BeonshopCard-title">Envios</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">Escoge con qué compañía o compañías quieres operar. Nosotros trabajamos con todas a través de Partners o con la que tú nos digas.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/shipping" className="BeonshopCard-button darkblue">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper">
                        <img src={CardImage5} alt="Emails" />
                      </div>
                      <h2 className="BeonshopCard-title">Emails</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">Edita el texto que tu tienda enviará a los usuarios y clientes para comunicarse con ellos. Ten en cuenta que es un importante canal de comunicación.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/emails" className="BeonshopCard-button">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper yellow">
                        <img src={CardImage6} alt="Canales de venta" />
                      </div>
                      <h2 className="BeonshopCard-title">Canales de venta</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description padding">¿Tienes tiendas físicas u otros canales de venta? Edita aquí los puntos de venta que quieres mostrar en tu tienda. Si quieres además, los podemos conectar para que tengas un control total.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/sales-channels" className="BeonshopCard-button yellow">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper blue">
                        <img src={CardImage7} alt="Facturación" />
                      </div>
                      <h2 className="BeonshopCard-title">Facturación</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">Encuentra todos los pedidos realizados por tus clientes, edita la factura tipo de tu tienda por si la solicita algún cliente.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/facturation" className="BeonshopCard-button blue">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper darkblue">
                        <img src={CardImage8} alt="Planes y permisos" />
                      </div>
                      <h2 className="BeonshopCard-title">Planes y permisos</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">¿Quieres mejorar tu plan beonshop? ¿Cambiar permisos u otorgarlos a nuevos colaboradores? Todo eso lo podrás realizar aquí.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="/plans-permissions" className="BeonshopCard-button darkblue">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            {/* <div className="col-12 col-sm-6 col-md-3">
                <Card>
                <div className="BeonshopCard-box">
                  <CardHeader>
                    <div className="BeonshopCardHeader-wrapper">
                      <div className="BeonshopCard-iconWrapper"></div>
                      <h2 className="BeonshopCard-title">Monedas</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">Edita las monedas con las que trabajará tu tienda y por tanto tus sistemas de pago. Ten en cuenta que existirán regarnos por transacción por parte de tu banco al realizar cambio de moneda.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="#" className="BeonshopCard-button">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
                </div>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <Card>
              <div className="BeonshopCard-box">
                  <CardHeader>
                  <div className="BeonshopCardHeader-wrapper">
                  <div className="BeonshopCard-iconWrapper yellow">
                    <img src={CardImage10} alt="Puntos"/>
                  </div>
                  <h2 className="BeonshopCard-title">Puntos</h2>
                  </div>
                  </CardHeader>
                  <CardBody>
                    <p className="BeonshopCard-description">Además de ayudarte con nuestros servicios, queremos otorgarte premios, descuentos y formación por el buen uso que hagas de la plataforma. Entra y gestiona tus puntos.</p>
                  </CardBody>
                  <CardFooter>
                    <a href="#" className="BeonshopCard-button yellow">Gestionar <i class="fas fa-chevron-right"></i></a>
                  </CardFooter>
              </div>
              </Card>
            </div> */}
          </div>

        </div>
      </div>
    );
  }
}

export default Cards;
