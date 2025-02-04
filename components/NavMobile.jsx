"use client";
import React, { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  return <div className={`${containerStyles}`}>NavMobile</div>;
};

export default NavMobile;
