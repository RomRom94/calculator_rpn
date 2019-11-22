import React from 'react';

const button = (props) => {

    return (
        <div className="Button">
            <button
                type="button"
                onClick={props.click}
            >
                {props.symbol}
            </button>
        </div>
    )
};

export default button;