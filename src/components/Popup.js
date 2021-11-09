import React, {Component} from "react";

class Popup extends Component {
    state = {
        showPopup: false,
        placeholders: {
            firstname: '',
            lastname: '',
            phonenumber: '',
            role: '',
            message: ''
        }
    };

    render() {
        return(
            <popup className='hide'>
                <popup-wrapper-wrapper>
                    <popup-wrapper>
                        <h1>This is your input: </h1>
                        <p className='first-name'>First name: {this.props.firstname}</p>
                        <p className='last-name'>Last name: {this.props.lastname}</p>
                        <p className='role'>Phone number: {this.props.phonenumber}</p>
                        <p className='role'>Role: {this.props.role}</p>
                        <p className='message'>Message: {this.props.message}</p>
                        <div className='buttons-wrapper'>
                            <button className='confirm' name='isHidden' onClick={this.props.confirmHandler}>Confirm</button>
                            <button className='cancel' name='isHidden' onClick={this.props.cancelHandler}>Cancel</button>
                        </div>
                    </popup-wrapper>
                </popup-wrapper-wrapper>
            </popup>
        );
    };
};

export default Popup;