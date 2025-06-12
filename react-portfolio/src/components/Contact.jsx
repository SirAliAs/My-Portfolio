import React, { useState } from 'react';
import { database } from '../firebase/config'; // Import database instance
import { ref, push, set } from 'firebase/database'; // Firebase DB functions
import './Contact.css'; // For specific Contact section styles

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    try {
      // Create a reference to the 'form-submissions' path in Realtime Database
      const submissionsRef = ref(database, 'form-submissions');
      // Push new data, generating a unique key
      const newSubmissionRef = push(submissionsRef);
      await set(newSubmissionRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(), // Optional: add a timestamp
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5s
    } catch (err) {
      console.error('Firebase submission error:', err);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section-title'>Contact</h2>
      <div className='contact_container bd-grid'>
        <form onSubmit={handleSubmit} className='contact_form' name='contactReactForm'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            className='contact_input'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='contact_input'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message' // Changed from 'text' to 'message' for clarity
            id='msgContent'
            cols='0'
            rows='7' // Reduced rows slightly from 10
            placeholder='Your Message' // Added placeholder
            className='contact_input'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Note: Original reCAPTCHA is not included in this version */}

          <input
            id='submitBtn'
            type='submit'
            value='Send'
            className='contact_button button' // Uses global .button style
          />
        </form>
        {isSubmitted && (
          <div id='modalMsg' className='contact_message success'>
            Thank You, I'll be in touch within the next 24 hours!
          </div>
        )}
        {error && (
          <div id='errorMsg' className='contact_message error'>
            {error}
          </div>
        )}
      </div>
    </section>
  );
}
