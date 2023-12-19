"use client";
import { Socials } from "@/constans";
import Image from "next/image";
import React, { useState } from "react";
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Drawer from "../Drawer";
import useResponsive from "../useResponsive";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [status, setStatus] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { lg } = useResponsive({ watchPoints: ["lg"] });

  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <a
          href="#about-me"
          className="flex h-auto w-auto flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="hover:animate-slowspin cursor-pointer"
          />

          <span className="ml-[10px] font-bold text-gray-300 max-md:text-base">
            SUAT YARGICI
          </span>
        </a>

        <div className="mt-5 flex hidden h-full w-[500px] flex-row items-center justify-between lg:block">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden h-auto flex-row items-center gap-x-5 text-white lg:block lg:flex">
          <Link href="https://twitter.com/Suat_yargici" target="_blank">
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <FaTwitter />
              <span className="ml-[6px] text-[15px]">Twitter</span>
            </p>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/suat-yarg%C4%B1c%C4%B1-08b955223/"
            }
            target="_blank"
          >
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <FaLinkedin />
              <span className="ml-[6px] text-[15px]">Linkedin</span>
            </p>
          </Link>
          <Link href={"https://medium.com/@yargicisuat"} target="_blank">
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <FaMedium />
              <span className="ml-[6px] text-[15px]">Medium</span>
            </p>
          </Link>
          <Link href={"https://github.com/suatyargici"} target="_blank">
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <FaGithub />
              <span className="ml-[6px] text-[15px]">Github</span>
            </p>
          </Link>
        </div>
        {!lg && (
          <RxHamburgerMenu
            className="hidden text-white cursor-pointer rounded-full max-lg:block"
            size={36}
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          />
        )}
      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerOpen} />

      </div>
  
    </div>
  );
};

export default Navbar;
