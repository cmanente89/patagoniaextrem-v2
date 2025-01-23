import React from 'react'
import { useState, useContext } from 'react'
import FormCheckout from './FormCheckout'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import db from '../../db/db.js'



const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
    });

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        };
        await uploadOrder(order)
    };

    const uploadOrder = async (newOrder) => {
        try {
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, newOrder)
            setOrderId(response.id)
        } catch (error) {
            console.log(error)

        }


    }

    return (




        <div>
            {
                orderId ? (
                    <div className="max-w-4xl mx-auto p-8 border border-gray-300 rounded-md bg-gray-50 mt-12 text-center space-y-4">
                        <h3 className="text-xl font-bold text-gray-700">Orden subida correctamente</h3>
                        <h3 className="text-2xl font-bold text-gray-800">Número de orden: {orderId}</h3>
                    </div>


                ) : (
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />

                )
            }


        </div>
    );
};

export default Checkout;
