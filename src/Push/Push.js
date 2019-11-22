import React from 'react';

const push = (props) => {
    return (
        <div className="Push">
            <button type="button" onClick={props.click}>
                {props.symbol}
            </button>
        </div>
    )
};

export default push;