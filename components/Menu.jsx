"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

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
    <section className="relative bg-menu py-12 xl:py-24" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-[570px] text-center xl:text-right"
        >
          <h2 className="mb-3">Favorite Menu</h2>
          <Link
            href="/"
            className="mb-16 flex items-center justify-center text-green xl:justify-end"
          >
            View all
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="group mx-auto max-w-[270px] bg-white shadow-primary xl:mx-0"
              >
                {/* img */}
                <div className="overflow-hidden">
                  <Image
                    src={item.img}
                    width={270}
                    height={270}
                    alt="menu"
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                {/* title & price */}
                <div className="px-[30px] pb-[28px] pt-[20px]">
                  <Link href="/">
                    <h3 className="mb-[14px] font-poppins text-black">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="font-poppins text-xl font-semibold text-orange">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
