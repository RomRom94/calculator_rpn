import React from 'react';

const drop = (props) => {
    return (
        <div className="Drop">
            <button type="button" onClick={props.click}>
                {props.symbol}
            </button>
        </div>
    )
};

export default drop;