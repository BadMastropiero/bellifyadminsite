import React, { Component } from "react"
import { Link } from "react-router-dom";
import {ListGroupItem} from "reactstrap"

import ShowIcon from "../../../../assets/img/brand/checkout/Group 97.png";
import SaveIcon from "../../../../assets/img/brand/checkout/Group 96.png";
import Arrow from "../../../../assets/img/brand/checkout/flecha.png";

import SaveBar from "../../../components/saveBar";
import SectionTitle from "../../../components/sectionTitle";
import SectionHeader from "../../../components/SectionHeader";
import Subheader from "../Subheader/Subheader";
import EmailList from "../../../components/EmailsList";

import '../../../../assets/scss/pages/emails.scss'

class Emails extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<SaveBar>
					<button className="SectionTitle-buttonSave show"><img className="SectionTitle-icon show" src={ShowIcon} alt="Show" /></button>
					<button className="SectionTitle-buttonSave">Guardar todo <img className="SectionTitle-icon" src={SaveIcon} alt="Save" /></button>
				</SaveBar>
				<div className="content">
					<SectionTitle>
						<div className="SectionTitle-wrapperTitle Emails">
							<div className="SectionTitle-wrapperRow">
								<a href="/"><img src={Arrow} alt="Arrow" /></a>
								<div className="SectionTitle-wrapperColumn">
									<h2 className="SectionTitle-subtitle">
										Mi cuenta
                  </h2>
									<h3 className="SectionTitle-title">
										Emails
                  </h3>
								</div>
							</div>
						</div>
					</SectionTitle>
					<div className="row">
						<div className="col">
							<Subheader>
								<span className="ContractedPlan-info emails ml-4">
									Edita el texto que tu tienda enviará a los usuarios y clientes para comunicarse con ellos. Ten en cuenta que es un importante canal de comunicación.
                </span>
							</Subheader>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-sm-12 col-xl-6">
							<div className="EmailType">
								<div className="EmailType-container">
									<div className="row">
										<div className="col-md-12">
                      <SectionHeader className="pt-0">
                        <div className="ContractedPlan m-0 p-0 col-md-11">
                          <h3 className="ContractedPlan-header"><span>Emails</span></h3>
                          <span className="ContractedPlan-info p-0">
													A continuación te presentamos la lista de correos que funcionan en tu tienda online para comunicarse con tus clientes.
                            </span>
                        </div>
                      </SectionHeader>
										</div>
									</div>

                  <EmailList>
                    <ListGroupItem className="EmailType-feature d-inline-flex justify-content-between">
                      <span className="EmailType-text mt-1">Alta de cliente</span>
                      <div className="EmailType-img d-inline-flex justify-content-around">
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="pencil" />
                        </Link>
                        <Link to="#" className="EmailType-link">
                          <i className="thrash" />
                        </Link>
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="dots" />
                        </Link>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="EmailType-feature d-inline-flex justify-content-between">
                      <span className="EmailType-text mt-1">Recuperación de contraseña</span>
                      <div className="EmailType-img d-inline-flex justify-content-around">
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="pencil" />
                        </Link>
                        <Link to="#" className="EmailType-link">
                          <i className="thrash" />
                        </Link>
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="dots" />
                        </Link>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="EmailType-feature d-inline-flex justify-content-between">
                      <span className="EmailType-text mt-1">Pedido enviado</span>
                      <div className="EmailType-img d-inline-flex justify-content-around">
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="pencil" />
                        </Link>
                        <Link to="#" className="EmailType-link">
                          <i className="thrash" />
                        </Link>
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="dots" />
                        </Link>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="EmailType-feature d-inline-flex justify-content-between">
                      <span className="EmailType-text mt-1">Pedido entregado</span>
                      <div className="EmailType-img d-inline-flex justify-content-around">
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="pencil" />
                        </Link>
                        <Link to="#" className="EmailType-link">
                          <i className="thrash" />
                        </Link>
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="dots" />
                        </Link>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="EmailType-feature d-inline-flex justify-content-between">
                      <span className="EmailType-text mt-1">Confirmación de devolución</span>
                      <div className="EmailType-img d-inline-flex justify-content-around">
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="pencil" />
                        </Link>
                        <Link to="#" className="EmailType-link">
                          <i className="thrash" />
                        </Link>
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="dots" />
                        </Link>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="EmailType-feature d-inline-flex justify-content-between">
                      <span className="EmailType-text mt-1">Resolución de dudas</span>
                      <div className="EmailType-img d-inline-flex justify-content-around">
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="pencil" />
                        </Link>
                        <Link to="#" className="EmailType-link">
                          <i className="thrash" />
                        </Link>
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="dots" />
                        </Link>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem className="EmailType-feature d-inline-flex justify-content-between">
                      <span className="EmailType-text mt-1">Confirmación de pedido</span>
                      <div className="EmailType-img d-inline-flex justify-content-around">
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="pencil" />
                        </Link>
                        <Link to="#" className="EmailType-link">
                          <i className="thrash" />
                        </Link>
                        <Link to="/base/emailtype" className="EmailType-link">
                          <i className="dots" />
                        </Link>
                      </div>
                    </ListGroupItem>
                  </EmailList>

									<div className="row">
										<div className="col-md-12">
											<div className="EmailType-footer">
												<button className="EmailType-save">Guardar</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Emails
