import React, { Component }  from "react"

import user from "../../../../assets/img/brand/plansPermissions/user@2x.png";

import Switch from "../../../components/switch";

class UserCard extends Component {
  render() {
    return (
      <div className="CardBox">
        <div className="CardHeader">
          <img className="CardHeader-img" src={user} alt="user" />
          <span className="CardHeader-name">Antonio Horcajo</span>
        </div>
        <div className="BSCardBody">
          <div className="BSCardBody-content">
            <span className="BSCardBody-email">antonio@identty.com</span>
            <span className="BSCardBody-status">Root</span>
          </div>
        </div>
        <div className="BeonshopCard-footer">
          <Switch  id={"chck"} name={"chck"} />
          <button className="CardFooter-button" onClick={() => this.openModal()}>Configurar</button>
        </div>
      </div>
    );
  }
}

export default UserCard
