import React, { Component } from "react"
import { ListGroup, ListGroupItem, TabContent, TabPane } from "reactstrap";


import "../../../assets/scss/components/plan-picker/plan-picker.scss"

class PlanPicker extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: 1
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {
		return (
			<div className="Container">
				<div className="row m-0 p-0">
					<div className="col-12 col-xl-3 PlanPicker m-0 p-0">
						<div className="PlanSelector">
							<ListGroup className="Plans" id="list-tab" role="tablist">
								<ListGroupItem
									className="Plans-feature"
									onClick={() => this.toggle(0)}
									action active={this.state.activeTab === 0}
								>
									<div className="Plans-content">
										E-Basic
                    					<i className="fas fa-chevron-right" />
									</div>
								</ListGroupItem>
								<ListGroupItem
									className="Plans-feature"
									onClick={() => this.toggle(1)}
									action active={this.state.activeTab === 1}
								>
									<div className="Plans-content">
										E-One
                    					<i className="fas fa-chevron-right"></i>
									</div>
								</ListGroupItem>
								<ListGroupItem
									className="Plans-feature"
									onClick={() => this.toggle(2)}
									action active={this.state.activeTab === 2}
								>
									<div className="Plans-content">
										<span className="Plans-selected">E-Pro <span className="Plans-contracted">Contratado</span> </span>
										<i className="fas fa-chevron-right"></i>
									</div>
								</ListGroupItem>
							</ListGroup>
						</div>
					</div>
					<div className="col-12 col-xl-9 ColumnContent m-0 p-0">
						<div className="Plan">
							<TabContent className="PlanContainer" activeTab={this.state.activeTab}>
								<TabPane className="PlanContainer-content" tabId={0}>
									<span className="PlanContainer-text">
										Anim aute <span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu</span> dolore. Ad laboris ipsum
										reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.
										<br />
										<br />
										Curabitur bibendum fringilla vestibulum. <span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu</span> Vestibulum quis turpis tempor, cursus metus et, pretium dolor. Nam volutpat lacus ac commodo consectetur. Morbi eget interdum risus.
										Nam vehicula odio erat, at iaculis velit rutrum eu. Donec vitae eros lectus. Nulla quis quam fermentum, aliquam ligula eget, mollis enim.
										<br />
										<br />
										<span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu </span>
										 Curabet mi Nam vehicula odio erat, at iaculis velit rutrum eu.
									</span>
								</TabPane>
								<TabPane className="PlanContainer-content" tabId={1}>
									<span className="PlanContainer-text">
										Anim aute <span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu</span> dolore. Ad laboris ipsum
                          				reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.
                          				<br />
										<br />

										Curabitur bibendum fringilla vestibulum. <span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu</span> Vestibulum quis turpis tempor, cursus metus et, pretium dolor. Nam volutpat lacus ac commodo consectetur. Morbi eget interdum risus.
										Nam vehicula odio erat, at iaculis velit rutrum eu. Donec vitae eros lectus. Nulla quis quam fermentum, aliquam ligula eget, mollis enim.
										<br />
										<br />
										<span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu</span>
										Curabet mi ac fringilla vestibulum. Vestibulum quis turpis tempor, cursus metus et, pretium dolor. Nam volutpat lacus ac commodo consectetur. Morbi eget interdum risus.
										Nam vehicula odio erat, at iaculis velit rutrum eu.
                        			</span>
								</TabPane>
								<TabPane className="PlanContainer-content" tabId={2}>
									<span className="PlanContainer-text">Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
									Dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
										anim aute <span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu</span> dolore. Ad laboris ipsum
										reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.
										<br />
										<br />
										Curabet mi ac tellus pulvinar accumsan placerat in libero. Mauris lacus diam, porta eget vulputate ac, semper eget nibh.
										Curabitur bibendum fringilla vestibulum. <span className="StrongText"> dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu</span> Vestibulum quis turpis tempor, cursus metus et, pretium dolor. Nam volutpat lacus ac commodo consectetur. Morbi eget interdum risus.
										Nam vehicula odio erat, at iaculis velit rutrum eu. Donec vitae eros lectus. Nulla quis quam fermentum, aliquam ligula eget, mollis enim.
									</span>
								</TabPane>
							</TabContent>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default PlanPicker
