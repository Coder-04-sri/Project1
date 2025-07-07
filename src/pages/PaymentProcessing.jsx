import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentProcessingPage = () => {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState('processing'); 

  useEffect(() => {
   
    const processPayment = async () => {
      try {
       
        await new Promise((res) => setTimeout(res, 2000));

        setPaymentStatus('success');
      } catch (error) {
        setPaymentStatus('failed');
      }
    };

    processPayment();
  }, []);

  useEffect(() => {
    if (paymentStatus === 'success') {
      
      const timer = setTimeout(() => {
        navigate('/items');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [paymentStatus, navigate]);

  if (paymentStatus === 'processing') {
    return (
      <div className="text-center mt-20 text-xl">
        Processing your payment, please wait...
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="text-center mt-20 text-red-600">
        Payment failed. Please try again.
      </div>
    );
  }


  return (
    <div className="text-center mt-20 p-8 max-w-md mx-auto bg-green-50 rounded-lg shadow-lg animate-fade-in-up">
      <div className="text-green-600 text-6xl mb-4 animate-bounce">✓</div>
      <h2 className="text-3xl font-extrabold text-green-700 mb-2">
        Payment Successful!
      </h2>
      <p className="text-gray-700 mb-1">Redirecting to the home page...</p>
      <p className="text-green-800 font-semibold mt-4 text-lg animate-pulse">
        Your order was successfully placed.
      </p>
    </div>
  );
};

export default PaymentProcessingPage;
