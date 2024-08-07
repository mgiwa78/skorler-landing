import React from "react";
import SectionTitle from "./SectionTitle";

const Pricing: React.FC = () => {
  return (
    <div
      style={{
        background: "url(/images/frame_18.png)",
      }}
      className="flex overflow-hidden  relative flex-col self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex px-5 z-0 flex-col py-24 justify-center bg-[#F4F9FF] items-center pt-24 w-full  max-md:max-w-full">
        <div className="flex flex-col max-w-full text-center text-gray-900 w-[1024px]">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex items-start self-center text-base font-medium bg-blend-multiply">
              <SectionTitle title="Pricing plans" />
              {/* <SectionTitle title="FEATURE HIGHLIGHTS" /> */}
            </div>
            <div className="mt-4 text-6xl font-bold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
              Choose the <span className="text-customGreen">Perfect Plan</span>{" "}
              for Your Needs
            </div>
          </div>
          <div className="self-center mt-6 text-xl max-md:max-w-full">
            And start transforming your academic and professional collaborations
            with Skorler.
          </div>
        </div>
        <div className="gap-3 mt-10 text-base font-medium leading-6  font-manrope text-textColor-primary max-md:max-w-full">
          Talk to our <span className="font-bold text-primary">sales reps</span>{" "}
          for fitting plan at affordable price
        </div>
      </div>
      <div
        // style={{
        //   backgroundImage:
        //     "url(https://cdn.builder.io/api/v1/image/assets/TEMP/c03c21cd2444e098422e124ae9085c702fe41086df2884b9143fcdd8602da306?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478)",
        //   backgroundSize: "full",
        //   backgroundPosition: "bottom",
        //   backgroundRepeat: "no-repeat",
        // }}
        className="flex z-0  py-24  flex-col items-center w-full text-base max-md:max-w-full"
      >
        <div className="flex flex-col px-8 max-w-full  w-[1280px] max-md:px-5">
          <div className="flex relative flex-wrap gap-5 justify-center items-start w-full max-md:max-w-full">
            <div className="flex overflow-hidden flex-col flex-1 shrink bg-white rounded-2xl shadow-lg basis-0 min-w-[300px] max-w-[384px]">
              <div className="flex flex-col px-8 pt-8 w-full text-center max-md:px-5">
                <div className="flex relative flex-col w-full">
                  <div className="flex z-0 flex-col w-full text-xl font-semibold text-gray-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9617edcfc9e437a82f605a9eac42254bdb8cd22b37c714a1c9ec0d65dffe0e7?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain self-center w-10 rounded-3xl aspect-square"
                    />
                    <div className="mt-5 ">Starter plan</div>
                  </div>
                  <div className="z-0 mt-2 text-slate-600  font-manrope">
                    Suitable for institutes and agencies
                  </div>
                  <div className="z-0 flex mt-2 text-5xl font-semibold tracking-tighter justify-center items-center gap-2 leading-none text-gray-900 relative max-md:text-4xl">
                    <div className=" mt-2 text-[15px] font-normal pt-0.5 leading-normal self-stretch h-6 text-primary whitespace-nowrap bg-sky-50 rounded-3xl bottom-[10px] left-[35px] min-h-[24px] w-[53px]">
                      From
                    </div>
                    $500/mth
                  </div>
                  <div className="z-0 mt-2 text-slate-600  font-manrope">
                    Billed annually
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 w-full font-medium text-white bg-[#FAFCFE] max-md:px-5">
                <div className="flex flex-col w-full">
                  <div className="flex items-start w-full rounded-lg">
                    <div className="overflow-hidden flex-1 shrink gap-2 self-stretch cursor-pointer px-5 py-3 w-full bg-primary rounded-lg text-center shadow-sm min-w-[240px]">
                      Request a Quote
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 w-full text-slate-600 max-md:px-5">
                <div className="flex flex-col w-full">
                  <div className="flex gap-3 items-start w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Basic collaboration tools
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Document annotation and comment
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Customizable workflow
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Real-time progress tracking
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      1 GB cloud storage (Add-on extra)
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Cloud hosting
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Email support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col flex-1 shrink bg-white rounded-2xl shadow-md basis-0 min-w-[300px] max-w-[384px]">
              <div className="flex flex-col px-8 pt-8 w-full text-center max-md:px-5">
                <div className="flex relative flex-col w-full">
                  <div className="flex z-0 flex-col w-full text-xl font-semibold text-gray-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/30faf95b10a6ca6d974120109f4ba7bb6b412607dc06880afbafe7deeae75370?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain self-center w-10 rounded-3xl aspect-square"
                    />
                    <div className="mt-5">Conference plan</div>
                  </div>
                  <div className="z-0 mt-2 text-slate-600  font-manrope">
                    Suitable for publishers and editors
                  </div>
                  <div className="flex z-0 mt-2 text-5xl font-semibold tracking-tighter justify-center items-center gap-2 leading-none text-gray-900 max-md:text-4xl relative">
                    <div className="mt-2 text-[15px] font-normal pt-0.5 leading-normal self-stretch h-6 text-primary whitespace-nowrap bg-sky-50 rounded-3xl bottom-[10px] left-[35px] min-h-[24px] w-[53px]">
                      From
                    </div>
                    $800/mth
                  </div>
                  <div className="z-0 mt-2 text-slate-600  font-manrope">
                    Billed annually.
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 w-full font-medium text-white bg-[#FAFCFE] max-md:px-5">
                <div className="flex flex-col w-full">
                  <div className="flex items-start w-full rounded-lg">
                    <div className="overflow-hidden flex-1 shrink gap-2 self-stretch cursor-pointer px-5 py-3 w-full bg-primary rounded-lg text-center shadow-sm min-w-[240px]">
                      Request a Quote
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 w-full text-slate-600 max-md:px-5">
                <div className="flex flex-col w-full">
                  <div className="flex gap-3 items-start w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      All Starter Plan features
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Unlimited users
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Sign up/registration component
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      10 GB cloud storage
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Dedicated account manager
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Priority email and chat support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col flex-1 shrink bg-white rounded-2xl shadow-lg basis-0 min-w-[300px] max-w-[384px]">
              <div className="flex flex-col px-8 pt-8 w-full text-center max-md:px-5">
                <div className="flex relative flex-col w-full">
                  <div className="flex z-0 flex-col w-full text-xl font-semibold text-gray-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3dc970df106ee77b3839f3ce1ce18271af20c390495d9ad112612aaa3b85876?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain self-center w-10 rounded-3xl aspect-square"
                    />
                    <div className="mt-5">Enterprise plan</div>
                  </div>
                  <div className="z-0 mt-2 text-slate-600  font-manrope">
                    Suitable for higher institutions
                  </div>
                  <div className="z-0 flex mt-2 text-5xl font-semibold tracking-tighter justify-center items-center gap-2 leading-none text-gray-900 max-md:text-4xl relative">
                    <div className=" mt-2 text-[15px] font-normal pt-0.5 leading-normal self-stretch h-6 text-primary whitespace-nowrap bg-sky-50 rounded-3xl bottom-[10px] left-[35px] min-h-[24px] w-[53px]">
                      From
                    </div>
                    $1500/mth
                  </div>
                  <div className="z-0 mt-2 text-slate-600">
                    Billed annually.
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 w-full font-medium text-white bg-[#FAFCFE] max-md:px-5">
                <div className="flex flex-col w-full">
                  <div className="flex items-start w-full rounded-lg">
                    <div className="overflow-hidden flex-1 shrink gap-2 self-stretch cursor-pointer px-5 py-3 w-full text-center bg-primary rounded-lg shadow-sm min-w-[240px]">
                      Request a Quote
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 w-full text-slate-600 max-md:px-5">
                <div className="flex flex-col w-full">
                  <div className="flex gap-3 items-start w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      All Starter Plan features
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Unlimited users
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Unlimited storage
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Own-cloud hosting option
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Integration with user registries
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Dedicated account manager
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-4 w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca5126ad609d69ecf8850120421bb47b7d7147b1f0e2f87594c7d83d8d56e8?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
                      className="object-contain shrink-0 w-6 rounded-xl aspect-square"
                    />
                    <div className="flex-1 shrink min-w-[240px]">
                      Priority email, chat and phone support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        loading="lazy"
        src=""
        className=" -z-10 object-contain aspect-[14.93] bottom-0  max-md:max-w-full "
      /> */}
    </div>
  );
};

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-gray-800">{plan} Plan</h3>
    <p className="mt-4 text-2xl font-bold text-gray-800">{price}</p>
    <ul className="mt-6 space-y-2 text-gray-600">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">
      Choose Plan
    </button>
  </div>
);

export default Pricing;
