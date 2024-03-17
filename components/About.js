import Link from "next/link";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="About">
    <br></br>
    <br></br>
    <br></br>
      <FadeUp>
      {/* <div classNameName="flex flex-col items-centerpx-4 px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mt-20 mb-10 ">
      
        <div classNameName="sm:flex items-center max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-orange-100">
          <div classNameName="sm:w-1/2 p-10">
            <div classNameName="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
          </div>
          <div classNameName="sm:w-1/2 p-5">
            <div classNameName="text">
              <span classNameName="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 classNameName="my-4 font-bold text-3xl  sm:text-4xl ">
                 <span classNameName="text-indigo-600">Our Company</span>
              </h2>
              <div classNameName="text-gray-700">
              At Kedar Realty, we are dedicated to providing exceptional real estate services tailored to meet the unique needs and preferences of our clients. With a commitment to integrity, professionalism, and personalized attention, we strive to make every real estate transaction a seamless and rewarding experience.i placeat quia, repellat tempore voluptatum.
              </div>
              <h2 classNameName="my-4 font-bold text-3xl  sm:text-4xl ">
                 <span classNameName="text-indigo-600">Our Vision:</span>
              </h2>
              <div classNameName="text-gray-700">
              Kedar Realty aims to be a leading name in the real estate industry, known for our unwavering dedication to client satisfaction, innovative solutions, and ethical business practices. We envision creating lasting relationships with our clients, built on trust, transparency, and mutual respect.

</div>
 <h2 classNameName="my-4 font-bold text-3xl  sm:text-4xl ">
                 <span classNameName="text-indigo-600">Our Mission:</span>
              </h2>
              <div classNameName="text-gray-700">
              Our mission at Kedar Realty is to exceed the expectations of our clients by delivering superior real estate services characterized by excellence, integrity, and innovation. We are committed to providing expert guidance, comprehensive market knowledge, and exceptional customer service to help our clients achieve their real estate goals.
</div>
            </div>
          </div>
        </div>
        </div> */}
        
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="font-normal text-sm leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer pb-2">About</div>
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">We are here to make great design accessible and delightfull for everyone</h2>
                    <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</div>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                </div>
            </div>
    
            <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg" alt="flag" />
                    </div>
    
                  <img className="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg" alt="note" />
    
                   <img className="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="users" />
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <div className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">Founded</div>
                    <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                </div>
                <div>
                    <div className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">50M montly enrichments</div>
                    <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                </div>
                <div className="sm:block hidden">
                    <div className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</div>
                    <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                </div>
            </div>
            <div className="sm:hidden block relative mt-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="user" />
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <div className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</div>
                    <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                </div>
            </div>
    
            <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">Our Mission</h2>
                    <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12">Our mission at Kedar Realty is to exceed the expectations of our clients by delivering superior real estate services characterized by excellence, integrity, and innovation. We are committed to providing expert guidance, comprehensive market knowledge, and exceptional customer service to help our clients achieve their real estate goals.</div>
                    <div className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</div>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                               <img className="mr-6"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg" alt="team card" />
                            </div>
                            <div className="">
                                <div className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Team</div>
                                <div className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                        </div>
    
                        {/* <!-- Board Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg" alt="board card" />
                            </div>
                            <div className="">
                                <div className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Board</div>
                                <div className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                        </div>
    
                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg" alt="press card" />
                            </div>
                            <div className="">
                                <div className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">Press</div>
                                <div className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
      </FadeUp>
    </section>
  );
}
