import { Poppins } from "next/font/google";
import React from "react";
import arrival1 from "../../assets/arrival1.png";
import arrival2 from "../../assets/arrival2.png";
import arrival3 from "../../assets/arrival3.png";
import arrow from "../../assets/Arrow 1.png";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Fashion() {
  return (
    <section
      id="fashion"
      className="container lg:h-[calc(100vh-4rem)] h-auto w-full max-w-6xl px-6 py-12"
    >
      {/* Title */}
      <div className="mb-8 text-center">
        <h1
          className="text-2xl md:text-4xl font-bold"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          NEW ARRIVALS
        </h1>
      </div>

      {/* Products Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] md:w-[30%] h-auto mt-4">
          <Image
            src={arrival1}
            alt="arrival1"
            className="h-[85%] w-full object-cover rounded-lg"
          />
          <div className="flex justify-between items-center mt-4">
            <div>
              <h2
                className="text-lg font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Hoodies & Sweatshirt
              </h2>
              <p className="text-slate text-sm">Explore Now</p>
            </div>
            <div>
              <Image src={arrow} alt="arrow" className="w-6" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] md:w-[30%] h-auto mt-4">
          <Image
            src={arrival2}
            alt="arrival2"
            className="h-[85%] w-full object-cover rounded-lg"
          />
          <div className="flex justify-between items-center mt-4">
            <div>
              <h2
                className="text-lg font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Coats & Parkas
              </h2>
              <p className="text-slate text-sm">Explore Now</p>
            </div>
            <div>
              <Image src={arrow} alt="arrow" className="w-6" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[48%] md:w-[30%] h-auto mt-4">
          <Image
            src={arrival3}
            alt="arrival3"
            className="h-[85%] w-full object-cover rounded-lg"
          />
          <div className="flex justify-between items-center mt-4">
            <div>
              <h2
                className="text-lg font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Tees & T-Shirt
              </h2>
              <p className="text-slate text-sm">Explore Now</p>
            </div>
            <div>
              <Image src={arrow} alt="arrow" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
