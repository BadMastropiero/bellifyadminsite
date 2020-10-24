import React from 'react';

const TableFooter = (props) => (
    <tfoot className="TableFooter">
        {props.children}
    </tfoot>
);

export default TableFooter;