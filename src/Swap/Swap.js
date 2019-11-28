import React from 'react';

const drop = (props) => {
    return (
        <div className="Swap">
            <button type="button" onClick={props.click}>
                <i className="fas fa-exchange-alt"></i>
            </button>
        </div>
    )
};

export default drop;
