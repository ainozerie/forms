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
            <div className='button-wrapper'>
                <button className='close' handler={this.props.handler}>X</button>
                <p>Close</p>
            </div>
        );
    };
};

export default Popup;