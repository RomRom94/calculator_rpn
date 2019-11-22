import React from 'react';

const clearAll = (props) => {
    return (
        <div className="ClearAll">
            <button type="button" onClick={props.click}>{props.symbol}</button>
        </div>
    )
};

export default clearAll;