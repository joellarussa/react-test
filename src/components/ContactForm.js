import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name) newErrors.name = true;
        if (!email) newErrors.email = true;
        if (!message) newErrors.message = true;
        if (!enquiry) newErrors.enquiry = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Handle form submission
            console.log('Form submitted:', { name, email, enquiry, message });
        }
    };

    return (
        <section id="contact" style={{ backgroundColor: '#6A0DAD', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact me</h2>
            <form style={{ width: '40%', margin: '0 auto', textAlign: 'left' }} onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors({ ...errors, name: false }); }}
                        style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            borderRadius: '8px', 
                            border: errors.name ? '1px solid red' : '1px solid LightGray', 
                            backgroundColor: '#6A0DAD', 
                            color: 'white',
                            boxSizing: 'border-box',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }} 
                    />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: false }); }}
                        style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            borderRadius: '8px', 
                            border: errors.email ? '1px solid red' : '1px solid LightGray', 
                            backgroundColor: '#6A0DAD', 
                            color: 'white',
                            boxSizing: 'border-box',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }} 
                    />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <select 
                        name="enquiry" 
                        value={enquiry}
                        onChange={(e) => { setEnquiry(e.target.value); setErrors({ ...errors, enquiry: false }); }}
                        style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            borderRadius: '8px', 
                            border: errors.enquiry ? '1px solid red' : '1px solid LightGray', 
                            backgroundColor: '#6A0DAD', 
                            color: 'white',
                            boxSizing: 'border-box',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }}>
                        <option value="" disabled>Select an option</option>
                        <option value="Freelance project proposal">Freelance project proposal</option>
                        <option value="Job opportunity">Job opportunity</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <textarea 
                        name="message" 
                        placeholder="Your message" 
                        rows="5" 
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); setErrors({ ...errors, message: false }); }}
                        style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            borderRadius: '8px', 
                            border: errors.message ? '1px solid red' : '1px solid LightGray', 
                            backgroundColor: '#6A0DAD', 
                            color: 'white',
                            boxSizing: 'border-box',
                            transition: 'box-shadow 0.3s ease-in-out'
                        }} 
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    style={{ 
                        padding: '1rem 2rem', 
                        borderRadius: '8px', 
                        border: 'none', 
                        backgroundColor: '#9D4EDD', 
                        color: 'white',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        width: '100%'
                    }}>
                    Submit
                </button>
            </form>
            <style>
                {`
                    input:focus, textarea:focus, select:focus {
                        outline: none;
                        border-color: #FFD700;
                        box-shadow: 0 0 10px #A020F0;
                    }
                    ::placeholder {
                        color: white;
                        opacity: 1; /* Firefox */
                    }
                    input:invalid, textarea:invalid, select:invalid {
                        border-color: red;
                    }
                `}
            </style>
        </section>
    );
};

export default ContactForm;
