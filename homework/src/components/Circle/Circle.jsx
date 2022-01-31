import React, { Component } from 'react';

class Circle extends Component {
    render() {
        const { play, columnIndex, value } = this.props;
        let space = 'open';

        if (value === 1) {
            space = 'player1';
        } else if (value === 2) {
            space = 'player2';
        }

        return (
            <td>
                <div className="tile" onClick={() => play(columnIndex)}>
                    <div className={[space, "circle"].join(' ')}/>
                </div>
            </td>
        );
    }
}

export default Circle;
