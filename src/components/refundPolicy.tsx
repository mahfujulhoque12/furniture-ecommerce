"use client";

import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Image from "next/image";
import refundPolicy from "/public/policy/refund.png";
import { useState, useMemo } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  orderId: string;
  purchaseDate: string;
  refundAmount: string; // Store refundAmount as string
  totalAmount: string; // Store totalAmount as string
  reason: string;
}

const RefundPolicy: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    purchaseDate: "",
    refundAmount: "",
    totalAmount: "",
    reason: "",
  });

  const [refundCalculated, setRefundCalculated] = useState<string | null>(null); // Store refund amount separately as string
  const [error, setError] = useState<string | null>(null);

  // Function to update form fields and handle refund calculation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      // Only trigger refund calculation when necessary fields change
      if (updatedData.totalAmount && updatedData.purchaseDate) {
        calculateRefund(updatedData);
      }
      return updatedData;
    });
    setError(null); // Clear any previous errors
  };

  const isFormValid = useMemo(() => {
    const { name, email, phone, orderId, purchaseDate, totalAmount, reason } = formData;
    return name && email && phone && orderId && purchaseDate && totalAmount && reason;
  }, [formData]);

  // Updated calculateRefund function
  const calculateRefund = (data: FormData) => {
    const { purchaseDate, totalAmount } = data;

    if (!purchaseDate || !totalAmount) {
      setError("Please fill out all required fields.");
      return;
    }

    // Parse totalAmount as a number for calculation
    const totalAmountNum = parseFloat(totalAmount);
    if (isNaN(totalAmountNum)) {
      setError("Please enter a valid number for the total amount.");
      return;
    }

    const purchaseDateObj = new Date(purchaseDate);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - purchaseDateObj.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24)); // Calculate days difference

    // Default to full refund
    let refundAmount = totalAmountNum;

    // Apply 70% refund if more than 3 days have passed
    if (daysDifference > 3) {
      refundAmount = totalAmountNum * 0.7; 
    }

    // Set the refund amount to be displayed as a string
    setRefundCalculated(refundAmount.toFixed(2)); // Ensure it's a string
    console.log("Refund Amount Calculated:", refundAmount.toFixed(2)); // Debugging log
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    calculateRefund(formData);
    console.log("Refund Request Submitted:", formData);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      orderId: "",
      purchaseDate: "",
      refundAmount: "",
      totalAmount: "",
      reason: "",
    });
    setError(null);
  };

  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <div>
          <SubHeading className="text-center font-bold text-gray-700 uppercase">Refund Policy</SubHeading>

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
            {/* Form Section */}
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
                  <label htmlFor="purchaseDate" className="block text-sm font-semibold text-gray-600">
                    Purchase Date
                  </label>
                  <input
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="totalAmount" className="block text-sm font-semibold text-gray-600">
                    Total Amount Paid ($)
                  </label>
                  <input
                    type="number"
                    id="totalAmount"
                    name="totalAmount"
                    value={formData.totalAmount}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-600">
                    Reason for Refund
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
                {error && <p className="text-red-500">{error}</p>}
                  <div>
                    <p className="text-sm font-semibold text-gray-500">If you refund the products after 3 days. you get only 70% of the amount </p>
                  </div>
                <div className="mt-2 text-green-600 font-semibold">
                  Refund Amount: ${refundCalculated || formData.totalAmount}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-2 px-4 rounded text-white focus:outline-none ${
                    isFormValid
                      ? "bg-black hover:bg-gray-800"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Submit Refund Request
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="mt-8">
              <Image
                src={refundPolicy}
                width={700}
                height={500}
                alt="refund"
                className="h-[300px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RefundPolicy;
