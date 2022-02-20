import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import constants from "./components/constants/url";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { StyledMainWrapp } from './components/Form/styled';
import { NotificationContext } from "./components/context/NotificationContext";
import Notification from "./components/common/Notification/Notification";

const App = () => {
    const [todos, setTodos] = useState([{value: 'test', id: 1, isChecked: false}]);
    const [isLoading, setIsLoading] = useState(true);
    const {notification, showNotification} = useContext(NotificationContext);

    const addListItem = (values) => {
        setTodos([...todos, values]);
    };
    const removeListItem = (id) => {
        setTodos(todos.filter(el => el.id !== id));
    };
    const changeChecked = (id) => {
        setTodos(todos.map(el => el.id === id ? {...el, isChecked: !el.isChecked} : el));
    };

    const startLoader = () => setIsLoading(true);
    const stopLoader = () => setIsLoading(false);

    const getDateFromApi = async () => {
        try {
            startLoader();
            const response = await axios.get(`${constants.url}?_limit=10`);
            setTodos(response.data);
        } finally {
            stopLoader();
        }
    };

    const addDateToApi = async (value) => {
        try {
            startLoader();
            await axios.post(constants.url, value);
            addListItem(value);
            showNotification({type: "success", message: `Task added successfully`});
        } catch (error) {
            showNotification({type: "fail", message: `Error.Task was not added`});
            return false;
        } finally {
            stopLoader();
        }
    };

    const deleteDateFromApi = async (id) => {
        try {
            startLoader();
            await axios.delete(`${constants.url}/${id}`);
            removeListItem(id);
            showNotification({type: "success", message: `Task was deleted successfully`});
        } catch (error) {
            showNotification({type: "fail", message: `Error.Task was not deleted`});
            return false;
        } finally {
            stopLoader();
        }
    };
    const changeDateFromApi = async (id) => {
        try {
            startLoader();
            await axios.put(`${constants.url}/${id}`, isLoading);
            showNotification({type: "success", message: `Task was changed successfully`});
        } catch (error) {
            showNotification({type: "fail", message: `Error.Task was not changed`});
            return false;
        } finally {
            changeChecked(id);
            stopLoader();
        }
    };




    return (
        <>
            {notification.type && <Notification message={notification.message} type={notification.type}/>}
            <StyledMainWrapp>
                <h1> Todo List</h1>
                <Form addItem={addDateToApi}/>
                <List todos={todos} changeTodo={changeDateFromApi} deleteTodo={deleteDateFromApi}/>
            </StyledMainWrapp>
        </>
    );
};

export default App;
