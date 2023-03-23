import React, { useState } from 'react';
import './Shipment.css';

const Shipment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')


    const handleNameBlur = event => {
        setName(event.target.value);
    };
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    };
    const handleCreateUser = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="Name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Your Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;