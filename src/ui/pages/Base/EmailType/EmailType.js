import React, { useState } from "react"
import {Modal} from "reactstrap"
import {Link} from "react-router-dom"

import ShowIcon from "../../../../assets/img/brand/checkout/Group 97.png";
import SaveIcon from "../../../../assets/img/brand/checkout/Group 96.png";
import Arrow from "../../../../assets/img/brand/checkout/flecha.png";

import SaveBar from "../../../components/saveBar";
import SectionTitle from "../../../components/sectionTitle";
import SectionHeader from "../../../components/SectionHeader";
import Index from "../../../components/ColorPicker";
import InputFonts from "../../../components/input/inputFonts";
import EmailEditor from "../../../components/EmailEditor";
import ModalHeader from "../../../components/modal/modalHeader";
import ModalBody from "../../../components/modal/modalBody";

import "../../../../assets/scss/pages/email-type.scss"
import "../../../../assets/scss/pages/email-view.scss"


const Emails = (props) => {
    const {
      className
    } = props;

    const styles = {
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'space-between'
    }

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

		return (
			<div className="animated fadeIn">
				<SaveBar styles={styles}>
          <div className="LanguageOptions d-flex">
            <button className="LanguageOptions-btn">
              ES
            </button>
            <button className="LanguageOptions-btn">
              CAT
            </button>
            <button className="LanguageOptions-btn">
              FR
            </button>
            <button className="LanguageOptions-btn">
              +
            </button>
          </div>
          <div className="SaveOptions">
            <button className="SectionTitle-buttonSave show"><img className="SectionTitle-icon show" src={ShowIcon} alt="Show" /></button>
            <button className="SectionTitle-buttonSave">Guardar todo <img className="SectionTitle-icon" src={SaveIcon} alt="Save" /></button>
          </div>
				</SaveBar>
				<div className="content">
					<SectionTitle>
						<div className="SectionTitle-wrapperTitle">
							<div className="SectionTitle-wrapperRow">
								<a href="/"><img src={Arrow} alt="Arrow" /></a>
								<div className="SectionTitle-wrapperColumn">
									<h2 className="SectionTitle-subtitle">
										Mi cuenta > Emails
                  					</h2>
									<h3 className="SectionTitle-title">
										Alta de cliente
                  					</h3>
								</div>
							</div>
						</div>
					</SectionTitle>
							<div className="row p-3">
								<div className="col-sm-12 col-xl-6 pl-0">
									<div className="EmailType">
										<div className="EmailType-container">
											<div className="ContractedPlan email mb-4">
                        <SectionHeader>
                          <div className="row justify-content-between">
                            <h3 className="ContractedPlan-header ml-3"><span>Información básica</span></h3>
                            <button className="Card-buttonLess mr-4"><i className="fas fa-minus"></i></button>
                          </div>
                          <div className="col-md-11 p-0">
                            <span className="ContractedPlan-info">Escribe y distribuye la información esencial para que tus clientes puedan saber que les escribes y de qué les vas a hablar. Si tienes cualquier duda
                              <Link to="/" className="EmailType-reference" > ponte en contacto con nosotros. </Link></span>
                          </div>
                        </SectionHeader>
											</div>
											<div className="row">
												<div className="col-6">
													<div className="Card-sectionForm border-bottom-0 pb-0">
														<span className="Card-text lessMargin font-weight-bold mr-2">Cabecera</span>
														<span className="Card-text">(No obligatorio)</span>
														<span className="Card-text email d-flex">600 x 170px</span>
														<div className="Card-flexRow">
															<div className="Card-wrapImage">
																<img src="" alt="" />
															</div>
															<input type="file" name="" id="image" className="d-none" />
															<a href="/" className="LoadBtn mt-2">
																<label htmlFor="image" className="Card-labelImage facture">
																	<i className="load mr-2" />
																	Cargar
																</label>
															</a>
															<a href="/" className="Card-button">
																<i className="thrash facture" />
															</a>
															<a href="/" className="Card-button">
																<i className="pencil facture" />
															</a>
														</div>
													</div>
												</div>
												<div className="col-6 mt-2">
													<Index value={"#E94D4B"} label={"Color de fondo"}>
														<i className="bullet-red" />
													</Index>
												</div>
												<div className="col-12">
													<InputFonts value={"Es el momento de disfrutar de tu pedido 63855092"} label={"Asunto para el cliente"} customClass={"margin"} />
												</div>
												<div className="col-12">
													<InputFonts value={"Nueva alta al cliente con referencia ID 345678"} label={"Asunto para ti"} customClass={"margin"} />
												</div>
												<div className="col-md-12">
													<div className="EmailType-footer">
														<button className="EmailType-save">Guardar</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="EmailType-preview">
                      <button onClick={toggle} className="EmailType-view">
                        <i className="view" />
                        <span>Previsualizar</span>
                      </button>
									</div>
								</div>
								<div className="col-sm-12 col-xl-6 pr-0">
									<div className="EmailType">
										<div className="EmailType-container">
												<div className="col-md-12">
													<div className="ContractedPlan email mb-4">
                            <SectionHeader>
                              <div className="row justify-content-between pl-3 pr-3">
                                <h3 className="ContractedPlan-header"><span>Contenido</span></h3>
                                <button className="Card-buttonLess"><i className="fas fa-minus"></i></button>
                              </div>
                              <div className="col-md-11 p-0">
                              <span className="ContractedPlan-info  mr-4">
															Escribe y personaliza el mensaje que irá dirigido a tus usuarios y clientes. Añade imágenes, negritas, subraya texto. Todo lo que sea necesario para que vuestra comunicación sea óptima.
														  </span>
                              </div>
                            </SectionHeader>
														<div className="TextGenerator">
															<button className="TextGenerator-btn">Generar Texto Estándar</button>
														</div>
													</div>
												</div>
											<EmailEditor />
										</div>
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
              <Modal isOpen={modal} toggle={toggle} className={className} maxWidth='730px' centered>
                <ModalHeader>
                  <div className="Modal-headerWrapper">
                    <h3 className="Modal-title">
                      Previsualizar Email
                    </h3>
                    <button onClick={toggle} className="Modal-buttonClose"><i className="fas fa-times"/></button>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <div className="Modal-body EmailView">
                    <div className="EmailView-header">
                      <button className="EmailView-button">Borrador</button>
                      <span className="EmailView-content">Email Alta</span>
                    </div>
                    <textarea className="EmailView-text" placeholder=""></textarea>
                  </div>
                </ModalBody>
              </Modal>
				</div>
			</div>
		);
}

export default Emails
