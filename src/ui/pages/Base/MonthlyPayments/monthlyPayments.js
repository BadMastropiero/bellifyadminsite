import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import Table from '../../../components/table/index';
import TableHeader from '../../../components/table/tableHeader';
import TableBody from '../../../components/table/tableBody';
import TableFooter from '../../../components/table/tableFooter';
import '../../../../assets/scss/pages/popups.scss';
import '../../../../assets/scss/pages/cards.scss';
import '../../../../assets/scss/pages/tables.scss';
import '../../../../assets/scss/pages/modals.scss';

class MonthlyPayments extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			modal: false
		};
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
			modal: !this.state.modal,
		});
	}

  render() {
    const externalCloseBtn = <button className="Modal-buttonClose" onClick={this.props.toggleModal}><i class="fas fa-times"></i></button>;
    return (
      <Fragment>
          <Button onClick={this.toggle} className="mr-1">Launch demo modal</Button>
          <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal} className={"Modal monthlyPayments"}>
          <ModalHeader toggle={this.props.toggleModal} className={"Modal-headerWrapper"} close={externalCloseBtn}>
              <h3 className="Modal-title">Tus pagos mensuales realizados (Agosto 2019)</h3>
          </ModalHeader>
          <ModalBody className={"p-0"}>
            <div className="Modal-tableMonth">
              <div className="row">
                <div className="col-12">
                  <Table>
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
                        <th class="Table-tableColumn">Factura<i className="i-desplegable" /></th>
                        <th class="Table-tableColumn"></th>
                      </tr>
                    </TableHeader>
                    <TableBody className="Table-tableBody">
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
                          <button className="Table-tableOption"><i className="i-updatedBill" /></button>
                        </td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-searchBill" /></button>
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
                          <button className="Table-tableOption"><i className="i-downloadBill" /></button>
                        </td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-searchBill" /></button>
                        </td>
                      </tr>

                      <tr className="Table-tableRow borderTop">
                        <td className="Table-tableColumn">02/08/20</td>
                        <td className="Table-tableColumn">623178621</td>
                        <td className="Table-tableColumn">Nombre de la app</td>
                        <td className="Table-tableColumn">1</td>
                        <td className="Table-tableColumn">App</td>
                        <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                        <td className="Table-tableColumn"><span className="Table-tableStatus revision">En revision</span></td>
                        <td className="Table-tableColumn text-center">4,00€</td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-updatedBill" /></button>
                        </td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-searchBill" /></button>
                        </td>
                      </tr>

                      <tr className="Table-tableRow borderTop">
                        <td className="Table-tableColumn">02/08/20</td>
                        <td className="Table-tableColumn">623178621</td>
                        <td className="Table-tableColumn">Nombre de la App</td>
                        <td className="Table-tableColumn">1</td>
                        <td className="Table-tableColumn">App</td>
                        <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                        <td className="Table-tableColumn"><span className="Table-tableStatus validate">Si</span></td>
                        <td className="Table-tableColumn text-center">4,00€</td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-downloadBill" /></button>
                        </td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-searchBill" /></button>
                        </td>
                      </tr>

                      <tr className="Table-tableRow borderTop">
                        <td className="Table-tableColumn">02/08/20</td>
                        <td className="Table-tableColumn">623178621</td>
                        <td className="Table-tableColumn">Nombre de la app</td>
                        <td className="Table-tableColumn">1</td>
                        <td className="Table-tableColumn">App</td>
                        <td className="Table-tableColumn">Lorem ipsum dolor sit amen</td>
                        <td className="Table-tableColumn"><span className="Table-tableStatus revision">En revision</span></td>
                        <td className="Table-tableColumn text-center">4,00€</td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-updatedBill" /></button>
                        </td>
                        <td className="Table-tableColumn">
                          <button className="Table-tableOption"><i className="i-searchBill" /></button>
                        </td>
                      </tr>
                    </TableBody>
                    <TableFooter className="Table-tableFoot">
                      <tr>
                        <td class="Table-tableColumn" colspan="7"></td>
                        <td class="Table-tableColumn size">Total mes:</td>
                        <td class="Table-tableColumn size">150,00€</td>
                        <td class="Table-tableColumn"></td>
                      </tr>
                    </TableFooter>
                  </Table>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default MonthlyPayments;
