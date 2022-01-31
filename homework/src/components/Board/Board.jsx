import React, {Component} from 'react';
import Row from '../Row/Row';
import './Board.css';
import stylesConst from '../constants/TextConstants';
import numberConst from '../constants/NumberConstants';

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
        for (let r = 0; r < numberConst.ROWS; r++) {
            let row = [];
            for (let c = 0; c < numberConst.COLUMNS; c++) {
                row.push(null);
            }
            board.push(row);
        }

        this.setState({
            board,
            currentPlayer: this.state.player1,
            IsGameOver: false
        });
    }

    togglePlayer() {
        return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
    }

    play = (c) => {
        if (!this.state.IsGameOver) {
            let board = this.state.board;
            for (let r = 5; r >= 0; r--) {
                if (!board[r][c]) {
                    board[r][c] = this.state.currentPlayer;
                    break;
                }
            }

            let result = this.checkAll(board);
            if (result === this.state.player1) {
                this.setState({board, IsGameOver: true});
                alert('Player 1 wins!');
            } else if (result === this.state.player2) {
                this.setState({board, IsGameOver: true});
                alert('Player 2 wins!');
            } else if (result === 'draw') {
                this.setState({board, IsGameOver: true});
                alert("It's a draw!");
            } else {
                this.setState({board, currentPlayer: this.togglePlayer()});
            }
        } else {
            alert("Game over. Please start a new game.");
        }
    }

    checkVertical = (board) => {
        for (let r = 3; r < numberConst.ROWS; r++) {
            for (let c = 0; c < numberConst.COLUMNS; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c] &&
                        board[r][c] === board[r - 2][c] &&
                        board[r][c] === board[r - 3][c]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkHorizontal = (board) => {
        for (let r = 0; r < numberConst.ROWS; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r][c + 1] &&
                        board[r][c] === board[r][c + 2] &&
                        board[r][c] === board[r][c + 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDiagonalRight = (board) => {
        for (let r = 3; r < numberConst.ROWS; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c + 1] &&
                        board[r][c] === board[r - 2][c + 2] &&
                        board[r][c] === board[r - 3][c + 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDiagonalLeft = (board) => {
        for (let r = 3; r < numberConst.ROWS; r++) {
            for (let c = 3; c < numberConst.COLUMNS; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c - 1] &&
                        board[r][c] === board[r - 2][c - 2] &&
                        board[r][c] === board[r - 3][c - 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDraw = (board) => {
        for (let r = 0; r < numberConst.ROWS; r++) {
            for (let c = 0; c < numberConst.COLUMNS; c++) {
                if (board[r][c] === null) {
                    return null;
                }
            }
        }
        return 'draw';
    }

    checkAll = (board) => {
        return this.checkVertical(board)
            || this.checkDiagonalRight(board)
            || this.checkDiagonalLeft(board)
            || this.checkHorizontal(board)
            || this.checkDraw(board);
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
