import React, { Component } from "react"

import ShowIcon from "../../../../assets/img/brand/checkout/Group 97.png";
import SaveIcon from "../../../../assets/img/brand/checkout/Group 96.png";
import Arrow from "../../../../assets/img/brand/checkout/flecha.png";

import SectionTitle from "../../../components/sectionTitle";
import SectionHeader from "../../../components/SectionHeader";
import SaveBar from "../../../components/saveBar";
import FacturationTable from "../../../components/FacturationTable";
import TablePagination from "../../../components/FacturationPagination";
import FactureDesign from "../../../components/FacturationCard";
import InputFonts from "../../../components/input/inputFonts";
import ColorPicker from "../../../components/ColorPicker";
import CardBody from "../../../components/card/cardBody";
import CardFooter from "../../../components/card/cardFooter";

import "../../../../assets/scss/pages/facturation.scss"

class Facturation extends Component {
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
										Facturación
                  					</h3>
								</div>
							</div>
						</div>
					</SectionTitle>
					<div className="TableContainer col-md-12">
						<div className="Table">
              <SectionHeader>
                <div className="row justify-content-between">
                  <h3 className="ContractedPlan-header ml-3"><span>Resumen de facturación</span></h3>
                  <button className="Card-buttonLess mr-4"><i className="fas fa-minus"></i></button>
                </div>
                <div className="col-md-5 p-0">
                  <span className="ContractedPlan-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at euismod turpis, at tempus metus. Nulla pellentesque ipsum at metus pretium, sed dignissim metus volutpat.</span>
                </div>
              </SectionHeader>
							<FacturationTable />
						</div>
						<TablePagination />
					</div>
					<div className="TableContainer col-md-12 mt-3 mb-5 pb-0">
            <SectionHeader>
              <div className="row justify-content-between">
                <h3 className="ContractedPlan-header ml-3"><span>Diseño de factura</span></h3>
                <button className="Card-buttonLess mr-4"><i className="fas fa-minus"></i></button>
              </div>
            </SectionHeader>
						<div className="Facture-Content  flex-wrap">
							<div className="row justify-content-around">
								<div className="col-12 col-sm-5 d-flex flex-row-reverse">
									<div className="FacturePreview">
										<div className="FactureContainer">
											<FactureDesign />
										</div>
										<div className="row">
											<div className="col-12 p-0">
												<div className="Select facture">
													<label className="Select-text" htmlFor="select">Plantilla</label>
													<select className="Select-input" name="select" id="">
														<option value="">Nombre de plantilla</option>
														<option value="">Nombre de plantilla</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-6 ">
									<div className="FactureDetails">
										<div className="row">
											<CardBody>
												<div className="Card-accountBodyWrapper facture">
													<div className="row">
														<div className="col-6">
															<ColorPicker value={"#3e73b9"} label={"Color Principal"}>
																<i className="bullet-blue" />
															</ColorPicker>
														</div>
														<div className="col-6">
															<InputFonts value={"Helvética"} label={"Fuente"} />
														</div>
														<div className="col-6">
															<ColorPicker value={"#E94D4B"} label={"Color Secundario"}>
																<i className="bullet-red" />
															</ColorPicker>
														</div>
														<div className="col-6">
															<InputFonts value={"Vertical"} label={"Formato"} customClass={"margin"} />
														</div>
														<div className="col-6">
															<div class="Card-sectionForm border-bottom-0 pb-0">
																<p class="Card-text lessMargin font-weight-bold">Logo</p>
																<div class="Card-flexRow">
																	<div class="Card-wrapImage">
																		<img src="" alt="" />
																	</div>
																	<input type="file" name="" id="image" class="d-none" />
																	<a href="/" className="LoadBtn">
																		<label for="image" class="Card-labelImage facture mt-2">
																			<i className="load mr-1" />
																			Cargar
																		</label>
																	</a>
																	<a href="/" class="Card-button">
																		<i className="thrash facture" />
																	</a>
																	<a href="/" class="Card-button">
																		<i className="pencil facture" />
																	</a>
																</div>
															</div>
														</div>
													</div>
													<div className="col-12 justify-content-start p-0">
														<div className="EmailView-foot mt-2">
															<div className="Card-accountWrapperOption">
																<label className="Card-container">Pie de página
                                    								<input className="Card-checkContainer" type="checkbox" />
																	<span className="Card-checkmark fact"></span>
																</label>
															</div>
														</div>
														<textarea className="FactureDetails-textarea mt-1" placeholder=""></textarea>
													</div>
												</div>
											</CardBody>
										</div>
									</div>
								</div>
							</div>
							<CardFooter>
								<div className="Card-checkoutWrapperButton facture">
									<button className="Card-checkoutButton">Guardar</button>
								</div>
							</CardFooter>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Facturation
