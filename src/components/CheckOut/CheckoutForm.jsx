import React from 'react';

const CheckoutForm = ({
  name,
  setName,
  adress,
  setAdress,
  phone,
  setPhone,
  email,
  setEmail,
}) => {
  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      adress,
      phone,
      email,
    };

  };

  return (
    <div>
      <form onSubmit={handleConfirm} className='Form'>
        <>
        <div className='mb-4'>
          <label className='Label'>
            Nombre
            <input
              className=' form-control Input'
              type='text'
              name='name' 
              id='name'   
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='Label'>
            Dirección
            <input
              className='form-control Input'
              type='text'
              name='adress' 
              id='adress'  
              value={adress}
              onChange={({ target }) => setAdress(target.value)}
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='Label'>
            Teléfono
            <input
              className='form-control Input'
              type='text'
              name='phone' 
              id='phone'  
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='Label'>
            Email
            <input
              className='form-control Input'
              type='text'
              name='email'
              id='email'  
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
        </div>
        </>
      </form>
    </div>
  );
};

export default CheckoutForm;
