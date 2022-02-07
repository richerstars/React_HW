import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';

const Header = (props) => {
    const {user} = useContext(UserContext);

    return (
        <div>
           Hello, {user}
        </div>
    );
};

export default Header;