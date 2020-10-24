import React from 'react'

const SectionHeader = (props) => {
  return(
    <div className="ContractedPlan">
      <div className="ContractedPlan-section">
        {props.children}
      </div>
    </div>
  )
}

export default SectionHeader
