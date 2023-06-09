import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Made by Niko 2023</p>
      <p className="icons">
        <Link href="https://www.instagram.com/nikocherkezi/" target="_blank">
          <AiFillInstagram />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
