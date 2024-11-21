"use client";
import React, { useRef, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  streetAddress: string;
  city: string;
  postalCode: string;
}

const CheckoutForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    streetAddress: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState<{ [K in keyof FormData]?: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const tempErrors: { [K in keyof FormData]?: string } = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.phone) tempErrors.phone = "Phone Number is required";
    if (!formData.country) tempErrors.country = "Country/Region is required";
    if (!formData.streetAddress) tempErrors.streetAddress = "Street Address is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.postalCode) tempErrors.postalCode = "Postal Code is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && form.current) {


      // Simulate form submission
      setTimeout(() => {
        console.log("Form Submitted!");
        setSuccessMessage("Your information has been submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          streetAddress: "",
          city: "",
          postalCode: "",
        });
        setErrors({});
        setTimeout(() => setSuccessMessage(null), 3000);

      }, 2000);
    }
  };

  return (
    <div className="border rounded-md shadow-md p-3">
      <form  onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="font-medium text-xs">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full">
            <label className="font-medium text-xs">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Email</label>
          <input
            type="email"
            name="email"
            placeholder="test@gmail.com"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+0215864545"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Country/Region</label>
          <input
            type="text"
            name="country"
            placeholder="Country/Region"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && (
            <p className="text-red-500 text-xs">{errors.country}</p>
          )}
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.streetAddress}
            onChange={handleChange}
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-xs">{errors.streetAddress}</p>
          )}
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && (
            <p className="text-red-500 text-xs">{errors.city}</p>
          )}
        </div>

        <div className="w-full mt-8 mb-10">
          <label className="font-medium text-xs">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && (
            <p className="text-red-500 text-xs">{errors.postalCode}</p>
          )}
        </div>

        {successMessage && (
          <p className="text-green-500 text-sm mt-5">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
