import { Button } from "@/components/ui/button";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container lg:h-[calc(100vh-4rem)] h-auto w-full max-w-6xl px-6 py-12"
    >
      <div className="bg-yellow h-full w-full flex flex-col justify-center items-center text-center relative px-4 py-8 gap-4">
        {/* Heading */}
        <h1
          className="text-lg sm:text-2xl text-white font-extrabold"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          JOIN SHOPPING COMMUNITY TO <br />{" "}
          <span>GET MONTHLY PROMO</span>
        </h1>

        {/* Description */}
        <p
          className="text-white text-sm sm:text-base font-light"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Type your email down below and be young wild generation
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            type="text"
            className="w-full sm:w-[70%] py-2 px-4 rounded-lg border border-gray-300"
            placeholder="Add Your Email Here"
          />
          <Button
            size="sm"
            className="bg-black text-white w-full sm:w-auto sm:px-8 py-2"
          >
            SEND
          </Button>
        </div>
      </div>
    </section>
  );
}
