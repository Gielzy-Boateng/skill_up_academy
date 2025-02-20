"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import MobileNavBar from "./mobile-navbar";

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`hidden transition-all duration-700 max-w-[900px] mx-auto mt-3 rounded-full fixed left-0 right-0 top-0 z-50 text-white bg-black py-2 px-6 lg:flex items-center justify-between  ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Link
          href="/"
          className="flex items-center transition-all duration-300 hover:text-[#FF6D00]"
        >
          <Image
            src={"/assets/home/header-logo.png"}
            width={50}
            height={50}
            alt="Header"
          />
          <h1>SkillUp Academy</h1>
        </Link>
        <div className="scroll-smooth flex items-center  gap-x-5">
          {navLinks.map((nav, i) => (
            <Link
              key={i}
              href={nav.link}
              className="transition-all duration-300 hover:text-[#FF6D00]"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <Link
          href="/dashboard"
          className="flex transition-all duration-300 hover:bg-white font-semibold hover:text-black  items-center gap-x-3 border-2 py-2 px-3 rounded-full border-white "
        >
          <div className="w-3 h-3 bg-[#FF5722] hover:bg-black rounded-full" />
          <p>Dashboard</p>
        </Link>
      </nav>
      <MobileNavBar />
    </>
  );
}

// const scrollToSection = () => {
//   document
//     .getElementById(nav.link.replace("#", ""))
//     .scrollIntoView({ behavior: "smooth" });
// };
