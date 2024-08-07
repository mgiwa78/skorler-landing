import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        background: "url(images/frame_6980.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex overflow-hidden relative flex-col px-20 pt-20 pb-10 w-full min-h-[502px] max-md:px-5 max-md:max-w-full "
    >
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e3e969671e5fafbf8232725b711585fdc831ef89f96e7c7d70300fd479dc1?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
        className="object-cover absolute inset-0 size-full opacity-10"
        alt="Footer Background"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative gap-5 justify-between content-start items-start max-md:max-w-full">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa28e6a072a62a4ffe0a6f56877e6ff6c57573ec98d8640fa42ba8b12bdf5f7?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.73] w-[38px]"
              alt="Skorler Logo"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9c5c106aea4bf395943b340db4a6c6089c4f34570b9ac4a4157edfe73d99322?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
              className="object-contain shrink-0 self-stretch my-auto aspect-[4.37] w-[109px]"
              alt="Zinmanship Logo"
            />
          </div>
          <div className="mt-9 text-base leading-7 text-slate-600">
            Skorler is a cutting-edge digital platform designed to facilitate
            end-to-end supervision and collaboration on academic and
            process-related work.
            <br />
            <br />
            Skorler is a product of{" "}
            <a
              href="https://zinmanship.ca"
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zinmanship Artificial Intelligence Solutions Inc.
            </a>
            <br />
          </div>
        </div>
        <div className="flex flex-col self-start mt-4">
          <div className="self-start text-sm font-semibold tracking-wider leading-none uppercase text-slate-600">
            Links
          </div>
          <div className="mt-9 text-base font-medium leading-6 text-gray-900">
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/about"
            >
              About
            </Link>
            <br />
            <br />
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/features"
            >
              Features
            </Link>
            <br />
            <br />
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/pricing"
            >
              Pricing
            </Link>
            <br />
            <br />
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/testimonials"
            >
              Testimonial
            </Link>
          </div>
        </div>
        <div className="flex flex-col self-start mt-4">
          <div className="self-start text-sm font-semibold tracking-wider leading-none uppercase text-slate-600">
            Help
          </div>
          <div className="mt-8 text-base font-medium leading-6 text-primary">
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/support"
            >
              Customer Support
            </Link>
            <br />
            <br />
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/delivery-details"
            >
              Delivery Details
            </Link>
            <br />
            <br />
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/terms-conditions"
            >
              Terms & Conditions
            </Link>
            <br />
            <br />
            <Link
              className=" text-textColor-primary hover:text-primary"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col self-start mt-4 text-base">
          <div className="self-start text-sm font-semibold tracking-wider leading-none uppercase text-slate-600">
            Newsletter
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-3.5 py-4 mt-8 leading-loose bg-white rounded-xl text-slate-400 max-md:pr-5 focus:outline-none"
          />
          <button className="flex flex-col justify-center items-center p-4 mt-3 w-full font-medium text-center text-white bg-primary rounded-lg min-h-[55px]">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="relative shrink-0 mt-14 h-px bg-gray-300 max-md:mt-10 max-md:max-w-full" />
      <div className="relative self-center mt-10 text-sm leading-loose text-center text-gray-900">
        © Copyright 2024, All Rights Reserved by Skorler
      </div>
    </div>
  );
};

export default Footer;
