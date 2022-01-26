import React from 'react';
import './Header.scss';

const Header = () => {
    const headers = [
        'Name',
        'UserName',
        'E-mail',
        'Phone',
        'Website',
        'Address',
    ];
    return (
        <div className="table-row-two">
            {headers.map((el) => <div className="table-row-item" key={el}>{el}</div>)}
        </div>
    );
};

export default Header;
