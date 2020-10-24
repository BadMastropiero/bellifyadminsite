import React, { useState } from 'react';

import "../../../../assets/scss/pages/plans-permissions.scss"

import ShowIcon from "../../../../assets/img/brand/checkout/Group 97.png";
import SaveIcon from "../../../../assets/img/brand/checkout/Group 96.png";
import Arrow from "../../../../assets/img/brand/checkout/flecha.png";
import user from "../../../../assets/img/brand/plansPermissions/user@2x.png";


import SaveBar from "../../../components/saveBar";
import SectionTitle from "../../../components/sectionTitle";
import Subheader from "../Subheader/Subheader";
import CurrentPlan from "../../../components/CurrentPlan"
import PlanPicker from "../../../components/PlanPicker";
import AddingCard from "../../../components/AddingCard";
import Card from "../../../components/card";
import CardHeader from "../../../components/card/cardHeader";
import CardBody from "../../../components/card/cardBody";
import CardFooter from "../../../components/card/cardFooter";
import Switch from "../../../components/switch";


const PlansPermissions = () => {
	const [haveBorder1, setHaveBorder1] = useState(false)
	const [haveBorder2, setHaveBorder2] = useState(false)
	const [haveBorder3, setHaveBorder3] = useState(false)
	const [haveBorder4, setHaveBorder4] = useState(false)
	const [haveBorder5, setHaveBorder5] = useState(false)
	const [haveBorder, setHaveBorder] = useState(false)
	return (
		<div className="animated fadeIn">
			<SaveBar>
				<button className="SectionTitle-buttonSave show"><img className="SectionTitle-icon show" src={ShowIcon}
					alt="Show" /></button>
				<button className="SectionTitle-buttonSave">Guardar todo <img className="SectionTitle-icon" src={SaveIcon}
					alt="Save" /></button>
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
									Planes y permisos
                </h3>
							</div>
						</div>
					</div>
				</SectionTitle>
				<div className="row">
					<div className="col-xl-11">
						<Subheader>
							<h3 className="ContractedPlan-header"><span>Tu plan contratado</span></h3>
							<span className="ContractedPlan-info">A continuación te presentamos el plan que tienes contratado y un resumen de lo que este conlleva. Recuerda que puedes cambiar de plan en cualquier comento y que el cambio se aplicará en el mes en curso,eniendo 30 días hábiles para modificar tu decisión.</span>
						</Subheader>
					</div>
				</div>
				<CurrentPlan>
					<div className="col-md-3 p-0 m-0" >
						<div className="CurrentPlan-section1">
							<h3 className="CurrentPlan-name"><span>E-Pro</span></h3>
						</div>
					</div>
					<div className="col-md-3 p-0 m-0" >
						<div className="CurrentPlan-section">
							<span className="CurrentPlan-state">Miembro desde</span>
							<h3 className="CurrentPlan-status"><span>23/09/19</span></h3>
						</div>
					</div>
					<div className="col-md-3 p-0 m-0" >
						<div className="CurrentPlan-section">
							<span className="CurrentPlan-state">Plan actual</span>
							<h3 className="CurrentPlan-status"><span>Lore ipsum</span></h3>
						</div>
					</div>
					<div className="col-md-3 p-0 m-0" >
						<div className="CurrentPlan-section">
							<span className="CurrentPlan-state">Estado</span>
							<h3 className="CurrentPlan-status"><span>Activo</span></h3>
						</div>
					</div>
				</CurrentPlan>
				<PlanPicker />
				<div className="row">
					<div className="col-md-5">
						<Subheader>
							<h3 className="ContractedPlan-header"><span>Permisos</span></h3>
							<span className="ContractedPlan-info col-md-5 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at euismod turpis, at tempus metus. Nulla pellentesque ipsum at metus pretium, sed dignissim metus volutpat.</span>
						</Subheader>
					</div>
				</div>
				<div className="UserRow">
					<div className="row RowUser mb-3">
						<div className="col-12 col-sm-6 col-md-4 col-lg-3">
							<Card>
								<div className={haveBorder ? "BeonshopCard-box UserCard haveBorder" : "BeonshopCard-box UserCard"}>
									<CardHeader>
										<div className="BeonshopCardHeader-wrapper">
											<div className="Card-cropper">
												<img className="Card-payMethodImage img" src={user} alt="user" />
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<div className="CardBody-content">
											<span className="CardHeader-name">Antonio Horcajo</span>
											<span className="CardBody-email">antonio@identty.com</span>
											<span className="CardBody-status d-flex">Root</span>
										</div>
									</CardBody>
									<CardFooter>
										<div className="BeonshopCardFooter-wrapper">
											<Switch onChange={() => setHaveBorder(!haveBorder)} id={"chck"} name={"chck"} />
											<button className="BeonshopCardFooter-button User" onClick={() => this.openModal()}>Configurar</button>
										</div>
									</CardFooter>
								</div>
							</Card>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-3" >
							<Card>
								<div className={haveBorder1 ? "Card-box UserCard haveBorder" : "Card-box UserCard"}>
									<CardHeader>
										<div className="BeonshopCardHeader-wrapper">
											<div className="Card-cropper">
												<img className="Card-payMethodImage img" src={user} alt="user" />
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<div className="CardBody-content">
											<span className="CardHeader-name">Antonio Horcajo</span>
											<span className="CardBody-email">antonio@identty.com</span>
											<span className="CardBody-status d-flex">Root</span>
										</div>
									</CardBody>
									<CardFooter>
										<div className="BeonshopCardFooter-wrapper">
											<Switch onChange={() => setHaveBorder1(!haveBorder1)} id={"chck1"} name={"chck1"} />
											<button className="BeonshopCardFooter-button User" onClick={() => this.openModal()}>Configurar</button>
										</div>
									</CardFooter>
								</div>
							</Card>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-3" >
							<Card>
								<div className={haveBorder2 ? "Card-box UserCard haveBorder" : "Card-box UserCard"}>
									<CardHeader>
										<div className="BeonshopCardHeader-wrapper">
											<div className="Card-cropper">
												<img className="Card-payMethodImage img" src={user} alt="user" />
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<div className="CardBody-content">
											<span className="CardHeader-name">Antonio Horcajo</span>
											<span className="CardBody-email">antonio@identty.com</span>
											<span className="CardBody-status d-flex">Root</span>
										</div>
									</CardBody>
									<CardFooter>
										<div className="BeonshopCardFooter-wrapper">
											<Switch onChange={() => setHaveBorder2(!haveBorder2)} id={"chck2"} name={"chck2"} />
											<button className="BeonshopCardFooter-button User" onClick={() => this.openModal()}>Configurar</button>
										</div>
									</CardFooter>
								</div>
							</Card>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-3" >
							<Card>
								<div className={haveBorder3 ? "Card-box UserCard haveBorder" : "Card-box UserCard"}>
									<CardHeader>
										<div className="BeonshopCardHeader-wrapper">
											<div className="Card-cropper">
												<img className="Card-payMethodImage img" src={user} alt="user" />
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<div className="CardBody-content">
											<span className="CardHeader-name">Antonio Horcajo</span>
											<span className="CardBody-email">antonio@identty.com</span>
											<span className="CardBody-status d-flex">Root</span>
										</div>
									</CardBody>
									<CardFooter>
										<div className="BeonshopCardFooter-wrapper">
											<Switch onChange={() => setHaveBorder3(!haveBorder3)} id={"chck3"} name={"chck3"} />
											<button className="BeonshopCardFooter-button User" onClick={() => this.openModal()}>Configurar</button>
										</div>
									</CardFooter>
								</div>
							</Card>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-3" >
							<Card>
								<div className={haveBorder4 ? "Card-box UserCard haveBorder" : "Card-box UserCard"}>
									<CardHeader>
										<div className="BeonshopCardHeader-wrapper">
											<div className="Card-cropper">
												<img className="Card-payMethodImage img" src={user} alt="user" />
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<div className="CardBody-content">
											<span className="CardHeader-name">Antonio Horcajo</span>
											<span className="CardBody-email">antonio@identty.com</span>
											<span className="CardBody-status d-flex">Root</span>
										</div>
									</CardBody>
									<CardFooter>
										<div className="BeonshopCardFooter-wrapper">
											<Switch onChange={() => setHaveBorder4(!haveBorder4)} id={"chck4"} name={"chck4"} />
											<button className="BeonshopCardFooter-button User" onClick={() => this.openModal()}>Configurar</button>
										</div>
									</CardFooter>
								</div>
							</Card>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-3" >
							<Card>
								<div className={haveBorder5 ? "Card-box UserCard haveBorder" : "Card-box UserCard"}>
									<CardHeader>
										<div className="BeonshopCardHeader-wrapper">
											<div className="Card-cropper">
												<img className="Card-payMethodImage img" src={user} alt="user" />
											</div>
										</div>
									</CardHeader>
									<CardBody>
										<div className="CardBody-content">
											<span className="CardHeader-name">Antonio Horcajo</span>
											<span className="CardBody-email">antonio@identty.com</span>
											<span className="CardBody-status d-flex">Root</span>
										</div>
									</CardBody>
									<CardFooter>
										<div className="BeonshopCardFooter-wrapper">
											<Switch onChange={() => setHaveBorder5(!haveBorder5)} id={"chck5"} name={"chck5"} />
											<button className="BeonshopCardFooter-button User" onClick={() => this.openModal()}>Configurar</button>
										</div>
									</CardFooter>
								</div>
							</Card>
						</div>
						<div className="col-12 col-sm-6 col-md-4 col-lg-3">
							<AddingCard>
								<div className="AddingCard-circle">
									<i className="AddingCard-plus fas fa-plus fa-4x"></i>
								</div>
							</AddingCard>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlansPermissions;
