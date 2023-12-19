// import Logo from "@/public/icons/logo.svg";
"use-clinet";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Drawer = ({
  isOpen = false,
  setIsOpen,
}: {
  isOpen?: boolean;
  setIsOpen: (open: boolean) => void;
}): JSX.Element => {
  return (
    <div
      className={`fixed top-0 z-50 flex h-screen w-full max-w-sm flex-col gap-y-10 bg-white px-6 py-1 shadow-lg ${
        isOpen ? "right-0" : "-right-full"
      } transition-all duration-1000`}
    >
      <div className="flex w-full items-center justify-between">
        <div>
          <Link href="/">{/* <Logo className="h-12 w-28" /> */}</Link>
        </div>
        <AiOutlineClose
          size={25}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="text-textBlack2 flex  w-full flex-col gap-y-3">
        <Link
          href="/#about-me"
          passHref
          className="hover:text-textBlack2/30"
          onClick={() => setIsOpen(false)}
        >
          About Me
        </Link>
        <Link
          href="/#skills"
          passHref
          className="hover:text-textBlack2/30"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          passHref
          className="hover:text-textBlack2/30"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>

        <div className="h-auto flex-row items-center gap-x-5">
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
      </div>
      <div className="flex w-full items-start"></div>
    </div>
  );
};

export default Drawer;
