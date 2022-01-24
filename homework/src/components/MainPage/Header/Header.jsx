import React from 'react';

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
        <div>
            {headers.map((el) => <div key={el}>{el}</div>)}
        </div>
    );
};

export default Header;
