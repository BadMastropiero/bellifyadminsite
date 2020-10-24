import React from "react"
import { Table } from "reactstrap";

const FactureDesign = (props) => (
	<div className="FactureDesign m-0">
		<div className="FactureDesign-facture">
			<div className="FactureDesign-body">
				<div className="row">
					<div className="col-xl-4">
						<div className="FactureDesign-orden">
							<div className="d-flex">
								<span className="FactureDesign-title">
									Rojo Polo Paella Inc.
                      			</span>
							</div>
							<span className="FactureDesign-content">
								Carretera Muelle 38
								37531 Ávila, Ávila.
                    		</span>
						</div>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-md-3">
						<div className="FactureDesign-feature">
							<div className="d-flex">
								<span className="FactureDesign-person">
									Facturar A
                      			</span>
							</div>
							<span className="FactureDesign-content">
								Leda Villareal
								Virgen Blanca 63 08759, Burgos
                    		</span>
						</div>
					</div>
					<div className="col-md-3">
						<div className="FactureDesign-feature">
							<div className="d-flex">
								<span className="FactureDesign-person">
									Envair A
                      			</span>
							</div>
							<span className="FactureDesign-content">
								Leda Villareal
								Virgen Blanca 63 08759, Burgos
                    		</span>
						</div>
					</div>
					<div className="col-md-6">
						<div className="FactureDesign-feature">
							<div className="d-flex justify-content-between">
								<span className="FactureDesign-detail"> Nº de factura</span> <span className="FactureDesign-details ml-5"> ES-001 </span>
							</div>
							<div className="d-flex justify-content-between">
								<span className="FactureDesign-detail">Fecha</span> <span className="FactureDesign-details ml-5"> 29.10.2019 </span>
							</div>
							<div className="d-flex justify-content-between">
								<span className="FactureDesign-detail">Nº de pedido</span>  <span className="FactureDesign-details ml-5"> 1730/2019 </span>
							</div>
							<div className="d-flex justify-content-between">
								<span className="FactureDesign-detail">Fecha</span> <span className="FactureDesign-details ml-5"> 29.10.2019 </span>
							</div>
							<div className="d-flex justify-content-between">
								<span className="FactureDesign-detail"> Vencimiento </span>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mt-3">
						<div className="FactureDesign-total">
							<span className="FactureDesign-amount">
								Total Factura
                    		</span>
							<span className="FactureDesign-amount">
								199.65 $
                    		</span>
						</div>
					</div>
				</div>
				<div className="FactureDesign-table">
					<Table responsive borderless>
						<thead>
							<tr className="FactureDesign-head ">
								<th>Cant.</th>
								<th>Descripción</th>
								<th>Precio Unitario</th>
								<th>Importe</th>
							</tr>
						</thead>
						<tbody className="FactureDesign-body">
							<tr>
								<td>1</td>
								<td>Talla pequeña traje de luces en rojo</td>
								<td>100,00 </td>
								<td>
									100,00
                   			</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Mui grande churrolito</td>
								<td>25,00 </td>
								<td>
									50,00
                    			</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Equipaje de fútbol</td>
								<td>
									5,00
                      			<span className="d-flex mt-3">
										Subtotal
                     			 </span>
									<span>
										IVA 21.0%
                      			</span>
								</td>
								<td>
									15,00
                      				<span className="d-flex mt-3">
										165
                     		 		</span>
									<span>
										34.65
                      				</span>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="FactureDesign-pay">
							<span className="FactureDesign-payment d-flex mb-2">Condiciones y Forma de Pago</span>
							<span className="d-flex mb-2">
								El pago se realizará en 15 días
                    		</span>
							<span className="d-flex">
								Banco Santander
                    		</span>
							<span className="d-flex">
								IBAN: ES12 3456 7891
                    		</span>
							<span className="d-flex">
								SWIFT/BIC: ABCDESM1XXX
                    		</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default FactureDesign
