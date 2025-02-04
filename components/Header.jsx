"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${active ? "bg-black-heavy py-4" : "bg-none py-8"} fixed left-0 right-0 top-0 z-50 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* logo, nav, btn */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="logo" />
          </Link>
          {/* nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          {/* btn */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile containerStyles="xl:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
