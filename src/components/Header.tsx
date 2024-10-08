"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{
        background: "rgba(250, 252, 254, 0.80)",
        backdropFilter: "blur(10px)",
      }}
      className="flex z-50 relative flex-wrap gap-5 justify-between items-center self-stretch py-3.5 w-full bg-slate-50 bg-opacity-80 px-20 max-md:px-5"
    >
      <div className="flex gap-2 items-center self-stretch">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dda4e5e1366ee92c7d59dd4233f7447b22da115d8f89dfd70428051c7435f28?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.73] w-[38px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/adabfb7f6ebac64ef8b16a11d2744ad2ec547d7cbdbc6048f4cebf8ecac6f9fa?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
          className="object-contain shrink-0 self-stretch my-auto aspect-[4.37] w-[109px]"
        />
      </div>
      <div
        className="absolute right-[20px] top-1/2 transform -translate-y-1/2 max-md:flex items-center cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <div className="text-textColor-primary font-manrope text-base font-medium">
          ☰
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-[70vw] h-screen bg-white z-[100] flex flex-col items-center justify-center transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={toggleMenu}
        >
          ✕
        </div>
        <div className="flex flex-col items-center gap-6">
          <Link
            href={"#about"}
            className="text-textColor-primary font-manrope text-base font-medium"
            onClick={toggleMenu}
          >
            About Skorler
          </Link>
          <Link
            href={"#features"}
            onClick={toggleMenu}
            className="text-textColor-primary font-manrope text-base font-medium"
          >
            Features
          </Link>
          <Link
            href={"#pricing"}
            onClick={toggleMenu}
            className="text-textColor-primary font-manrope text-base font-medium"
          >
            Pricing
          </Link>
          <Link
            href={"#feeback"}
            onClick={toggleMenu}
            className="text-textColor-primary font-manrope text-base font-medium"
          >
            Feedback
          </Link>
          <Link
            href={"#contact"}
            onClick={toggleMenu}
            className="text-textColor-primary font-manrope text-base font-medium"
          >
            Contact
          </Link>
          <Link
            href={"#demo"}
            onClick={toggleMenu}
            className="gap-2 rounded-lg cursor-pointer self-stretch px-4 py-4  my-auto text-base font-medium tracking-widest leading-none text-white bg-primary min-h-[48px]"
          >
            Book a Demo
          </Link>
        </div>
      </div>
      <div className="hidden md:flex flex-wrap items-center self-stretch my-auto text-base font-medium tracking-wide leading-none text-gray-900">
        <Link
          href={"#about"}
          className="text-textColor-primary font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto"
        >
          About Skorler
        </Link>
        <Link
          href={"#features"}
          className="text-textColor-primary font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto"
        >
          Features
        </Link>
        <Link
          href={"#pricing"}
          className="text-textColor-primary font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto"
        >
          Pricing
        </Link>
        <Link
          href={"#feedback"}
          className="text-textColor-primary font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto"
        >
          Feedback
        </Link>
        <Link
          href={"#contact"}
          className="text-textColor-primary font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto"
        >
          Contact
        </Link>
      </div>
      <Link
        href={"#demo"}
        className="gap-2 rounded-lg cursor-pointer self-stretch px-4 py-4 hidden lg:flex my-auto text-base font-medium tracking-widest leading-none text-white bg-primary min-h-[48px]"
      >
        Book a Demo
      </Link>
    </div>
  );
};

export default Header;
