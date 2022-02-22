import React from 'react';
import { StNotification } from "./styled";
import { useSelector,useDispatch } from "react-redux";
import { selectNotification } from "../../store/notification/selectors";
import { clearNotification } from "../../store/notification/actions";

const Notification = () => {
    const dispatch = useDispatch();
    const {type, message} = useSelector(selectNotification);
    React.useEffect(() => {
        if (type)  {
            setTimeout(()=> {
                dispatch(clearNotification());
            }, 1500);}
    }, [type]);
    return type && (<StNotification isSuccess={type}><p> {message} </p></StNotification>);
};

export default Notification;
