"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 items-center gap-[74px] p-8 md:p-12 xl:grid-cols-2 xl:p-0"
      id="about"
    >
      {/* text */}
      <div className="xl:pl-[135px]">
        <h1 className="mb-9">Let's Talk About W'Food</h1>
        <p>
          Mauris nam et ipsum ipsum in. Risus nullam in sit mi est justo at
          fringilla. Consequat ac fringilla quis enim, sit ipsum. Laoreet eget
          metus morbi convallis gravida elementum facilisis. Neque enim quis
          fusce amet. Pellentesque netus vel eu{" "}
        </p>
        <p>
          posuere ultrices facilisi. Senectus velit lobortis velit arcu varius
          lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna
          scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim
          enim amet porttitor. Volutpat ac tellus volutpat eget volutpat orci
          enim, ut a. Turpis adipiscing eleifend dignissim viverra euismod
          ultrices.
        </p>
        <Button>Read More</Button>
      </div>
      {/* img */}
      <div>
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt="about"
          className="hidden xl:flex"
        />
      </div>
    </section>
  );
};

export default About;
