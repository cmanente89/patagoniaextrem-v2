import React from 'react';

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">Nombre completo</label>
            <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput} />
            <label htmlFor="">Teléfono</label>
            <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeInput} />
            <label htmlFor="">Email</label>
            <input type="email" value={dataForm.email} name="email" onChange={handleChangeInput} />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormCheckout;
