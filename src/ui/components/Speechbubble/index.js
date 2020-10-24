import React, { Fragment } from 'react';
import Card from '../card';

import '../../../assets/scss/components/speechbubble/speechbubble.scss';
//assets/scss/components/speechbubble/speechbubble.scss

export default function speechbubble(props) {

    return(
        <Fragment>
            <div className="Speechbubble-triangle"></div>
            <div className={`d-block Speechbubble Speechbubble-bottom`}>
                <Card className="p-4">
                    <button onClick={() => this.handlerShowTable()} className="Modal-buttonClose gray"><i class="fas fa-times"></i></button>
                    { props.children }
                </Card>
            </div>
        </Fragment>
    )

}
