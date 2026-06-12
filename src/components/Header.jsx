import { useState } from "react";
export default function Header({cartCount , setshowcart, search, setsearch, theme, toggletheme})
{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="">
       <div className="flex items-center pb-3 gap-10 mr-5 ml-5">
  
  <h1 className="font-semibold text-blue-800 text-3xl">EShop</h1>
  <div className="lg:hidden">
  <span
    className="material-symbols-outlined cursor-pointer text-3xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    menu
  </span>
</div>
{
  menuOpen && (
    <div className="lg:hidden flex flex-col gap-4 bg-white shadow-md p-4 mt-3 rounded-lg">

      <a href="#Home">Home</a>

      <a href="#Shop">Shop</a>

      <a href="#About">About</a>

      <a href="#Blog">Blogs</a>

    </div>
  )
}
     <div className="hidden lg:block">
  <div className="text-gray-500 flex gap-20 text-md font-semibold cursor-pointer">

    <a href="#Home" className="hover:text-black">Home</a>
    <a href="#Shop" className="hover:text-black">Shop</a>
    <a href="#About" className="hover:text-black">About</a>
    <a href="#Blog" className="hover:text-black">Blogs</a>
   
  </div>
  </div>
            <div className="flex items-center justify-end gap-10 w-full text-gray-600">
            <div className="relative  ">
           <input type="text" value={search}
  onChange={(e) => {
  setsearch(e.target.value);

  document
    .getElementById("Shop")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}} className="border  border-gray-600 rounded w-full py-1"  />
           <span className="material-symbols-outlined absolute hover:cursor-pointer right-3 top-1/2 -translate-y-1/2  ">search</span>
            </div>
            <div className="relative cursor-pointer">
            <span className="material-symbols-outlined cursor-pointer" onClick={() => setshowcart(true)}
>shopping_cart</span>
             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4" >{cartCount}</span>
             </div>
          
       </div>
</div>
</div>

    )
}