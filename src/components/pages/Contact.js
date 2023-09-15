import React, { useState } from 'react';
import '../../App.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your email sending logic here using the formData state.
    // For demonstration purposes, let's just log the form data to the console.
    console.log(formData);
  };

  return (
    <div className='contact'>
   
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='form-inputs'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-input'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            className='form-input'
            placeholder='Enter a description'
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Contact
        </button>
      </form>
    </div>
  );
}
