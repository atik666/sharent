import React, { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const cars = [
    {
      id: 1,
      name: "Tesla Model S",
      pricePerDay: "$99",
      location: "San Francisco",
      image: "https://placehold.co/600x400?text=Tesla+Model+S",
      description: "Luxury electric sedan with autopilot features.",
    },
    {
      id: 2,
      name: "Toyota Corolla",
      pricePerDay: "$45",
      location: "Los Angeles",
      image: " https://placehold.co/600x400?text=Toyota+Corolla",
      description: "Compact and fuel-efficient car perfect for city driving.",
    },
    {
      id: 3,
      name: "Jeep Wrangler",
      pricePerDay: "$60",
      location: "Denver",
      image: " https://placehold.co/600x400?text=Jeep+Wrangler",
      description: "Off-road capable SUV ideal for adventure seekers.",
    },
    {
      id: 4,
      name: "BMW 3 Series",
      pricePerDay: "$75",
      location: "New York",
      image: " https://placehold.co/600x400?text=BMW+3+Series",
      description: "Sporty luxury sedan with premium features.",
    },
    {
      id: 5,
      name: "Honda CR-V",
      pricePerDay: "$55",
      location: "Chicago",
      image: " https://placehold.co/600x400?text=Honda+CRV",
      description: "Spacious SUV great for families and road trips.",
    },
    {
      id: 6,
      name: "Ford F-150",
      pricePerDay: "$85",
      location: "Austin",
      image: " https://placehold.co/600x400?text=Ford+F150",
      description: "Powerful pickup truck suitable for heavy hauling.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo + Site Name */}
          <div className="flex items-center space-x-2">
            {/* Replace src with your actual logo URL or local path */}
            <img
              src="/assets/logo.png" // ← Replace this with your own logo URL or use /logo.png if using local file
              alt="Sharent Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <h1 className="text-2xl font-bold text-red-600">Sharent</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-red-500 transition">
              Home
            </a>
            <a href="#" className="hover:text-red-500 transition">
              How It Works
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Rent Out Your Car
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Support
            </a>
          </nav>

          {/* Sign Up & Sign In Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowSignUpModal(true)}
              className="bg-white border border-red-600 text-red-600 px-5 py-2 rounded-full hover:bg-red-50 transition"
            >
              Sign Up
            </button>
            <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Rent Cars Locally. Share Yours Too.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Discover a wide range of cars available near you or list your own to earn extra cash.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-3xl mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search by location or car name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-3 rounded-full focus:outline-none text-gray-800"
            />
            <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Search
            </button>
          </div>
          <button
            onClick={() => setShowSignUpModal(true)}
            className="mt-6 inline-block bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Sign Up & Start Renting
          </button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Popular Rentals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars
              .filter((car) =>
                car.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => {
                    setSelectedCar(car);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="text-xl font-semibold mb-2">{car.name}</h4>
                    <p className="text-gray-600 mb-3">{car.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{car.pricePerDay}</span>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Sharent?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-red-600 text-4xl mb-4">🚗</div>
              <h4 className="text-xl font-semibold mb-2">Wide Selection</h4>
              <p className="text-gray-600">
                Choose from thousands of vehicles listed by local owners.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-red-600 text-4xl mb-4">💸</div>
              <h4 className="text-xl font-semibold mb-2">Earn Money</h4>
              <p className="text-gray-600">
                Rent out your car when it's not in use and make extra income.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-red-600 text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-semibold mb-2">Secure & Trusted</h4>
              <p className="text-gray-600">
                Verified hosts and renters. Safe transactions guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Want to Earn Extra Income?
          </h3>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            List your car on Sharent and start earning money. It's free to join,
            and we help connect you with travelers in your area.
          </p>
          <button className="bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Rent Out Your Car
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="assets/logo.png" // ← Replace this with your own logo URL or use /logo.png if using local file
                  alt="Sharent Logo"
                  className="w-8 h-8"
                />
                <h4 className="text-lg font-semibold">Sharent</h4>
              </div>
              <p className="text-gray-400">
                The easiest way to rent and share cars locally.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact</li>
                <li>FAQs</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Sharent. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal for Car Details */}
      {isModalOpen && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedCar.name} - {selectedCar.pricePerDay}/day
              </h3>
              <p className="text-gray-600 mb-4">{selectedCar.location}</p>
              <p className="mb-6">{selectedCar.description}</p>
              <button className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">Create an Account</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <a href="#" className="text-red-600 underline">
                Log in
              </a>
            </p>
            <button
              onClick={() => setShowSignUpModal(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 block ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}