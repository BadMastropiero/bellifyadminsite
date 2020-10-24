import React, { Component } from "react"

import user from "../../../assets/img/brand/plansPermissions/user@2x.png";

import Switch from "../switch";

import '../../../assets/scss/components/user-card/user-card.scss'
import '../../../assets/scss/components/_card.scss'

class UserCard extends Component {
	render() {
		return (
			<div className="CardBox">
				<div className="CardHeader">
					<img className="CardHeader-img" src={user} alt="user" />
					<span className="CardHeader-name">Antonio Horcajo</span>
				</div>
				<div className="CardBody">
					<div className="CardBody-content">
						<span className="CardBody-email">antonio@identty.com</span>
						<span className="CardBody-status">Root</span>
					</div>
				</div>
				<div className="CardFooter">
					<Switch id={"chck"} name={"chck"} />
					<button className="CardFooter-button" onClick={() => this.openModal()}>Configurar</button>
				</div>
			</div>
		);
	}
}

export default UserCard
