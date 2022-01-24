import React from 'react';

const Row = ({data}) => {
    console.log(data);
    return (
        <div>
            {
                Object.values(data).map((element)=><div key={Date.now()}>{element}</div>)
            }
        </div>
    );
};

export default Row;
