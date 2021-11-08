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
            <form>
                <input type='text' name='firstname' placeholder='your first name' onChange={this.props.inputhandler}/>
                <input type='text' name='lastname' placeholder='your last name' onChange={this.props.inputhandler}/>
                <input type='text' name='phonenumber' placeholder='phone number' onChange={this.props.inputhandler}/>
                <select type='select' name='role' placeholder='your name' onChange={this.props.inputhandler}>
                    <option value='designer'>Designer</option>
                    <option value='developer'>Developer</option>
                    <option value='hr'>HR</option>
                </select>
                <textarea type='text' name='message' placeholder='Some information you want to mention' onChange={this.props.inputhandler}/>
                <button className='submit' type='submit'>Submit</button>
            </form>
        );
    };
};

export default Form;