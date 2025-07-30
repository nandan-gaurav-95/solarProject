import React from 'react';
import WaIcon from './assets/whatsapp-icon.png';
const WhatsAppIcon = () => {

  // const ownerPhoneNumber = '9657089541';
  const ownerPhoneNumber = '7843069930';
  const message = 'Hello, I have a question.';

  const whatsappUrl = `https://wa.me/${ownerPhoneNumber}/?text=${encodeURIComponent(message)}`;


  return (
<div>
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <img src={WaIcon}  className='img-fluid' alt="WhatsApp Icon" />
    </a>
  </div>
  );
};

export default WhatsAppIcon;