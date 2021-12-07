import React from "react";

const View = ({firstname, lastname, phonenumber, role, message}) => {
    return (
        <viewwrapper>
            <h1>This is your input: </h1>
            <p className='first-name'>First name: {firstname}</p>
            <p className='last-name'>Last name: {lastname}</p>
            <p className='role'>Phone number: {phonenumber}</p>
            <p className='role'>Role: {role}</p>
            <p className='message'>Message: {message}</p>
        </viewwrapper>
    ); 
}

export default View;