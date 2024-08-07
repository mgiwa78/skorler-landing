import React from "react";
import SectionTitle from "./SectionTitle";

const Testimonials: React.FC = () => {
  return (
    <div className="lg:py-24 py-10 px-5 bg-surface-light justify-center items-center flex flex-col">
      <SectionTitle title="FEEDBACK" />
      <div className="flex relative z-40 flex-col mt-10 mb-10 lg:mb-32 w-full text-center text-gray-900 max-w-[765px]">
        <div className="text-6xl font-bold leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Trusted by Leading <span className="text-sky-500">Academic </span>
          and <span className="text-emerald-400">Professional</span> Teams
        </div>
        <div className="self-center mt-3 text-base leading-7 max-md:max-w-full">
          Join the teams who rely on Skorler to provide world-class
          collaboration and project management for their academic and
          professional endeavors.
        </div>
      </div>
      <div className="relative flex z-10 flex-col px-20 mb-16 pb-0 mt-0 w-full font-semibold text-center max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex z-10  flex-wrap gap-5 justify-center w-full items-center max-md:max-w-full">
          <div className="flex relative overflow-hidden justify-between flex-col items-center self-stretch px-12 py-11 my-auto rounded-2xl bg-surface-light border-borderColor-light border-[1px] min-w-[240px] min-h-[434px] w-[413px] max-md:px-5">
            <div className="self-start text-2xl leading-8 text-gray-900">
              &quot;Skorler has transformed the way I manage my research
              projects. It's intuitive and incredibly effective.
            </div>
            <img
              className=" absolute top-[173px] right-[12px]"
              src="/icons/_.svg"
              alt=""
            />
            <div className=" flex gap-[13px] flex-col justify-center items-center self-center mt-5 text-lg  leading-7 text-slate-600 w-[311px]">
              <img className="   " src="/icons/ellipse_18.svg" alt="" />
              Dr. Jane Smith, University of Academic Excellence
            </div>
          </div>
          <div className="flex relative overflow-hidden justify-between flex-col items-center self-stretch px-12 py-11 my-auto rounded-2xl bg-surface-light border-borderColor-light border-[1px] min-w-[240px] min-h-[434px] w-[413px] max-md:px-5">
            <div className="self-stretch text-2xl leading-8 text-gray-900">
              &quot;The annotation tools have made collaboration with my peers
              seamless and productive.
            </div>
            <img
              className=" absolute top-[173px] right-[12px]"
              src="/icons/_.svg"
              alt=""
            />
            <div className=" flex gap-[13px] flex-col justify-center items-center   mt-5 text-lg leading-7  text-slate-600">
              <img className=" " src="/icons/ellipse_19.svg" alt="" />
              John Doe, Graduate Student
            </div>
          </div>
          <div className="flex relative overflow-hidden justify-between flex-col items-center self-stretch px-12 py-11 my-auto rounded-2xl bg-surface-light border-borderColor-light border-[1px]  min-w-[240px]  min-h-[434px] w-[413px] max-md:px-5">
            <div className="self-stretch text-2xl leading-8 text-gray-900">
              &quot;Skorler’s project management features have streamlined our
              editorial process, making it easier to meet our publication
              deadlines.
            </div>
            <img
              className=" absolute top-[173px] right-[12px]"
              src="/icons/_.svg"
              alt=""
            />
            <div className=" flex gap-[13px] justify-center items-center  mt-5 text-lg leading-7 flex-col text-slate-600 w-[274px]">
              <img className="" src="/icons/ellipse_20.svg" alt="" />
              Emily Davis, Senior Editor, Academic Journal
            </div>
          </div>
        </div>
        <div className=" w-full max-w-[1200px] px-10 flex-wrap absolute flex justify-center items-center z-[-100] gap-1 -bottom-32">
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />

          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />

          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />

          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />

          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />

          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />

          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />

          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-center w-20 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[80.33px]" />
          <div className="flex shrink-0 self-center rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px]" />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
          <div className="flex z-10 shrink-0 self-end mb-0 rounded-2xl bg-surface-lighter border-dashed border-[1px] h-[74.793px] w-[125.004px] " />
        </div>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  quote,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="text-gray-600">"{quote}"</p>
    <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
    <p className="text-gray-600">{title}</p>
  </div>
);

export default Testimonials;
