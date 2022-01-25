import React from 'react';

const Row = ({data}) => {
    return (
        <div>
            {
                Object.values(data).map((element,index)=><div key={index}>{element}</div>)
            }
        </div>
    );
};

export default Row;
