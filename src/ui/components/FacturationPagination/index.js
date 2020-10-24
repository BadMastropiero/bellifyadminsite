import React from "react"
import { Link } from "react-router-dom";

import "../../../assets/scss/components/table-pagination/table-pagination.scss"

const TablePagination = (props) => (
	<div className="Pagination">
		<div className="row justify-content-around">
			<ul className="Pagination-navbar">
				<li className="Pagination-links"><Link to={''} className="Pagination-link" href="#">1</Link></li>
				<li className="Pagination-links"><Link to={''} className="Pagination-link" href="#">2</Link></li>
				<li className="Pagination-next"><Link to={''} className="Pagination-link next" href="#">Siguiente</Link></li>
			</ul>
		</div>
	</div>
)

export default TablePagination
