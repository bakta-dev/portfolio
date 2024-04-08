import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {

  const [name,  setName]= useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = 'service_cmps0ws';
    const templateId = 'template_n30lm3u';
    const publicKey = 'wpLheRrRRsgidYkZ1';

    const templateParams = {
      from_name: name,
      from_email:email,
      to_name: 'Bakta-co',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email", response);
        setName('');
        setEmail('');
        setMessage('');
        alert('E-mail envoyé avec succès !');
      }, (error) => {
        console.error(error.text);
        alert('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
      });
  };

  return (
    <div className='contact'>
      
      <h2>Me contacter</h2>
    <form onSubmit={sendEmail} className='emailForm' required>
      <input 
      type="text"
      placeholder='Name'
      value={name}
      onChange={(e)=> setName(e.target.value)} required/>
      
      <input 
      type="email"
      placeholder='Email'
      value={email}
      onChange={(e)=> setEmail(e.target.value)} required/>
     
      <textarea
      cols="30"
      rows="10"
      value={message}
      onChange={(e)=> setMessage(e.target.value)}></textarea>

      <button type="submit" className='contact_btn'>Envoyer</button>
    </form>
    <p></p>
    </div>
  )
}

export default ContactForm;