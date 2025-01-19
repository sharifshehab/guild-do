import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const totalPrice = 50;
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe(); 
    const elements = useElements();

    useEffect(() => {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret); 
                })
                .catch(error => console.error('Error fetching client secret:', error));
    }, [axiosSecure, totalPrice]); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe.js has not loaded yet.");
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            console.error("CardElement is not available.");
            return;
        }

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card,         
            });

            if (error) {
                console.error('Error creating payment method:', error);
                setError(error.message); 
            } else {
                setError(''); 
            }
        } catch (err) {
            console.error('Unexpected error:', err);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card, 
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous', 
                },
            },
        });

        // Handle errors during the payment confirmation process.
        if (confirmError) {
            console.log('Error confirming payment:', confirmError);
            setError(confirmError.message); 
        } else {
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id); 

                const payment = {
                    email: user.email, 
                    price: totalPrice, 
                    transactionId: paymentIntent.id, 
                    date: new Date(), 
                };

                // Send the payment details to the backend to process and store them in the database.
                const res = await axiosSecure.post('/payments', payment);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: 'Thank you for your payment',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/add-post'); 
                }
            }
            setError(''); 
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px', 
                                color: '#fff',
                                '::placeholder': {
                                    color: '#fff', 
                                },
                            },
                            invalid: {
                                color: '#9e2146', 
                            },
                        },
                    }}
                />
                <button
                    className="btn rounded-none bg-yellow-400 my-4 disabled:bg-yellow-300"
                    type="submit"
                    disabled={!stripe || !clientSecret} 
                >
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-yellow-400">Your transaction ID: {transactionId}</p>}
            </form>
        </>
    );
};

export default CheckoutForm;
