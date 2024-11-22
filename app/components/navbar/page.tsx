"use client";
import React, { useState } from "react";
import vector from "../../assets/Vector.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="container flex justify-between items-center h-[5rem] sticky top-0 z-30 bg-white px-4 sm:px-6 md:px-12 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src={vector} alt="icon" className="w-8 h-8" />
        <h2
          className={`text-xl md:text-2xl ${poppins.className}`}
          style={{ fontWeight: 900 }}
        >
          Fashion
        </h2>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        <Link
          href="/"
          className={`text-dark ${poppins.className}`}
          style={{ fontWeight: 300 }}
        >
          HOME
        </Link>
        <Link
          href="#fashion"
          className={`text-dark ${poppins.className}`}
          style={{ fontWeight: 300 }}
        >
          FASHION
        </Link>
        <Link
          href="#offers"
          className={`text-dark ${poppins.className}`}
          style={{ fontWeight: 300 }}
        >
          OFFERS
        </Link>
        <Link
          href="#fav"
          className={`text-dark ${poppins.className}`}
          style={{ fontWeight: 400 }}
        >
          FAVOURITE
        </Link>
        <Button
          variant="outline"
          className="bg-black text-white w-24"
          onClick={() => router.push("#contact")}
        >
          SIGN UP
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-black text-2xl md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[5rem] left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`text-dark ${poppins.className}`}
            style={{ fontWeight: 300 }}
          >
            HOME
          </Link>
          <Link
            href="#fashion"
            onClick={() => setMenuOpen(false)}
            className={`text-dark ${poppins.className}`}
            style={{ fontWeight: 300 }}
          >
            FASHION
          </Link>
          <Link
            href="#offers"
            onClick={() => setMenuOpen(false)}
            className={`text-dark ${poppins.className}`}
            style={{ fontWeight: 300 }}
          >
            OFFERS
          </Link>
          <Link
            href="#fav"
            onClick={() => setMenuOpen(false)}
            className={`text-dark ${poppins.className}`}
            style={{ fontWeight: 400 }}
          >
            FAVOURITE
          </Link>
          <Button
            variant="outline"
            className="bg-black text-white w-24"
            onClick={() => {
              setMenuOpen(false);
              router.push("#contact");
            }}
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </nav>
  );
}
