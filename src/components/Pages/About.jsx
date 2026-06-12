export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="about">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
        <p className="text-gray-500 mt-2">
          Learn more about our store and what makes us special.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Welcome to <span className="text-red-500">EShop</span>
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            EShop is your one-stop destination for premium gadgets and
            electronics including headphones, smartwatches, laptops,
            speakers, and accessories.
          </p>

          <p className="text-gray-600 leading-7 mb-4">
            Our mission is to provide high-quality products at affordable
            prices with fast delivery, secure payments, and excellent
            customer support.
          </p>

          <p className="text-gray-600 leading-7 mb-6">
            We focus on delivering a smooth shopping experience through a
            clean and responsive interface built with modern web
            technologies.
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition">
            Explore Products
          </button>
        </div>

        {/* Right Side - Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-red-500">10K+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-red-500">500+</h3>
            <p className="text-gray-600 mt-2">Premium Products</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-red-500">24/7</h3>
            <p className="text-gray-600 mt-2">Customer Support</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-red-500">100%</h3>
            <p className="text-gray-600 mt-2">Secure Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}