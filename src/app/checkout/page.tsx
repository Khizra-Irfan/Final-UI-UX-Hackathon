"use client"; // Mark this as a client component

import React from "react";
import { useCart } from "@/app/context/cartContext"; // Import the custom hook

const CheckoutPage = () => {
  const { items } = useCart(); // Use the client-side cart context

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {items.length > 0 ? (
        <ul>
          {items.map((item: any, index: number) => (
            <li key={index} className="mb-4">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-700">£{item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CheckoutPage;
