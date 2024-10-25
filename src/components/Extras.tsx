import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1729863430362-2f5be6c73412?q=80&w=3026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1729863430334-2be19ae97aa6?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1729863430360-b3196001f158?q=80&w=3232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1729863430342-ff917e0cb90b?q=80&w=3299&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Extras: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="bg-black">
      <div className="flex flex-col">
        {images.map((imageUrl, index) => (
          <img 
            key={index}
            src={imageUrl}
            alt={`QR Solutions Feature ${index + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Extras;