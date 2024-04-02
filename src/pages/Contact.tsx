// pages/Contact.tsx

import React, { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to submit form data (e.g., send email)
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact__heading">Contact Us</h2>
      <Form onSubmit={handleSubmit} className="contact__form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="form-textarea" rows={4} required />
        </div>
        <Button type="submit" className="contact__submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Contact;
