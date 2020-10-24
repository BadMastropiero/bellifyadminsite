import React from 'react';
import Speechbubble from '../Speechbubble';
import CardHeader from '../card/cardHeader';
import { CardBody } from 'reactstrap';
import Table from '../table';
import TableHeader from '../table/tableHeader';
import TableBody from '../table/tableBody';
import Switch from '../switch';
import CardFooter from '../card/cardFooter';

export default function ShippingSpeechbubble() {

	return (
		<Speechbubble>
			<div className={`Card-shipping listing`}>
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
		</Speechbubble>

	);

}