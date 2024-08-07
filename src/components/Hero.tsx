import React from "react";
import Header from "./Header";

const Hero: React.FC = () => {
  return (
    <>
      <div className="px-5 flex overflow-hidden relative flex-col items-center self-stretch w-full py-4 max-md:max-w-full">
        <div className=" flex justify-center items-center content-center align-middle flex-col ">
          <div className=" mt-32 text-7xl font-bold text-center  w-full text-gray-900 max:w-[947px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            The collaboration <span className="text-primary">platform </span>
            that transforms{" "}
            <span className="text-customGreen">
              academic and professional
            </span>{" "}
            work.
          </div>
          <div className="relative mt-8 text-base font-medium  font-manrope leading-7 text-center text-gray-900 w-full max-w-[748px] max-md:max-w-full">
            Streamline your research and project workflows into one intuitive
            platform your team will love, connecting students, professors, and
            professionals seamlessly—efficiently and effectively.
          </div>
          <div className="relative gap-2 cursor-pointer  rounded-lg px-4 py-4 mt-12 text-base font-semibold tracking-widest leading-none text-white bg-primary  min-h-[48px] max-md:mt-10 w-fit">
            Book a Demo
          </div>
          {/* <div className=" bg-white  flex overflow-hidden relative z-10 flex-col justify-center items-center px-20 py-64 mt-24 mb-0 w-full max-w-[1064px] min-h-[616px] rounded-[32px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51b536f6fedc7e2b666eb0d07cf2e13981981989a2e990f034cb44165665e705?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/816148d7419cc894c05490281a1ecd9c42a9b0877f93b54ad62292b0a34fc0c6?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
            className="object-contain mb-0 aspect-square w-[94px] max-md:mb-2.5"
          />
        </div> */}
        </div>
        <img
          loading="lazy"
          src="/images/Frame 17.jpg"
          className="object-cover  inset-0 size-full max-w-[1064px] rounded-lg mt-[91px]"
        />
      </div>
    </>
  );
};

export default Hero;
