import React, { Component } from 'react'
import DisplayData from './DisplayData';

export default class Form extends Component {

    constructor(props){
        super(props)
        this.provinces = [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan']    
        this.state = {
            email: '',
            name: '',
            primaryAddress: '',
            secondaryAddress: '',
            city: '',
            province: '',
            postalCode: '',
            terms: false,
            errorMessage: '',
            data: {}
        }
    }

    onValueChanged = (event) => {
        event.preventDefault()
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: value
        });
    }

    onSubmitForm = (event) => {
        event.preventDefault()

        if (!this.state.terms) {
            this.setState({ errorMessage: 'Please accept the terms and conditions.' });
          } else {
            this.setState({ errorMessage: '', submittedData: { ...this.state } });
            console.log(this.state);
          }
    }

  render() {
    return (
        <div id='body'>
            <h1>Data Entry Form</h1>
            <form onSubmit={(e)=> this.onSubmitForm(e)}>
                <div className='flex-container'>
                    <div className='flex-child'>
                        <label>Email</label>
                        <br />
                        <input
                            className='textbox'
                            name='email'
                            type='text'
                            onChange={(e)=> this.onValueChanged(e)}
                            placeholder='Enter Email' />
                    </div>
                    <div className='flex-child'>
                            <label>Name</label>
                            <br />
                            <input
                                className='textbox'
                                name='name'
                                type='text'
                                onChange = {(e => this.onValueChanged(e))}
                                placeholder='Full name' />
                    </div>
                </div>
                <div>
                    <div className='margin-s'>
                        <label>Address</label>
                        <input 
                            className='textbox-long'
                            name='primaryAddress'
                            type='text'
                            onChange = {(e => this.onValueChanged(e))}
                            placeholder='1234 Main St' />
                    </div>
                    <div className='margin-s'>
                        <label>Address 2</label>
                        <input 
                            className='textbox-long'
                            name='secondaryAddress'
                            type='text'
                            onChange = {(e => this.onValueChanged(e))}
                            placeholder='Apartment, studio, or floor' />
                    </div>
                </div>
                <div>
                    <div className='flex-container'>
                        <div className='flex-child-2'>
                            <label>City</label>
                            <br />
                            <input
                            className='textbox-short'
                            name='city'
                            type='text'
                            onChange = {(e => this.onValueChanged(e))} />
                        </div>
                        <div className='flex-child-2'>
                            <label>Province</label>
                            <br />
                            <select name='province' onChange={(e) => this.onValueChanged(e)}>
                            
                            <option>Choose...</option>
                            {
                                this.provinces.map((province) => (
                                    <option key={province} value={province}>{province}</option>
                                ))
                            }
                        </select>
                        </div>
                        <div className='flex-child-2'>
                            <label>Postal Code</label>
                            <br />
                            <input
                                className='textbox-short'
                                name='postalCode'
                                type='text'
                                onChange = {(e => this.onValueChanged(e))} />
                        </div>
                    </div>
                </div>
                <div>
                    <input
                        name='terms'
                        id='termsAndCondition'
                        type='checkbox' 
                        onChange={(e) => this.onValueChanged(e)}/>
                    <label htmlFor='termsAndCondition'>Agree terms & Condition?</label>
                    {this.state.errorMessage && (
                        <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                    )}
                </div>
                <div>
                    <input 
                        className='button-green' 
                        type='submit'/>
                </div>
            </form>
            
            {this.state.submittedData && <DisplayData submittedData={this.state.submittedData} />}

       </div>
    )
  }
}
