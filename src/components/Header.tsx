// components/Header.js

import Link from "next/link";

const Header = () => {
  return (
    <div
      style={{
        background: "rgba(250, 252, 254, 0.80)",
        backdropFilter: "blur(10px)",
      }}
      className="flex overflow-hidden relative flex-wrap gap-5 justify-between items-center self-stretch px-20 py-3.5 w-full bg-slate-50 bg-opacity-80 max-md:px-5 max-md:max-w-full"
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
      <div className="flex flex-wrap items-center self-stretch my-auto text-base font-medium tracking-wide leading-none text-gray-900 max-md:max-w-full">
        <div className=" text-textColor-primary  font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto">
          About Skorler
        </div>
        <div className=" text-textColor-primary  font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto whitespace-nowrap">
          Features
        </div>
        <div className=" text-textColor-primary  font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto whitespace-nowrap">
          Pricing
        </div>
        <div className=" text-textColor-primary  font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto whitespace-nowrap">
          Feedback
        </div>
        <div className=" text-textColor-primary  font-manrope hover:text-primary cursor-pointer gap-2 self-stretch px-4 py-2 my-auto whitespace-nowrap">
          Contact
        </div>
      </div>
      <div className="gap-2 rounded-lg self-stretch px-4 py-4 my-auto text-base font-medium tracking-widest leading-none text-white bg-primary min-h-[48px]">
        Book a Demo
      </div>
    </div>
  );
};

export default Header;
