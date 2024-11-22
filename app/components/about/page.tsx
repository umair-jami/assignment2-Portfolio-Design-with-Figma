import { Poppins } from "next/font/google";
import React from "react";
import heroImg from "../../assets/hero.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function About() {
  return (
    <section className="container lg:h-[calc(100vh-4rem)] h-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col lg:flex-row justify-around items-center bg-offWhite h-full">
        {/* Text Content */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl lg:w-[150px] w-auto ${poppins.className}`}
            style={{ fontWeight: 900 }}
          >
            <span className="bg-white pr-4">LET’S</span> EXPLORE{" "}
            <span className="bg-yellow px-4">UNIQUE</span> CLOTHES.
          </h1>
          <p
            className={`mt-5 ${poppins.className}`}
            style={{ fontWeight: "300" }}
          >
            Live for Influential and Innovative fashion!
          </p>
          <div className="mt-5 flex justify-center lg:justify-start">
            <Button
              variant="outline"
              className="bg-black text-white px-6 py-2"
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src={heroImg}
            alt="hero"
            className="w-[75%] h-auto max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
