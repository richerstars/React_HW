import stylesConst from '../components/constants/TextConstants';
import numberConst from '../components/constants/NumberConstants';

const checkVertical = (board) => {
    for (let rows = 3; rows < numberConst.ROWS; rows++) {
        for (let columns = 0; columns < numberConst.COLUMNS; columns++) {
            if (board[rows][columns]) {
                if (board[rows][columns] === board[rows - 1][columns] &&
                    board[rows][columns] === board[rows - 2][columns] &&
                    board[rows][columns] === board[rows - 3][columns]) {
                    return board[rows][columns];
                }
            }
        }
    }
}

const checkHorizontal = (board) => {
    for (let rows = 0; rows < numberConst.ROWS; rows++) {
        for (let columns = 0; columns < 4; columns++) {
            if (board[rows][columns]) {
                if (board[rows][columns] === board[rows][columns + 1] &&
                    board[rows][columns] === board[rows][columns + 2] &&
                    board[rows][columns] === board[rows][columns + 3]) {
                    return board[rows][columns];
                }
            }
        }
    }
}

const checkDiagonalRight = (board) => {
    for (let rows = 3; rows < numberConst.ROWS; rows++) {
        for (let columns = 0; columns < 4; columns++) {
            if (board[rows][columns]) {
                if (board[rows][columns] === board[rows - 1][columns + 1] &&
                    board[rows][columns] === board[rows - 2][columns + 2] &&
                    board[rows][columns] === board[rows - 3][columns + 3]) {
                    return board[rows][columns];
                }
            }
        }
    }
}

const checkDiagonalLeft = (board) => {
    for (let rows = 3; rows < numberConst.ROWS; rows++) {
        for (let columns = 3; columns < numberConst.COLUMNS; columns++) {
            if (board[rows][columns]) {
                if (board[rows][columns] === board[rows - 1][columns - 1] &&
                    board[rows][columns] === board[rows - 2][columns - 2] &&
                    board[rows][columns] === board[rows - 3][columns - 3]) {
                    return board[rows][columns];
                }
            }
        }
    }
}

const checkDraw = (board) => {
    for (let rows = 0; rows < numberConst.ROWS; rows++) {
        for (let columns = 0; columns < numberConst.COLUMNS; columns++) {
            if (board[rows][columns] === null) {
                return null;
            }
        }
    }
    return stylesConst.STYLE_DRAW;
}

export const checkAll = (board) =>
    checkVertical(board)
    || checkDiagonalRight(board)
    || checkDiagonalLeft(board)
    || checkHorizontal(board)
    || checkDraw(board);