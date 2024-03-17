import Link from "next/link";
import FadeUp from "./FadeUp";
// import Bg from "./Bg"

import heroImg from "../public/img/hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <section id="Home">
          <div className=" flex flex-col items-centerpx-4 px-py-16 sm:px-6 lg:px-8 lg:py-0 mt-0 mb-15 bg-blue-50 ">
      <FadeUp>
          <div className=" flex flex-col items-centerpx-4 px-py-16 sm:px-6 lg:px-8 lg:py-0 mt-5 mb-15 bg-blue-50 ">
            
              <div className=" text-xl text-center text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-6xl lg:leading-tight xl:text-10xl xl:leading-tight dark:text-white">
              Kedar Realty: Real Estate Development Firm{" "}
              <p className=" text-startmx-8 py-5 text-xl text-center leading-normal text-bold text-orange-800 lg:text-xl xl:text-3xl dark:text-gray-300">
                Our commercial real estate solutions are tailored to fit your
                needs.
              </p>
            </div>
            <div>
              <img className="h-auto max-w-full bg-blue-100 " src="/hero.png" />
            </div>

            <div className=" items-center w-full ">
              <div className="max-w-2xl mb-8">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-6xl lg:leading-tight xl:text-10xl xl:leading-tight dark:text-white"></h1>
              </div>
            </div>
            
          </div>
        
      </FadeUp>
      </div>
    </section>
  );
}
