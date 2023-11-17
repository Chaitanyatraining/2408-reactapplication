import React, { Component } from 'react'

export class FormValidation extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            firstNameErr: '',
            lastNameErr: '',
            emailErr: '',
            phoneErr: ''  
        }
    }
    
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     firstNameErr: '',
    //     lastNameErr: '',
    //     emailErr: '',
    //     phoneErr: ''
    // }

    validateForm = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        if (this.state.firstName.length < 4) {
            firstNameErr = 'first Name should be atleast 4 characters'
        }

        if (this.state.lastName.length < 1) {
            lastNameErr = 'last Name should contain atleast 1 char'
        }

        if (!this.state.email.includes('@')) {
            emailErr = 'Enter a valid Email Address'
        }

        if (this.state.phone.length != 10) {
            phoneErr = 'Enter a valid phone number'
        }

        //falsy - 0, '', null, undefined, false, nan

        if (firstNameErr || lastNameErr || emailErr || phoneErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        } else {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validateForm()
        console.log('handle submit clicked')
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(this.state)
    }

    // Validation
    // firstName > 4
    // lastName > 1
    // email '@'
    // phone it should be 10 digits

    render() {
        return (
            <center>
                <h2>Form validation</h2>
                <form>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter your first Name'
                                    name="firstName"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                />
                                <p className='text-danger'>{this.state.firstNameErr}</p>
                            </div>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter your last Name'
                                    name="lastName"
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                />
                                <p className='text-danger'>{this.state.lastNameErr}</p>
                            </div>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter your email'
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                                <p className='text-danger'>{this.state.emailErr}</p>
                            </div>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter your phone'
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                />
                                <p className='text-danger'>{this.state.phoneErr}</p>

                            </div>
                            <button className='btn btn-primary mt-2'
                                onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                </form>
            </center>
        )
    }
}

export default FormValidation