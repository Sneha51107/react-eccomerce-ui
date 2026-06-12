//import products from "../../data/productdata";
import { useState, useEffect } from "react";
import smartwatch2 from "../../assets/smartwatch2.png";

//export default function Shop({addtocart,search,setsearch}) {
export default function Shop({ addtocart, search }) {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {

  fetch("https://fakestoreapi.com/products")

    .then((response) => response.json())

    .then((data) => {

      const electronics = data.filter(
        (item) => item.category === "electronics"
      );

      setProducts(electronics);

      setLoading(false);

    });

}, []);
 const filteredProducts = products.filter((product) =>

    product.title
      .toLowerCase()
      .includes(search.toLowerCase())

  );
  console.log("Search Value:", search);
  return (
    <div className="mt-8 px-4 lg:px-8">
    
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Our Products
        </h1>

        <p className="text-gray-400 mt-1">
          Explore our latest products
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
          >

            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-1">

              <h2 className="font-semibold text-gray-800">
                {product.title}
              </h2>

              <p className="text-lg font-bold text-red-500">
                ${product.price}
              </p>

            </div>

            {/* Button */}
            <button onClick={() => addtocart(product)} className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
              Add to Cart
            </button>

          </div>

        ))}

      </div>

      {/* Banner Section */}
    <div className="rounded-3xl bg-green-400 mt-12 text-white grid grid-cols-1 md:grid-cols-3 items-center px-6 lg:px-12 overflow-hidden py-6">

  {/* Left */}

  <div className="text-center md:text-left space-y-3">

    <p className="font-semibold text-lg">
      30% OFF
    </p>

    <h1 className="text-4xl lg:text-5xl uppercase font-extrabold leading-tight">
      Fine Smile
    </h1>

    <p className="text-sm text-green-100">
      Exclusive winter collection available now
    </p>

  </div>

  {/* Center Image */}

  <div className="flex justify-center">

    <img
      src={smartwatch2}
      alt="watch"
      className="h-64 md:h-80 object-contain hover:scale-105 transition duration-300"
    />

  </div>

  {/* Right */}

  <div className="text-center md:text-right space-y-3">

    <p className="font-semibold text-lg">
      Air Solo Bass
    </p>

    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
      Winter Sale
    </h1>

    <p className="text-sm text-green-100">
      Get amazing discounts on premium gadgets
    </p>

    <button className="rounded-2xl px-6 py-3 bg-white text-green-500 font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">

      Shop Now

    </button>

  </div>

</div>
  
    </div>
  );
}