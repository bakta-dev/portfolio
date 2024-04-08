import React from 'react';

function Modal({ imageUrl, altText, onClose }) {
  return (
    <div className="modal" style={{ textDecoration: 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt={altText} style={{ width: '70%', maxWidth: '700px' }}/>
      </div>
    </div>
  );
}

export default Modal;


