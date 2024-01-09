import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mb-[20px] text-white text-center text-[15px]">
      &copy; SUAT Dev {year} Inc. All rights reserved 
    </div>
  );
};

export default Footer;
