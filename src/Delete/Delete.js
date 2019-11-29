import React from 'react';

const Delete = (props) => {
    return (
        <div className="Delete">
            <button type="button" onClick={props.click}>
                <i className="fas fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
};

export default Delete;
