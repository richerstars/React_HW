import React, {Component} from 'react';
import Row from '../Row/Row';
import './Board.css';
import stylesConst from '../constants/TextConstants';
import numberConst from '../constants/NumberConstants';
import {checkAll} from '../../helpers/CheckBoard';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: 1,
            player2: 2,
            currentPlayer: null,
            board: [],
            IsGameOver: false
        };
    }

    componentDidMount() {this.initBoard();}

    initBoard = () => {
        let board = [];
        for (let rows = 0; rows < numberConst.ROWS; rows++) {
            let row = [];
            for (let columns = 0; columns < numberConst.COLUMNS; columns++) {
                row.push(null);
            }
            board.push(row);
        }
        this.setState({
            board,
            currentPlayer: this.state.player1,
            IsGameOver: false,
        });
    }

    togglePlayer = () => this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;

    play = (columns) => {
        if (!this.state.IsGameOver) {
            let board = this.state.board;
            for (let rows = 5; rows >= 0; rows--) {
                if (!board[rows][columns]) {
                    board[rows][columns] = this.state.currentPlayer;
                    break;
                }
            }

            let result = checkAll(board);
            switch (true) {
                case result === this.state.player1:
                    this.setState({board, IsGameOver: true});
                    alert(stylesConst.VICTORY_1);
                    break;
                case result === this.state.player2:
                    this.setState({board, IsGameOver: true});
                    alert(stylesConst.VICTORY_2);
                    break;
                case result === stylesConst.STYLE_DRAW:
                    this.setState({board, IsGameOver: true});
                    alert(stylesConst.DRAW);
                    break;
                default:
                    this.setState({board, currentPlayer: this.togglePlayer()});
                    break;
            }
        } else {
            alert(stylesConst.GAME_OVER);
        }
    }

    render() {
        return (
            <div>
                <div className={stylesConst.STYLE_BUTTON} onClick={this.initBoard}>New Game</div>
                <table>
                    <tbody>
                    {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play}/>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Board;
