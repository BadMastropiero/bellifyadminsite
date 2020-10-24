import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import Table from '../../../components/table/index';
import TableHeader from '../../../components/table/tableHeader';
import TableBody from '../../../components/table/tableBody';

import '../../../../assets/scss/pages/popups.scss';
import '../../../../assets/scss/pages/cards.scss';
import '../../../../assets/scss/pages/modals.scss';
import '../../../../assets/scss/pages/tables.scss';
import '../../../../assets/scss/pages/checkout.scss';

class AnnualPayments extends Component {
  state = {
    collapse1: true,
    fadeIn: true,
    timeout: 300,
    modal: false,
    collapseCard1: false,
    collapseCard2: true,
    collapseCard3: true,
    collapseCard4: true,
    collapseCard5: true,
    collapseCard6: true,
    collapseCard7: true,
    collapseCard8: true,
    collapseCard9: true,
    collapseCard10: true,
    collapseCard11: true,
    collapseCard12: true
  };
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);

  }

  toggleTable(name,value) {
    this.setState({ [name]: !value });
}

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
      modal: !this.state.modal
    });
  }

  render() {
    const {collapseCard1, collapseCard2, collapseCard3, collapseCard4, collapseCard5, collapseCard6, collapseCard7, collapseCard8, collapseCard9, collapseCard10, collapseCard11, collapseCard12} = this.state;
    const externalCloseBtn = <button className="Modal-buttonClose" onClick={this.props.toogleModal}><i class="fas fa-times"></i></button>;
    return (
      <Fragment>
        <Button onClick={this.toggle} className="mr-1">Launch demo modal</Button>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toogleModal} className={"Modal monthlyPayments"}>
        <ModalHeader toggle={this.toggle} className={"Modal-headerWrapper"} close={externalCloseBtn}>
             <h3 className="Modal-title">Tus pagos realizados este último año</h3>
          </ModalHeader>
          <ModalBody className={"p-0"}>
            <div className="Modal-annualPayment">
              <div className={collapseCard1 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Diciembre 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard1",collapseCard1)} className="Card-buttonLess yellow"><i className={collapseCard1 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidadeses<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00€</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00€</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00€</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00€</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00€</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard2 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Noviembre 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard2",collapseCard2)} className="Card-buttonLess yellow"><i className={collapseCard2 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard3 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Octubre 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard3",collapseCard3)} className="Card-buttonLess yellow"><i className={collapseCard3 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard4 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Septiembre 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard4",collapseCard4)} className="Card-buttonLess yellow"><i className={collapseCard4 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard5 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Agosto 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard5",collapseCard5)} className="Card-buttonLess yellow"><i className={collapseCard5 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard6 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Julio 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard6",collapseCard6)} className="Card-buttonLess yellow"><i className={collapseCard6 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard7 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Junio 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard7",collapseCard7)} className="Card-buttonLess yellow"><i className={collapseCard7 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard8 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Mayo 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard8",collapseCard8)} className="Card-buttonLess yellow"><i className={collapseCard8 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard9 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Abril 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard9",collapseCard9)} className="Card-buttonLess yellow"><i className={collapseCard9 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard10 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Marzo 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard10",collapseCard10)} className="Card-buttonLess yellow"><i className={collapseCard10 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard11 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Febrero 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard11",collapseCard11)} className="Card-buttonLess yellow"><i className={collapseCard11 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className={collapseCard12 ? "Table-cardTable bgGray height" : "Table-cardTable bgGray"}> 
                <div className="d-flex flex-row justify-content-between">
                  <h3 class="Table-titleTable date">Enero 2019: <span className="Table-titleTable total">Total 150,00€</span></h3>
                  <button onClick={(e) => this.toggleTable("collapseCard12",collapseCard12)} className="Card-buttonLess yellow"><i className={collapseCard12 ? "fas fa-plus" : "fas fa-minus"} /></button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Table>
                      <TableHeader customClass={"bgWhite"}>
                        <tr className="Table-tableRow borderNone">
                          <th class="Table-tableColumn">Fecha de solicitud<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Referencia<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Concepto<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Unidades<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Tipo<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Obsrervaciones<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Validado<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Total<i className="i-desplegable" /></th>
                          <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
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
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre del servicio</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">Servicio</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la App</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus validate">Si</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-downloadBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>

                        <tr className="Table-tableRow borderTop">
                          <td className="Table-tableColumn">02/08/20</td>
                          <td className="Table-tableColumn">623178621</td>
                          <td className="Table-tableColumn">Nombre de la app</td>
                          <td className="Table-tableColumn">1</td>
                          <td className="Table-tableColumn">App</td>
                          <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                          <td className="Table-tableColumn paddingNone"><span className="Table-tableStatus revision">En revision</span></td>
                          <td className="Table-tableColumn">4,00 €</td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-updateBill" /></a>
                          </td>
                          <td className="Table-tableColumn">
                            <a className="Table-tableOption" href="/"><i className="i-searchIcon" /></a>
                          </td>
                        </tr>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default AnnualPayments;
