import React, { Component } from 'react';
import Circle from "../Circle/Circle";


class Row extends Component {
    render() {
        const { play, row } = this.props;
        let rowOutput = Object.keys(row).map(function(i) {
            return (<Circle key={i} value={row[i]} columnIndex={i} play={play} />)
        });
        return (<tr>{rowOutput}</tr>)
    };
}

export default Row;
