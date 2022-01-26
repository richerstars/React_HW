import React from 'react';
import Row from "./Row/Row";

const Rows = ({users}) => {
    return (
        <>
            {users.map((el,index) => <Row key={index} data={el}/>)}
        </>
    );
};

export default Rows;
