import React from "react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full max-w-[1288px] flex  justify-center items-center z-40 max-md:mt-10 max-md:max-w-full"
    >
      <div className="container">
        <div className="flex gap-5 justify-center items-center max-md:flex-col px-5">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-32 w-full text-gray-900 max-md:mt-10 max-md:max-w-full">
              <SectionTitle title="ABOUT SKORLER" />
              <div className="flex flex-col mt-11 max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                  <span className="font-bold">Skorler is a cutting-edge </span>
                  <span className="font-bold text-customGreen">
                    digital platform
                  </span>
                </div>
                <div className="mt-5 text-base leading-7 max-md:max-w-full  font-manrope">
                  designed to facilitate end-to-end supervision and
                  collaboration on academic and process-related work. Our
                  mission is to transform the status quo of academic and
                  professional collaborations through innovative technology.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/672f8e794d5b954bb84053fcdffe36a1c8d1ac536b226593aa3d39dfd6a189b8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
              className="object-contain grow w-full aspect-[0.86] max-md:mt-8 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
