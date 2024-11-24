"use client";
import { useState, useMemo } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  orderId: string;
  product: string;
  reason: string;
  additionalDetails: string;
}
import React from 'react'


const Return = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        orderId: '',
        product: '',
        reason: '',
        additionalDetails: '',
      });
    
      const [error, setError] = useState<string | null>(null);
    
      const isFormValid = useMemo(() => {
        const { name, email, phone, orderId, product, reason } = formData;
        return name && email && phone && orderId && product && reason;
      }, [formData]);
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null); // Clear errors on change
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!isFormValid) {
          setError('Please complete all required fields.');
          return;
        }
    
        // Simulate API submission
        console.log('Return request submitted:', formData);
    
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          orderId: '',
          product: '',
          reason: '',
          additionalDetails: '',
        });
        setError(null);
      };
    
  return (
    <div>
          <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="orderId" className="block text-sm font-semibold text-gray-600">
                    Order ID
                  </label>
                  <input
                    type="text"
                    id="orderId"
                    name="orderId"
                    value={formData.orderId}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-gray-600">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-600">
                    Reason for Return
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option value="damaged">Damaged Product</option>
                    <option value="wrong">Wrong Item Delivered</option>
                    <option value="notAsExpected">Not as Expected</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="additionalDetails"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-2 px-4 rounded text-white focus:outline-none ${
                    isFormValid
                      ? 'bg-black hover:bg-gray-800'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Return Request
                </button>
              </form>
            </div>
    </div>
  )
}

export default Return;