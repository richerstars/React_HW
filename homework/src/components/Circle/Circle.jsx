import React from 'react';
import stylesConst from '../constants/TextConstants';
import numberConst from '../constants/NumberConstants';

const Circle = ({play, columnIndex, value}) => {

    const handlePlay = () => {play(columnIndex);}

    let space = stylesConst.DEFAULT_STYLE_CIRCLE;

    if (value === numberConst.PLAYER_1_VALUE) {
        space = stylesConst.PLAYER_1;
    } else if (value === numberConst.PLAYER_2_VALUE) {
        space = stylesConst.PLAYER_2;
    }

    return (
        <td>
            <div className={stylesConst.BACKGROUND_CIRCLE} onClick={handlePlay}>
                <div className={[space, stylesConst.STYLE_CIRCLE].join(' ')}/>
            </div>
        </td>
    );
};

export default Circle;
