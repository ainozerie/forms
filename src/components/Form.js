import React, {Component} from "react";

class Form extends Component {
    state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
        role: '',
        message: ''
      };

    render() {
        return (
            <form onSubmit={this.props.submithandler}>
                <input className='mainInput' type='text' name='firstname' placeholder='Your first name' onChange={this.props.inputhandler}/>
                <input className='mainInput' type='text' name='lastname' placeholder='Your last name' onChange={this.props.inputhandler}/>
                <input className='mainInput' type='text' name='phonenumber' placeholder='Phone number' onChange={this.props.inputhandler}/>
                <select type='select' name='role' onChange={this.props.inputhandler}>
                    <option className="defaultOption" disabled selected>Select your role</option>
                    <option value='designer'>Designer</option>
                    <option value='developer'>Developer</option>
                    <option value='hr'>HR</option>
                </select>
                <textarea className='mainInput' type='text' name='message' placeholder='Some information you want to mention' onChange={this.props.inputhandler}/>
                <button className='submit' type='submit' name='isHidden'>Submit</button>
            </form>
        );
    };
};

export default Form;