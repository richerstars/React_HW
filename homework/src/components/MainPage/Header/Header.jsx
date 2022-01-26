import React from 'react';
import './Header.scss';

const Header = ({tableRowClass, itemClass }) => {
    const headers = [
        'Name',
        'UserName',
        'E-mail',
        'Phone',
        'Website',
        'Address',
    ];
    return (
        <div className={tableRowClass}>
            {headers.map((el) => <div className={itemClass} key={el}>{el}</div>)}
        </div>
    );
};

export default Header;
