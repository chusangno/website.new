import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Feature() {
  const [type, setType] = useState("Buy a real estate");
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Find Your Dream Properties
          </h2>

          <p className="text-gray-600 leading-8 mb-10">
            Our office of real estate professionals offers full service...
          </p>

          {/* SEARCH BOX */}
          <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-wrap items-center gap-6">
            {/* TYPE */}
            <div className="flex flex-col min-w-[150px]">
              <label className="font-semibold text-sm">I want to</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="text-gray-500 text-sm outline-none"
              >
                <option>Buy a real estate</option>
              </select>
            </div>

            {/* LOCATION */}
            <div className="flex flex-col min-w-[150px]">
              <label className="font-semibold text-sm">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-gray-500 text-sm outline-none"
              >
                <option value="">Location</option>
                <option>Georia</option>
                <option>Atlanta</option>
                <option>Lake Oconee area</option>s
                <option></option>
              </select>
            </div>

            {/* BEDS */}
            <div className="flex flex-col min-w-[120px]">
              <label className="font-semibold text-sm">Beds</label>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="text-gray-500 text-sm outline-none"
              >
                <option value="">Select beds</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>

            {/* BATHS */}
           

            {/* BUTTON */}
            <button
              onClick={() => {
                console.log({ type, location, beds, baths });
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold ml-auto"
            >
              EXPLORE NOW
            </button>
          </div>
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
