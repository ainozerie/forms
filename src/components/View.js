import React, {Component} from "react";

class View extends Component {
    render() {
        return (
            <view-wrapper>
                <h1>This is your input: </h1>
                <p className='first-name'>First name: {this.props.firstname}</p>
                <p className='last-name'>Last name: {this.props.lastname}</p>
                <p className='role'>Phone number: {this.props.phonenumber}</p>
                <p className='role'>Role: {this.props.role}</p>
                <p className='message'>Message: {this.props.message}</p>

            </view-wrapper>
        ); 
    };
};
export default View;