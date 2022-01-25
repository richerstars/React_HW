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
        <>
            {headers.map((el) => <div key={el}>{el}</div>)}
        </>
    );
};

export default Header;
