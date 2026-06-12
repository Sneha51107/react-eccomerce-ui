import blog from "../../assets/blog.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import download1 from "../../assets/download1.png"
import download2 from "../../assets/download2.png"
import download3 from "../../assets/download3.png"
import download4 from "../../assets/download4.png"
export default function Blog()
{
    return(
        <div className="mt-8">
                    <h1 className="text-3xl font-bold">Recent News</h1>
                    <p className="text-gray-400">Explore our blogs</p>
                    <div className=" grid grid-cols-1 lg:grid-cols-3 mt-4 gap-6">
                           <div className="">
                            <img src={blog} alt="" className="rounded-2xl w-full h-60" />
                             <div className="mt-2 text-left">
                            <p className="text-xs text-gray-400 ">Jan 20, 2024 by Dishav</p>
                            <p className="text-sm font-bold">How to choose perfect smartwatch</p>
                            <p className="text-xs text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil?</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={blog2} alt="" className="rounded-2xl w-full h-60" />
                             <div className="mt-2 text-left">
                            <p className="text-xs text-gray-400 ">Jan 20, 2024 by Dishav</p>
                            <p className="text-sm font-bold">How to choose perfect smartwatch</p>
                            <p className="text-xs text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil?</p>
                            </div>
                        </div>
                         <div className="">
                            <img src={blog3} alt="" className="rounded-2xl w-full h-60" />
                             <div className="mt-2 text-left">
                            <p className="text-xs text-gray-400 ">Jan 20, 2024 by Dishav</p>
                            <p className="text-sm font-bold">How to choose perfect smartwatch</p>
                            <p className="text-xs text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil?</p>
                            </div>
                        </div>
                    </div>
                
                          <div className="grid grid-cols-5 mt-8 gap-3 place-items-center ">
                            <img src={download1} alt=""  className="w-20 text-gray-500"/>
                             <img src={download2} alt="" />
                              <img src={download3} alt="" />
                               <img src={download4} alt="" />
                                <img src={download1} alt="" />
                            </div>   
                </div>
        
    )
}