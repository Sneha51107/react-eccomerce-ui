import earphone from "../../assets/earphone-gTSt01f7.png"
import watch from "../../assets/watch-XuWGGfaq.png"
import macbook from "../../assets/macbook.png"
import gaming from "../../assets/gaming.png"
import vr from "../../assets/vr.png"
import speaker from "../../assets/speaker.png"
import headphonem from "../../assets/headphonem.png"
export default function Cards()
{
    return(
      <div>
       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 col-span-1 ml-8 rounded-2xl p-6 flex relative justify-between overflow-hidden items-center">
    
    <div className="text-left z-0">
      <p className="text-gray-400">Enjoy</p>
      <p className="text-white font-semibold text-lg">With</p>
      <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>

      <button className="mt-2 px-3 py-1 bg-red-500 text-white rounded-full text-sm">
        Browse
      </button>
    </div>

    <img src={earphone} className="absolute right-0 bottom-0 h-44 z-10 opacity-90" />
  </div>
           <div className="bg-yellow-400 col-span-1 rounded-2xl p-6 flex relative justify-between overflow-hidden items-center">
    
    <div className="text-left z-0">
      <p className="text-white">Enjoy</p>
      <p className="text-white font-semibold">With</p>
      <p className="text-yellow-200 text-4xl xl:text-5xl font-bold opacity-30">Watch</p>

      <button className="mt-2 px-3 py-1 bg-white text-yellow-300 rounded-full text-sm">
        Browse
      </button>
    </div>

    <img src={watch} className="absolute left-20 h-40 opacity-90 z-10"/>
  </div>
          <div className="bg-red-500 ml-8 col-span-2 rounded-2xl p-6 flex justify-between items-center">
    
    <div className="text-left z-0">
      <p className="text-white">Enjoy</p>
      <p className="text-white font-semibold">With</p>
      <p className="text-red-200 text-4xl xl:text-5xl font-bold opacity-30">Laptop</p>

      <button className="mt-2 px-3 py-1 bg-white text-red-500 rounded-full text-sm">
        Browse
      </button>
    </div>

    <img src={macbook} className=" h-40 opacity-90 z-10"/>
  </div>
      <div className="bg-gray-300 ml-8 col-span-2 rounded-2xl p-6 flex  justify-between items-center">
    
    <div className="text-left z-0">
      <p className="text-white">Enjoy</p>
      <p className="text-white font-semibold">With</p>
      <p className="text-gray-200 text-4xl xl:text-5xl font-bold opacity-50">Laptop</p>

      <button className="mt-2 px-3 py-1 bg-red-500 text-white rounded-full text-sm">
        Browse
      </button>
    </div>

    <img src={gaming} className=" h-40 opacity-90 z-10"/>
  </div>
       <div className="bg-green-600 ml-8 col-span-1 rounded-2xl p-6 flex relative justify-between overflow-hidden  items-center">
    
    <div className="text-left z-10">
      <p className="text-white">Enjoy</p>
      <p className="text-white font-semibold">With</p>
      <p className="text-green-300 text-4xl xl:text-5xl font-bold opacity-50">VR</p>

      <button className="mt-2 px-3 py-1 bg-white text-green-500 rounded-full text-sm">
        Browse
      </button>
    </div>

    <img src={vr} className="absolute h-40 opacity-90 z-0"/>
  </div>
  <div className="bg-blue-600 ml-8 col-span-1 rounded-2xl p-6 flex relative items-center">
    
    <div className="text-left z-10">
      <p className="text-white">Enjoy</p>
      <p className="text-white font-semibold">With</p>
      <p className="text-blue-300 text-4xl xl:text-5xl font-bold opacity-50">VR</p>

      <button className="mt-2 px-3 py-1 bg-white text-blue-600 rounded-full text-sm">
        Browse
      </button>
    </div>

    <img src={speaker} className="absolute h-40 opacity-90 z-0"/>
  </div>
  <div className="flex gap-3 sm:items-center ml-8">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="text-4xl text-red-500 md:text-5xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"></path></svg>
  
  <div>
    <p className="font-semibold">Free Shipping</p>
    <p className="text-sm text-gray-400">On all orders</p>
  </div>
  </div>
  <div className="flex gap-3 items-center ml-8">
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-4xl text-red-500 md:text-5xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
  <div>
    <p className="font-semibold">Safe Money</p>
    <p className="text-sm text-gray-400">30 Days Money Back</p>
  </div>
  </div>
      <div className="flex gap-3 items-center ml-8">
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-4xl text-red-500 md:text-5xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
  <div>
    <p className="font-semibold">Secrue Payment</p>
    <p className="text-sm text-gray-400">All Payment Secure</p>
  </div>
  </div>
    <div className="flex gap-3 items-center ml-8">
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-4xl text-red-500 md:text-5xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zM256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82 114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32z"></path></svg>
  <div>
    <p className="font-semibold">Online Support 24/7</p>
    <p className="text-sm text-gray-400">Technical Support 24/7</p>
  </div>
  </div>
        </div>
        <div className="rounded-2xl mt-8 ml-8 bg-red-500 text-white grid grid-cols-3 items-center ">
          <div className="">
          <p className="font-bold">30%  OFF</p>
        <p className="text-4xl uppercase font-bold">FINE SMILE</p>
        </div>
        <img src={headphonem} className=""/>
        <div>
        <p className="font-bold">Air Solo Bass</p>
        <p className="text-4xl font-bold"> Winter Sale</p>
        <button className="rounded-2xl px-2 py-1 bg-white text-red-500">Shop Now</button>
       </div>
        </div>
    </div>
    )
}