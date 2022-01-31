import React from 'react';

const Row = ({title, itemClass}) =>  (
    <div className={itemClass}>
        {title}
    </div>
);

export default Row;
