import React from 'react';
import { StNotification } from "./styled";
import {TNotify} from "../../store/notification/types";

type TProps = {
    clearNotification: () => void,
    notification: TNotify
};

const Notification = ({clearNotification,notification: {type, message}}:TProps) => {
    React.useEffect(() => {
        if (type)  {
            setTimeout(()=> {
                clearNotification();
            }, 1500);}
    }, [type]);
    return type ? (<StNotification isSuccess={type}><p> {message} </p></StNotification>): null;
};

export default Notification;
