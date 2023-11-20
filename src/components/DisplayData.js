import React, { Component } from 'react'

export default class DisplayData extends Component {
  render() {

    const { submittedData } = this.props

    return (
        <div>
            <hr />
            <div className='flex-container display-body'>
                <div className='flex-child data-h'>
                    <p>Email: </p>
                    <p>Full Name: </p>
                    <p>Address: </p>
                    <p>City: </p>
                    <p>Province: </p>
                    <p>Postal Code: </p>
                </div>
                <div className='flex-child data-v'>
                    <p>{submittedData.email}</p>
                    <p>{submittedData.name}</p>
                    {
                        submittedData.secondaryAddress ? (
                            <p>{submittedData.primaryAddress}, {submittedData.secondaryAddress}</p>
                        ) : (
                            <p>{submittedData.primaryAddress}</p>
                        )
                    }
                    <p>{submittedData.city}</p>
                    <p>{submittedData.province}</p>
                    <p>{submittedData.postalCode}</p>
                </div>
            </div>
        </div>
    )
  }
}
