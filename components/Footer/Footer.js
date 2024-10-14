/* eslint-disable @next/next/no-img-element */

import { theme } from "@/tailwind.config";
import React from "react";
import FooterBg from "./FooterBg/FooterBg";
import Button from "../Button/Button";
import { MENULINKS } from "@/constants";
import Profiles from "../Profiles/Profiles";

const Footer = () => {
  return (
    <footer
      className="w-full relative select-none bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right, ${theme.colors.indigo.light}, ${theme.colors.indigo.dark})`,
      }}
    >
      <FooterBg />
      <div className="w-full h-full pt-32">
        <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
          <h1 className="font-medium text-3xl md:text-4xl text-center capitalize">
            Don't hesitate to learn and try
          </h1>
          <div className="text-center">
            <Profiles />
          </div>
          <div className="pt-4 text-center">
            <Button
              href={`#${MENULINKS[4].ref}`}
              classes='link'
              type='secondary'
            >
              Let&apos;s Talk
            </Button>
          </div>
          <p className="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-8">
            Developed with{" "}
            <button className="link cursor-pointer">
              <span className="block animate-bounce">❤️</span>
            </button>{" "}
            by <span className="text-white">WahabArf</span>
          </p>
        </div>
      </div>

      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt=""
        loading="eager"
        height={180}
      />
    </footer>
  );
};

export default Footer;
