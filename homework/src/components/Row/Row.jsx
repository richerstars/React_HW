import React from 'react';
import Circle from '../Circle/Circle';

const Row = ({play, row}) => (
    <tr>
        {Object.keys(row).map((i) => (<Circle key={i} value={row[i]} columnIndex={i} play={play}/>))}
    </tr>)


export default Row;
