import React from 'react';
import Row from "./Row/Row";

const Rows = ({users}) => {
    return (
        <div>
            {users.map((el) => <Row key={Date.now()} data={el}/>)}
        </div>
    );
};

export default Rows;
