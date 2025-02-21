"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { dashboard } from "@/constants";

import { navLinks } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNavBar() {
  const [display, setDisplay] = useState(false);
  const menuRef = useRef(null);

  const pathname = usePathname();

  function handleDisplay() {
    setDisplay(true);
  }

  function handleClose() {
    setDisplay(false);
  }

  const router = useRouter();

  function getIntouch() {
    router.push("/dashboard");
    setDisplay(false);
  }

  function goToHome() {
    router.push("/");
    setDisplay(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDisplay(false); // Close the menu
      }
    };

    const handleScroll = () => {
      setDisplay(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setDisplay]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="px-3 z-50 lg:hidden">
      <section
        className={` ${
          scrolled
            ? pathname.startsWith("/dashboard")
              ? "bg-black"
              : "bg-orange-500"
            : ""
        } flex transition-all duration-300 z-50 ${
          pathname.startsWith("/dashboard")
            ? "items-center justify-between py-2"
            : "items-center justify-between"
        }  px-3 py-3 fixed top-0 left-0 right-0`}
      >
        <div>
          <div
            className={`${
              pathname === "/"
                ? "hidden"
                : "flex items-center space-x-5  max-w-[200px]"
            } `}
          >
            {dashboard.map((board, i) => (
              <Link
                key={i}
                href={board.link}
                className={`${
                  pathname === board.link ? "bg-[#60A5FA] px-2 rounded-lg" : ""
                } flex flex-col items-center`}
              >
                <Image src={board.icon} width={40} height={40} alt="Icons" />
                <p
                  className={`${
                    scrolled ? "text-white" : "text-black"
                  } text-[12px]`}
                >
                  {board.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`${
            pathname.startsWith("/dashboard") ? "hidden" : "block"
          } py-4`}
        >
          <Link href="/">
            <Image
              src="/assets/home/logo.jpg"
              alt="brandlogo"
              width={80}
              height={80}
              className="rounded-full hidden"
              priority
            />
          </Link>
        </div>
        <div className="">
          <button onClick={handleDisplay} className="font-bold">
            <MenuIcon
              size={40}
              fontWeight="bold"
              color={scrolled ? "white" : "black"}
            />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {display && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white shadow-lg z-50 fixed top-0 right-0 left-0 md:hidden w-full rounded-3xl p-5"
          >
            <div className="flex items-center justify-between mb-10">
              <button href="/" onClick={goToHome}>
                <Image
                  src="/assets/home/logo.jpg"
                  alt="brandLogo"
                  width={100}
                  height={100}
                  className="rounded-full"
                  priority
                />
              </button>
              <button onClick={handleClose} className="">
                <XIcon color="black" size={45} />
              </button>
            </div>
            <div className="flex flex-col  items-start   justify-start px-4 ">
              <ul className="flex flex-col items-start gap-y-5 text-black w-full font-semibold">
                {navLinks.map((nav, i) => {
                  function handleNav() {
                    const linkPaths =
                      pathname === "/" ? `#${nav.link}` : `/#${nav.link}`;
                    router.push(linkPaths);
                    // setDisplay(false);
                  }

                  return (
                    <motion.li
                      animate={{}}
                      // whileHover={{
                      //   borderBottomColor: "#2F9AFF",
                      // }}
                      transition={{ duration: 0.2 }}
                      className="list-none flex hover:bg-[#FF7A00] hover:text-white hover:py-2 hover:px-4 rounded-full w-full pb-2 text-[18px]"
                      key={i}
                      onClick={handleNav}
                    >
                      <button className="flex border-[#2F9AFF] hover:text-[#2F9AFF] ">
                        {nav.name}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            <div
              className={`flex items-center justify-center center ${
                pathname.startsWith("/dashboard")
                  ? "bg-[#1E3A8A]"
                  : "bg-[#FF7A00]"
              }  hover:bg-black hover:text-white transition duration-300 rounded-full text-white py-2 mt-5`}
            >
              <button className="flex" onClick={getIntouch}>
                Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
