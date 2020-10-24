import React, { Component } from "react"
import { Table, Modal } from "reactstrap";

import "../../../assets/scss/components/facturation-table/facturation-table.scss"

import ModalFacture from "../../pages/Base/ModalFacture/ModalFacture";
import ModalHeader from "../modal/modalHeader";


class Index extends Component {
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
		return (
			<div className="Table-body">
				<Table responsive>
					<thead className="Table-header">
						<tr className="Table-row">
							<th className="Table-headerCell date">
								Fecha
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell request">
								Núm. de pedido
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell facture">
								Núm. de factura
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell expiration">
								Vencimiento
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell client">
								Cliente
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell description">
								Descripción
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell total">
								Total
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell state">
								Estado
              					<i className="chevron-down" />
							</th>
							<th className="Table-headerCell empty">

							</th>
							<th className="Table-headerCell factureSent">
								Enviar factura
              					<i className="chevron-down" />
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="Table-row">
							<td className="Table-cell">
								<span>18:30h</span>
								<span className="d-flex">08/10/2019</span>
							</td >
							<td className="Table-cell">
								234567
            				</td>
							<td className="Table-cell">
								234567
            				</td>
							<td className="Table-cell">
								09/08/19
           		 			</td>
							<td className="Table-cell">
								Nombre del cliente
            				</td>
							<td className="Table-cell">
								Lorem ipsum dolor sit amet
            				</td>
							<td className="Table-cell">
								20,00€
            				</td>
							<td className="Table-cell">
								<button className="Table-button">Realizado</button>
							</td>
							<td className="Table-cell">
								<i className="close-envelope" />
							</td>
							<td className="Table-cell">
								<i className="download" />
							</td>
						</tr>
						<tr className="Table-row">
							<td className="Table-cell">
								18:30h
              					<span className="d-flex">08/10/2019</span>
							</td >
							<td className="Table-cell">
								234567
            				</td>
							<td className="Table-cell">
								234567
            				</td>
							<td className="Table-cell">
								09/08/19
            				</td>
							<td className="Table-cell">
								Nombre del cliente
            				</td>
							<td className="Table-cell">
								Lorem ipsum dolor sit amet
            				</td>
							<td className="Table-cell">
								20,00€
            				</td>
							<td className="Table-cell">
								<button className="Table-button">Realizado</button>
							</td>
							<td className="Table-cell">
								<i className="open-envelope" />
							</td>
							<td className="Table-cell">
								<i onClick={this.toggle} className="notebook" />
							</td>
						</tr>
					</tbody>
				</Table>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="FacturationModal" open={true} maxWidth='730px' centered>
					<ModalHeader>
						<div className="Modal-headerWrapper">
							<h3 className="Modal-title">
								Solicitar Factura
              				</h3>
							<button onClick={this.toggle} className="Modal-buttonClose"><i class="fas fa-times"></i></button>
						</div>
					</ModalHeader>
					<ModalFacture />
				</Modal>
			</div>
		);
	}
}
export default Index
