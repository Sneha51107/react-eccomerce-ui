import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Blog from './components/Pages/Blogs';
import About from './components/Pages/About';

function App() {

  const [cart, setcart] = useState(

  JSON.parse(localStorage.getItem("cart")) || []

);
useEffect(() => {

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

}, [cart]);
  const [pop, setpop] = useState(false);
  const [showcart, setshowcart] = useState(false);

  const [search, setsearch] = useState("");



  // REMOVE ITEM

  const removeitem = (id) => {

    setcart(
      cart.filter((item) => item.id !== id)
    );

  };

  // ADD TO CART

  const addtocart = (products) => {

    const existingProduct = cart.find(
      (item) => item.id === products.id
    );

    // IF PRODUCT ALREADY EXISTS

    if (existingProduct) {

      const updatedCart = cart.map((item) =>

        item.id === products.id

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item

      );

      setcart(updatedCart);

    }

    // NEW PRODUCT

    else {

      setcart([
        ...cart,
        {
          ...products,
          quantity: 1
        }
      ]);

    }

    // POPUP

    setpop(true);

    setTimeout(() => {

      setpop(false);

    }, 3000);

  };

  // INCREASE QUANTITY

  const increaseQuantity = (id) => {

    const updatedCart = cart.map((item) =>

      item.id === id

        ? {
            ...item,
            quantity: item.quantity + 1
          }

        : item

    );

    setcart(updatedCart);

  };

  // DECREASE QUANTITY

  const decreaseQuantity = (id) => {

    const updatedCart = cart.map((item) =>

      item.id === id

        ? {
            ...item,
            quantity: item.quantity - 1
          }

        : item

    ).filter((item) => item.quantity > 0);

    setcart(updatedCart);

  };

  return (

    <div
     
    >

      {/* HEADER */}

      <Header
        cartCount={cart.length}
        setshowcart={setshowcart}

        search={search}
        setsearch={setsearch}

        
      />

      {/* HOME */}

      <section id='Home'>

        <Home  />

      </section>

      {/* SHOP */}

      <section id='Shop'>

        <Shop
          addtocart={addtocart}
          search={search}
        
        />

      </section>

      {/* ABOUT */}

      <section id='About'>

        <About  />

      </section>

      {/* BLOG */}

      <section id='Blog'>

        <Blog  />

      </section>

      {/* POPUP */}

      {pop && (

        <div
  className="
    fixed top-5 right-5
    bg-white
    shadow-xl
    border
    rounded-xl
    px-5 py-4
    flex items-center gap-4
    z-50
  "
>

          <p className="font-semibold">
            Item added to cart
          </p>

          <button
            onClick={() => setshowcart(true)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
          >
            Go to Cart
          </button>

        </div>

      )}

      {/* CART SIDEBAR */}

      {showcart && (

       <div
  className="
    fixed top-0 right-0 h-full w-[350px]
    bg-white
    shadow-2xl
    z-50
    p-5
    overflow-y-auto
  "
>

          {/* TOP */}

          <div className="flex justify-between items-center border-b pb-3">

            <h1 className="text-2xl font-bold">
              My Cart
            </h1>

            <button
              onClick={() => setshowcart(false)}
              className="text-2xl cursor-pointer"
            >
              ✕
            </button>

          </div>

          {/* CART ITEMS */}

          <div className="mt-5 space-y-4">

            {cart.map((item, index) => (

              <div
                key={index}
                className={`
                  flex items-center gap-4 border p-3 rounded-xl

                  
                `}
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />

                {/* INFO */}

                <div className="flex-1">

                  <h2 className="font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-red-500 font-bold">
                    ${item.price}
                  </p>
                  <div  className='gap-3'>
                  <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 text-black px-2 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 text-black px-2 rounded"
                    >
                      +
                    </button>
                    </div>
                  {/* QUANTITY */}

                  

                </div>

                {/* REMOVE */}

                <button
                  onClick={() => removeitem(item.id)}
                  className="text-2xl cursor-pointer text-red-500"
                >
                  ✕
                </button>

              </div>

            ))}

          </div>

          {/* TOTAL */}

          <div className="mt-6 border-t pt-4">

            <div className="flex justify-between text-lg font-bold">

              <span>Total</span>

              <span>

                $

                {cart.reduce(

                  (total, item) =>

                    total + item.price * item.quantity,

                  0

                )}

              </span>

            </div>

            {/* BUTTON */}

            <button className="w-full mt-5 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition">

              Place Order

            </button>

          </div>

        </div>

      )}

      {/* FOOTER */}

      <Footer />

    </div>

  );

}

export default App;