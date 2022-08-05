import React, { Component, useEffect, useState } from 'react';

const Functional1 = () => {
    const [userName, setUserName] = useState('Adela');
    const [firstName, setFirstName] = useState('Maria');
    const [lastName, setLastName] = useState('Tanca');

    useEffect(() => {
        setInterval(() => {
            setUserName('Adela')
            setFirstName('Maria')
            setLastName('Tanca')
        }, 5000);
    });

    const logName = () => {
        console.log(userName);
        console.log(firstName);
        console.log(lastName);
    }
    const handleUserNameInput = e => {
        setUserName(e.target.value);
    };
    const handleFirstNameInput = e => {
        setFirstName(e.target.value);
    };
    const handleLastNameInput = e => {
        setLastName(e.target.value);
    };

    return (
        <div>
            <h3>This is a Functional Component</h3>
            <input
                type="text"
                onChange={handleUserNameInput}
                value={userName}
                placeholder="Your Username"
            />
            <input
                type="text"
                onChange={handleFirstNameInput}
                value={firstName}
                placeholder="Your First Name"
            />
            <input
                type="text"
                onChange={handleLastNameInput}
                value={lastName}
                placeholder="Your Last Name"
            />
            <button
                className="btn btn-large right"
                onClick={logName}
            >
                Log Names
            </button>
        </div>
    );

}
export default Functional1;