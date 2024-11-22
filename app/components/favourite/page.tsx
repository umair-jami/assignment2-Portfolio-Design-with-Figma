import { Poppins } from "next/font/google";
import React from "react";
import fav1 from "../../assets/fav1.png";
import fav2 from "../../assets/fav2.png";
import arrow from "../../assets/Arrow 1.png";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FAVOURITE() {
  return (
    <section
      id="fav"
      className="container lg:h-[calc(100vh-4rem)] h-auto w-full max-w-6xl px-6 py-12"
    >
      {/* Section Title */}
      <div>
        <h1
          className="text-2xl"
          style={{ fontWeight: 900, fontFamily: "Poppins, sans-serif" }}
        >
          Young’s Favourite
        </h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* First Item */}
        <div className="flex flex-col items-center">
          <Image
            src={fav1}
            alt="arrival1"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-between items-center mt-4 w-full">
            <div>
              <h2
                className="text-lg"
                style={{ fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
              >
                Trending on Instagram
              </h2>
              <p className="text-gray-500">Explore Now</p>
            </div>
            <div>
              <Image src={arrow} alt="arrow" className="w-6" />
            </div>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-center">
          <Image
            src={fav2}
            alt="arrival2"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-between items-center mt-4 w-full">
            <div>
              <h2
                className="text-lg"
                style={{ fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
              >
                All Under $40
              </h2>
              <p className="text-gray-500">Explore Now</p>
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
