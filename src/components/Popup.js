import React from "react";

const Popup = ({ firstname, lastname, phonenumber, role, message, cancelHandler, postHandler}) => {
    
    return(
        <popup className='hide'>
            <popup-wrapper-wrapper>
                <popup-wrapper>
                    <h1>This is your input: </h1>
                    <p className='first-name'>First name: {firstname}</p>
                    <p className='last-name'>Last name: {lastname}</p>
                    <p className='role'>Phone number: {phonenumber}</p>
                    <p className='role'>Role: {role}</p>
                    <p className='message'>Message: {message}</p>
                    <div className='buttons-wrapper'>
                        <button className='confirm' name='isHidden' onClick={postHandler} >Confirm</button>
                        <button className='cancel' name='isHidden' onClick={cancelHandler}>Cancel</button>
                    </div>
                </popup-wrapper>
            </popup-wrapper-wrapper>
        </popup>
    );
}

export default Popup;