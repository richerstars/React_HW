import React from 'react';

const Row = ({data}) => {
    return (
        <div className="table-row-two">
            {
                Object.values(data).map((element,index)=><div className="table-row-two-item" key={index}>{element}</div>)
            }
        </div>
    );
};

export default Row;
