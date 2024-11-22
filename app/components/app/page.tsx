import React from "react";
import mobile from "../../assets/Mobile app.png";
import plyStore from "../../assets/playstore.png";
import appSore from "../../assets/appStore.png";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App() {
  return (
    <section className="container lg:h-[calc(100vh-4rem)] h-auto w-full max-w-6xl px-6 py-12">
      {/* Responsive Flexbox */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1
            className={`text-2xl ${poppins.className}`}
            style={{ fontWeight: 900 }}
          >
            DOWNLOAD APP & <br />
            GET THE VOUCHER!
          </h1>
          <p className={`${poppins.className} text-gray-600`}>
            Get 30% off for your first transaction using <br />
            the Rondovision mobile app now.
          </p>
          {/* App Store Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <Image src={plyStore} alt="Play Store" className="w-[120px]" />
            <Image src={appSore} alt="App Store" className="w-[120px]" />
          </div>
        </div>

        {/* Mobile App Image */}
        <div className="flex justify-center">
          <Image
            src={mobile}
            alt="Mobile App"
            className="w-[300px] h-auto md:w-[400px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
