import { Poppins } from "next/font/google";
import React from "react";
import fb from "../../assets/fbIcon.png";
import insta from "../../assets/instaIcon.png";
import x from "../../assets/Xicon.png";
import linkd from "../../assets/linkdlin.png";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Footer() {
  return (
    <section className="container h-auto w-full max-w-6xl px-6 py-12 bg-black">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div>
          <h1
            className={`text-2xl text-white mb-5 ${poppins.className}`}
            style={{ fontWeight: 900 }}
          >
            FASHION
          </h1>
          <p className={`text-slate ${poppins.className} text-sm`}>
            Complete your style with awesome <br /> clothes from us.
          </p>
          <div className="flex gap-4 mt-5">
            <Image src={fb} alt="Facebook Icon" className="w-[25px] h-[25px]" />
            <Image
              src={insta}
              alt="Instagram Icon"
              className="w-[25px] h-[25px]"
            />
            <Image src={x} alt="Twitter Icon" className="w-[25px] h-[25px]" />
            <Image
              src={linkd}
              alt="LinkedIn Icon"
              className="w-[25px] h-[25px]"
            />
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Links */}
          <div>
            <h1
              className={`text-lg text-white ${poppins.className}`}
              style={{ fontWeight: 300 }}
            >
              Company
            </h1>
            {["About", "Contact Us", "Support", "Careers"].map((item, index) => (
              <p
                key={index}
                className={`text-sm mt-3 text-offWhite ${poppins.className}`}
                style={{ fontWeight: 200 }}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h1
              className={`text-lg text-white ${poppins.className}`}
              style={{ fontWeight: 300 }}
            >
              Quick Link
            </h1>
            {["Share Location", "Orders Tracking", "Size Guide", "FAQs"].map(
              (item, index) => (
                <p
                  key={index}
                  className={`text-sm mt-3 text-offWhite ${poppins.className}`}
                  style={{ fontWeight: 200 }}
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* Legal Links */}
          <div>
            <h1
              className={`text-lg text-white ${poppins.className}`}
              style={{ fontWeight: 300 }}
            >
              Legal
            </h1>
            {["Terms & Conditions", "Privacy Policy"].map((item, index) => (
              <p
                key={index}
                className={`text-sm mt-3 text-offWhite ${poppins.className}`}
                style={{ fontWeight: 200 }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
