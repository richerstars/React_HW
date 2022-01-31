import React from 'react';
import Row from "./Row/Row";
import Header from "../Header/Header";

const Rows = ({user}) => (
    <div className="table-row">
        <Header itemClass="table-row-one-item"
                tableRowClass="table-row-one" />
        <div className="table-row-two">
            {
                Object.values(user).map((objItem, index) =>
                    <Row title={objItem} key={index}  itemClass="table-row-two-item" />
                )
            }
        </div>
    </div>
);

export default Rows;
