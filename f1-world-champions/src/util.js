import React from 'react';
import Notification from './components/Notification';

//This function store data to session
//key => string
//value => any
export const setSessionStorage = (key, value) => {
    const data = { value };
    sessionStorage.setItem(key, JSON.stringify(data));
}

//This function fetch data from session
//key => string
export const getSessionStorage = (key) => {
    let data = sessionStorage.getItem(key);
    if (data !== null && data !== "") {
        return JSON.parse(data).value;
    }
    return null;
}

//This function handles notofication in this app
//Condition => boolean
//type => string
//heading => string
//message => string
export const showNotification = (condition) => (type, heading, message) => {
    return (
        condition ?
            <Notification heading={heading} type={type} message={message} /> :
            null
    )
}