export default function Footer() {
  return (
    <div className=" mt-10">

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div>
          <h1 className="text-2xl font-bold text-red-500 uppercase">
            Eshop
          </h1>

          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            Made with 💖 by Sneha
          </p>

          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition">
            Visit YouTube
          </button>
        </div>


        <div className="grid grid-cols-2 gap-10">

          <div>
            <h2 className="font-semibold mb-3">Important Links</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
            </ul>
          </div>

        </div>

        <div className="mr-40">
          <h2 className="font-semibold mb-3">Address</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer">📍 Noida, Uttar Pradesh</li>
              <li className="hover:text-black cursor-pointer">📞 +91 1234567890</li>
               
            </ul>
          <div >
              <span className="cursor-pointer hover:text-red-500">📸</span>
              <span className="cursor-pointer hover:text-blue-500">📘</span>
              <span className="cursor-pointer hover:text-blue-700">💼</span>
            </div>

           
          </div>
        </div>


      <div className="text-center text-sm text-gray-500 py-4 ">
        © 2026 Eshop. All rights reserved.
      </div>

    </div>
  );
}