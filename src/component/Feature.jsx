import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Feature() {
  const [formData, setFormData] = useState({
    officeName: "",
    officeCode: "",
    agentName: "",
    agentWeb: "",
    streetAddress: "",
    cityStateZip: "",
    phone: "",
    fax: "",
    officeWeb: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form information has been logged to console!");
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">
            Office Information and Signature
          </h2>

          <p className="text-gray-600 leading-8 mb-8 text-center">
            Please provide your office and agent details below. Required fields are marked with an asterisk (<span className="text-red-500">*</span>).
          </p>

          {/* FORM BOX */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-3">
            {/* ROW 1: Office Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  GAMLS Member Office Name <span className="text-red-500">*</span>
                </label>
                <input type="text" name="officeName" value={formData.officeName} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  GAMLS Office Code <span className="text-red-500">*</span>
                </label>
                <input type="text" name="officeCode" value={formData.officeCode} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
            </div>

            {/* ROW 2: Agent Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">Agent Name</label>
                <input type="text" name="agentName" value={formData.agentName} onChange={handleChange} placeholder="(For individuals only)" className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm placeholder:text-xs" />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  Agent's Web address <span className="text-red-500">*</span>
                </label>
                <input type="text" name="agentWeb" value={formData.agentWeb} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
            </div>

            {/* ROW 3: Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  Office Street Address <span className="text-red-500">*</span>
                </label>
                <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  Office City, State, ZIP <span className="text-red-500">*</span>
                </label>
                <input type="text" name="cityStateZip" value={formData.cityStateZip} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
            </div>

            {/* ROW 4: Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  Office Phone <span className="text-red-500">*</span>
                </label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">Office Fax</label>
                <input type="tel" name="fax" value={formData.fax} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" />
              </div>
            </div>

            {/* ROW 5: Web & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  Office Web address <span className="text-red-500">*</span>
                </label>
                <input type="text" name="officeWeb" value={formData.officeWeb} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-sm mb-1">
                  E-mail address <span className="text-red-500">*</span>
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="border-b border-gray-300 py-1 outline-none focus:border-blue-500 text-gray-700 text-sm" required />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold w-full transition-colors"
            >
              SUBMIT INFORMATION
            </button>
          </form>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              className="rounded-2xl h-40 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
              className="rounded-2xl h-56 w-full object-cover"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
