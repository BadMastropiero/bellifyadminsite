import React from "react"
import { ListGroup } from "reactstrap";

const EmailList = (props) => {
  return (
    <ListGroup className="EmailType-features">
      {props.children}
    </ListGroup>
  )
}

export default EmailList
