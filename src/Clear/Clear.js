import React from 'react';

const clear = (props) => {
    return (
        <div className="Clear">
            <button type="button" onClick={props.click}>
                {props.symbol}
            </button>
        </div>
    )
};

export default clear;