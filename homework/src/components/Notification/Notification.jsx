import React from 'react';
import { StNotification } from "./styled";

const Notification = ({clearNotification,notification: {type, message}}) => {
    React.useEffect(() => {
        if (type)  {
            setTimeout(()=> {
                clearNotification();
            }, 1500);}
    }, [type]);
    return type && (<StNotification isSuccess={type}><p> {message} </p></StNotification>);
};

export default Notification;
