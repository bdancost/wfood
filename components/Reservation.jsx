"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="xl:my-32 xl:flex xl:h-[1020px] xl:flex-col xl:items-end xl:justify-end xl:bg-reservation xl:bg-no-repeat"
      id="reservation"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="min-h-[518px] w-full bg-black p-8 md:p-14 xl:max-w-[868px] xl:p-16"
      >
        <h2 className="mb-9 capitalize text-white">Book a table</h2>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
};

export default Reservation;
