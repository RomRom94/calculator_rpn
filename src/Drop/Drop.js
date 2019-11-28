import React from 'react';

const drop = (props) => {
    return (
        <div className="Drop">
            <button type="button" onClick={props.click}>
                <i className="fas fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
};

export default drop;
