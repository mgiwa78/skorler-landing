import React from "react";
import SectionTitle from "./SectionTitle";
import DesignFlare2 from "./DesignFlare2";
import DesignFlare3 from "./DesignFlare3";

const Features: React.FC = () => {
  return (
    <div
      id="features"
      className="flex justify-center px-5 items-center flex-col relative  w-full "
    >
      <div className=" absolute bottom-2/4 -right-40 z-30">
        {" "}
        <DesignFlare2 />
      </div>
      <div className=" absolute  bottom-2/3 right-36 z-30">
        <DesignFlare3 />
      </div>
      <div className=" absolute  bottom-20 left-36 z-30">
        <DesignFlare3 />
      </div>
      <img
        className=" absolute hidden lg:block top-[-60px] right-[443px]"
        src="/icons/vector_9.svg"
        alt=""
      />
      <SectionTitle class={"mt-32"} title="FEATURE HIGHLIGHTS" />
      <div className="flex flex-col  mt-10  text-center text-gray-900 w-full max-w-[765px]">
        <div className="text-6xl font-bold leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Innovative Features for Seamless{" "}
          <span className="text-primary">Collaboration</span>
        </div>
        <div className="self-center mt-3 text-base font-manrope leading-loose max-md:max-w-full">
          Explore the key functionalities that make Skorler the ultimate
          platform for research and process management.
        </div>
      </div>
      <div className="mt-16 z-40 justify-center items-center  max-w-screen-xl max-md:mt-10  w-full  max-md:max-w-full">
        <div className="flex gap-5 justify-center items-center max-md:flex-col">
          <div className="flex flex-col  max-w-6/12 w-full max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow px-14 py-6 text-center rounded-2xl shadow-[7px_3px_15px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/550ec0bd523540860a78157382e71f3786fee429596db2afd43307bdb544e907?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                className="object-contain self-end max-w-full rounded-xl aspect-[1.87] w-[457px]"
              />
              <div className="flex flex-col mt-12 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
                <div className="text-xl text-gray-900 max-md:max-w-full">
                  Collaboration Tools
                </div>
                <div className=" font-manrope self-center mt-2 text-base text-slate-600 max-md:max-w-full">
                  Skorler provides a comprehensive suite of collaboration tools
                  designed to streamline communication and document management
                  among students, professors, and academic professionals.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-w-6/12 w-full max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow px-16 pt-7 pb-11 text-center rounded-2xl shadow-[7px_3px_15px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f473544e60de97f86a234b614b7886d1823ee0db59deaf8efb8005210e01832?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                className="object-contain self-center max-w-full rounded-xl aspect-[1.87] w-[457px]"
              />
              <div className="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="text-xl text-gray-900 max-md:max-w-full">
                  Supervision & Review
                </div>
                <div className=" font-manrope self-center mt-2 text-base text-slate-600 max-md:max-w-full">
                  Our platform offers robust tools for supervisors and reviewers
                  to provide feedback, manage revisions, and track progress.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  z-40  flex-wrap gap-5 justify-center w-full items-center mt-6 text-center">
        <div className="flex overflow-hidden flex-col self-stretch pt-5 pb-9 my-auto rounded-2xl min-w-[240px] shadow-[7px_3px_15px_rgba(0,0,0,0.05)] w-full max-w-[413px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ac3d439-629a-409c-861a-683192049543?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
            className="object-contain self-end max-w-full rounded-l-xl aspect-[1.44] bg-slate-100 w-[367px]"
          />
          <div className="flex flex-col mt-6 px-5">
            <div className="text-xl text-gray-900">
              Integration with Other Tools
            </div>
            <div className="self-center text-[18px] font-manrope mt-2 text-base text-slate-600">
              Skorler integrates seamlessly with popular academic and
              productivity tools to enhance your workflow and increase
              efficiency.
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col self-stretch pt-5 pb-9 my-auto rounded-2xl min-w-[240px] shadow-[7px_3px_15px_rgba(0,0,0,0.05)] w-full max-w-[413px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8489940-021c-4344-8c08-456a74b5087f?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
            className="object-contain self-end max-w-full rounded-l-xl aspect-[1.44] bg-slate-100 w-[366px]"
          />
          <div className="flex flex-col mt-6 px-5">
            <div className="text-xl text-gray-900">Annotate Tool</div>
            <div className="self-center   font-manrope mt-2 text-base text-slate-600">
              Skorler integrates with academic and productivity tools, enhancing
              your workflow and increasing efficiency.
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col self-stretch pt-5 pb-9 my-auto rounded-2xl min-w-[240px] shadow-[7px_3px_15px_rgba(0,0,0,0.05)] w-full max-w-[413px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/888c02af-2c98-4c41-a73a-73db674e4a41?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
            className="object-contain self-end max-w-full rounded-l-xl aspect-[1.44] bg-slate-100 w-[366px]"
          />
          <div className="flex flex-col mt-6 px-5">
            <div className="text-xl text-gray-900">
              Track Progress with Status Updates
            </div>
            <div className="self-center font-manrope mt-2 text-base text-slate-600">
              Workflow to track progress with real-time updates. Drag and drop
              tasks through stages, from backlog to submission.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
  </div>
);

export default Features;
