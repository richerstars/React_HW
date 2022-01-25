import React from 'react';
import Row from "./Row/Row";

const Rows = ({users}) => {
    return (
        <div>
            {users.map((el,index) => <Row key={index} data={el}/>)}
        </div>
    );
};

export default Rows;
