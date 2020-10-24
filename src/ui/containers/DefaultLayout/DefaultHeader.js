import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import Switch from '../../components/switch/index';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Logo from '../../../assets/img/brand/navbar/Logo.svg'
import Profile from '../../../assets/img/brand/profile.svg'
import ShowIcon from '../../../assets/img/brand/checkout/Group 97.png';
import '../../../assets/scss/components/navbar/navbar.scss';

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
	render() {

		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<AppNavbarBrand
				full={{ src: Logo, width: 115, height: 23, alt: 'Beonshop Logo' }}
				// minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
				/>

				<Nav className="d-md-down-none" navbar>
					<NavItem className="p-0">
						<NavLink to="/" className="nav-link-header" >
							www.nombretienda.com 
							<button className="Header-buttonShow">
								<img className="Header-showIcon" src={ShowIcon} alt="Show"/>
							</button>
						</NavLink>
					</NavItem>
					<NavItem className="p-0">
						<div className="d-flex flex-row align-items-center justify-content-center">	
							<Link to="/" className="nav-link-margin">Visibilidad tienda</Link>
							<Switch id={"chck8"} name={"chck8"} customClass={"header"}/>
						</div>
					</NavItem>
				</Nav>
				<Nav className="ml-auto" navbar>
					<NavItem className="d-md-down">
						<NavLink to="#" className="nav-link"><i className="i-searchHeader" /></NavLink>
					</NavItem>
					<NavItem className="d-md-down">
						<NavLink to="#" className="nav-link"><i className="i-messageHeader" /></NavLink>
					</NavItem>
					<NavItem className="d-md-down">
						<NavLink to="#" className="nav-link"><i className="i-notificationHeader" /></NavLink>
					</NavItem>
					<NavItem className="d-md-down">
						<NavLink to="#" className="nav-link"><i className="i-shoppingHeader" /></NavLink>
					</NavItem>
					<p className="shopName">Nombre de la tienda</p>
					<UncontrolledDropdown nav direction="down">
						<DropdownToggle nav>
							<img src={Profile}  alt="admin@bootstrapmaster.com" className="Profile"/>
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
							<DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
							<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
							<DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
							<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
							<DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
							<DropdownItem divider />
							<DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
							<DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
				{/* <AppAsideToggler className="d-md-down-none" /> */}
				{/*<AppAsideToggler className="d-lg-none" mobile />*/}
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
