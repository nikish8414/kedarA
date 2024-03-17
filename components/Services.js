import Link from "next/link";
import FadeUp from "./FadeUp";
import Image from "next/image";
export default function Services() {
  return (
    <section
      id="Services"
      className="flex flex-col items-centerpx-4 px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mt-15 mb-35 "
    >
      <FadeUp>
        <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4">Our Services</h1>
          
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9"></h2>
            <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
              Residential Sales and Rentals: Whether you're buying, selling, or
              renting a home, our dedicated team will guide you through every
              step of the process, ensuring a smooth and stress-free experience.
            </div>
            <br></br>
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9"></h2>
            <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
              Commercial Real Estate: From retail spaces to office buildings, we
              have the expertise to help you find the perfect commercial
              property for your business needs.
            </div>
            <br></br>
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9"></h2>
            <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            Investment Properties: Looking to grow your investment portfolio? We offer expert advice and guidance to help you identify lucrative investment opportunities and maximize your returns.
            </div>
            
            <br></br>
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9"></h2>
            <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            Property Management: Let us handle the day-to-day management of your properties, from tenant screening and rent collection to maintenance and repairs, so you can enjoy passive income without the hassle. </div>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="lg:block hidden w-full"
              src="/civi.jpg"
              alt="civi"
            />
           
          </div>
        </div>

        {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-20 mb-35 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
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
