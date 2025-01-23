import React from 'react';

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm} className="max-w-lg mx-auto p-8 border border-gray-300 rounded-md bg-gray-50 space-y-6 mt-12">
            <div className="flex flex-col space-y-2">
                <label htmlFor="fullname" className="text-base font-bold text-gray-700">Nombre completo</label>
                <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput} className="p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-base font-bold text-gray-700">Teléfono</label>
                <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeInput} className="p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-base font-bold text-gray-700">Email</label>
                <input type="email" value={dataForm.email} name="email" onChange={handleChangeInput} className="p-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="text-base font-bold text-gray-700 bg-gray-200 p-2 rounded hover:bg-gray-300 mt-4">Enviar</button>
        </form>


    );
};

export default FormCheckout;
