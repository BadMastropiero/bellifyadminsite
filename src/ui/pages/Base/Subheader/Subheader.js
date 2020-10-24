import React from "react"

import '../../../../assets/scss/components/subheader/subheader.scss'

const Subheader = (props) => (
	<div>
		<div className="ContractedPlan">
			{props.children}
		</div>
	</div>
)

export default Subheader
