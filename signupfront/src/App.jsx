import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {

    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
    }

    changeFullName = evt => {
        this.setState({
            fullName: evt.target.value
        })
    }


    changeUsername = evt => {
        this.setState({
            username: evt.target.value
        })
    }


    changeEmail = evt => {
        this.setState({
            email: evt.target.value
        })
    }


    changePassword = evt => {
        this.setState({
            password: evt.target.value
        })
    }

    onSubmit = evt => {
        evt.preventDefault();

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })

    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='from-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}  
                            value={this.state.fullName}
                            className='form-control form-group'
                            >
                            </input>
                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}  
                            value={this.state.username}
                            className='form-control form-group'
                            >
                            </input>
                            <input type='text'
                            placeholder='email'
                            onChange={this.changeEmail}  
                            value={this.state.email}
                            className='form-control form-group'
                            >
                            </input>
                            <input type='text'
                            placeholder='email'
                            onChange={this.changePassword}  
                            value={this.state.password}
                            className='form-control form-group'
                            ></input>
                        
                            <input type='submit' className='btn btn-danger btn-block' 
                            value='Submit'></input>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;