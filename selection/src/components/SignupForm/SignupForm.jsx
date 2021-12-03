import React, { Component } from 'react'
import styles from './SignupForm.module.css';
import userService from '../../services/userService'


class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        /**send data to api by calling the signup function in your userService */
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin();
            this.props.history.push('/')
        }catch(err){
            console.log(err)
        }
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <h3>Sign Up</h3>
                <div className={styles.input}>
                    <input type="text" placeholder="Name" className="form-control" name="name" onChange={this.handleChange}/>
                </div>
                <div className={styles.input}>
                    <input type="email" placeholder="Email" className="form-control" name="email" onChange={this.handleChange}/>
                </div>
                <div className={styles.input}>
                    <input type="password" placeholder="Password" className="form-control" name="password" onChange={this.handleChange}/>
                </div>
                <div className={styles.input}>
                    <input type="password" placeholder="Confirm Pasword" name="confirmPassword" className="form-control" onChange={this.handleChange}/>
                </div>
                <div className={styles.buttonbox}>
                    <button className={styles.button}>Sign up</button>
                </div>
            </form>
        )
    }
}
export default SignupForm