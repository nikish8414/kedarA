import Link from "next/link";
import FadeUp from "./FadeUp";
import Image from "next/image";
export default function Services() {
  return (
    <section
      id="Services"
      className="flex flex-col items-centerpx-4 px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mt-20 mb-35 "
    >
      <FadeUp>
        <div className="text-center p-10">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="font-bold text-4xl mb-4">Our Services</h1>
        </div>

        {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <div href="#">
              <img
                src="/land.png"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-10 py-6 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs"></span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Land Sale and Purcchess
                </p>
                
              </div>
            </div>
          </div>
          {/* <!--   🛑 Product card 1 - Ends Here  --> */}
          

          {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <div href="#">
              <img
                src="/resolt.jpg"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-10 py-6 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs"></span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Residancial Property
                </p>
                {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    
                </div> */}
              </div>
            </div>
          </div>
          {/* <!--   🛑 Product card 2- Ends Here  --> */}

          {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <div href="#">
              <img
                src="/cons.png"
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-10 py-6 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs"></span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {""}Construction
                </p>
                
              </div>
            </div>
          </div>
          {/* <!--   🛑 Product card 3 - Ends Here  --> */}
        </section>
      </FadeUp>
    </section>
  );
}
