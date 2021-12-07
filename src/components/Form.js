import React, {Component} from "react";

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.submithandler}>
                <input className='mainInput' type='text' name='firstname' placeholder='Your first name' onChange={this.props.inputhandler} required/>
                <input className='mainInput' type='text' name='lastname' placeholder='Your last name' onChange={this.props.inputhandler} required/>
                <input className='mainInput' type='text' name='phonenumber' placeholder='Phone number' onChange={this.props.inputhandler} required/>
                <select type='select' name='role' onChange={this.props.inputhandler} required>
                    <option className="defaultOption" disabled selected>Select your role</option>
                    <option value='student' >Student</option>
                    <option value='teacher'>Teacher</option>
                    <option value='other'>Other</option>
                </select>
                <textarea className='mainInput' type='text' name='message' id='message' placeholder='Some information you want to mention' onChange={this.props.inputhandler} required/>
                <button className='submit' type='submit' name='isHidden'>Submit</button>
            </form>
        );
    };
};

export default Form;