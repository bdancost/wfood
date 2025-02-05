"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIoArrowRoundForward } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const menu = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$24.00",
  },
  {
    img: "/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: "$24.00",
  },
  {
    img: "/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: "$26.00",
  },
  {
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: "$12.00",
  },
];

const Menu = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <h2>Favorite Menu</h2>
          <Link href="/">View all</Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
