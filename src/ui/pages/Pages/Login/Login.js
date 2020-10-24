import React, { Component } from 'react';
import loginFile from '../../../../assets/img/brand/login/loginImage.png';
import logo from '../../../../assets/img/brand/login/Group 247.png';

import '../../../../App.scss';
import '../../../../assets/scss/components/_login.scss';
import '../../../../assets/scss/components/_checkbox.scss';

class Login extends Component {
	render() {
		return (
			<section className="Login">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 order-2 col-lg-6 order-lg-1 Login-padding">
							<img className="Login-image" src={loginFile} alt="Login"></img>
						</div>
						<div className="col-12 order-1 col-lg-6 order-lg-2 Login-padding">
							<div className="Login-content">
								<div className="Login-wrapper">
									<div className="Login-wrapperLogo">
										<img className="Login-logo" src={logo} alt="Login logo"></img>
									</div>
									<div className="Login-wrapperForm">
										<h2 className="Login-formTitle">Iniciar Sesión</h2>

										<form className="Login-form">
											<div className="form-group Login-formGroup">
												<input className="Login-formInput" type="email" name="email" id="email" placeholder="Email" />
											</div>
											<div className="form-group Login-formGroup">
												<input className="Login-formInput" type="password" name="password" id="password" placeholder="Contraseña" />
											</div>
											<div className="form-group Login-formGroup position-relative">
												<label className="Card-container login">Recordarme
                                      				<input className="Card-checkContainer d-none" type="checkbox" />
													<span className="Card-checkmark login"></span>
												</label>
											</div>
											<a href="/" className="Login-rememberPassword">¿Olvidates tu contraseña?</a>
											<input type="submit" value="Entrar" className="Login-formSubmit" />
										</form>
									</div>
									<div className="Login-register">
										<h3 className="Login-registerTitle">¿No tienes una cuenta Beonshop?</h3>
										<button className="Login-buttonRegister">Empieza ahora</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Login;
