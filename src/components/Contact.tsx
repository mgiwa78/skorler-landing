"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="contact"
      className="flex overflow-hidden z-10 flex-col  w-full bg-primary max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex relative flex-col justify-center items-center px-20 py-20 w-full min-h-[865px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/269c07c6ff644545088dec36352f04fe23ca7c1e33834dca69c0b49e303d4ada?apiKey=6d7e3b95be394028b2450680e6396478&&apiKey=6d7e3b95be394028b2450680e6396478"
          className="object-cover absolute inset-0 size-full"
        />
        <form
          onSubmit={handleSubmit}
          className="flex relative flex-col w-full max-w-[1051px] max-md:max-w-full"
        >
          <SectionTitle title="Contact us" />
          <div className="mt-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex z-10 flex-col mt-1.5 mr-0 max-md:max-w-full">
                  <div className="flex flex-col w-full text-slate-50 max-md:max-w-full">
                    <div className="text-6xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
                      Get in Touch{" "}
                      <span className="text-customGreen">with Us</span>
                    </div>
                    <div className="mt-3  font-manrope text-base font-light leading-7 max-md:max-w-full">
                      We’re here to help! Whether you have questions about
                      Skorler, need support, or want to schedule a demo, our
                      team is ready to assist you.
                    </div>
                  </div>
                  <div className="flex flex-col mt-10 max-w-full  font-manrope text-white w-[394px]">
                    <div className="flex flex-col w-full">
                      <div className="flex flex-col max-w-full w-[340px]">
                        <div className="text-2xl font-semibold leading-none">
                          General Inquiries:
                        </div>
                        <ul className=" ml-4">
                          <li className="mt-3 text-lg leading-8 list-disc list-inside font-light">
                            Email: info@skorler.com
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col mt-6 w-full">
                        <div className="text-2xl font-semibold leading-none">
                          Customer Support:
                        </div>
                        <ul className="pt-3  ml-4">
                          <li className="text-lg leading-8 list-disc list-inside font-light">
                            Email: support@skorler.com
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col mt-6 w-full">
                        <div className="text-2xl font-semibold leading-none">
                          Sales and Demos:
                        </div>
                        <ul className="pt-3  ml-4">
                          <li className=" text-lg leading-8 list-disc list-inside font-light">
                            sales@skorler.com
                          </li>
                          <li className=" text-lg leading-8 list-disc list-inside font-light">
                            Phone: +1 (123) 456-7892
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col mt-6 w-full">
                        <div className="text-2xl font-semibold leading-none">
                          Phone Contacts
                        </div>
                        <ul className="pt-3  ml-4">
                          <li className=" text-lg leading-8 list-disc list-inside font-light">
                            US/CA: +1(613) 618 3423
                          </li>

                          <li className=" text-lg leading-8 list-disc list-inside font-light">
                            UK/EU: +44 7930 866775
                          </li>
                          <li className=" text-lg leading-8 list-disc list-inside font-light">
                            Africa: +234 906 782 5044
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:max-w-full">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex gap-5  font-manrope items-start w-full max-md:max-w-full">
                      <div className="flex flex-col flex-1 shrink basis-0">
                        <div className="flex flex-col w-full">
                          <div className="flex flex-col w-full">
                            <div className="text-sm font-normal font-manrope leading-none text-slate-50">
                              First name
                            </div>
                            <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg shadow-sm">
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                className="w-full bg-transparent border-none focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 shrink basis-0">
                        <div className="flex flex-col w-full">
                          <div className="flex flex-col w-full">
                            <div className="text-sm font-normal font-manrope leading-none text-slate-50">
                              Last name
                            </div>
                            <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg shadow-sm">
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                className="w-full bg-transparent border-none focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-6 w-full whitespace-nowrap max-md:max-w-full">
                      <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                          <div className="text-sm font-normal font-manrope leading-none text-slate-50">
                            Email
                          </div>
                          <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg shadow-sm max-md:max-w-full">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className="w-full bg-transparent border-none focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                          <div className="text-sm font-normal font-manrope leading-none text-slate-50">
                            Phone number
                          </div>
                          <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg shadow-sm max-md:max-w-full">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 000-0000"
                              className="w-full bg-transparent border-none focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <div className="flex flex-col w-full min-h-[78px] max-md:max-w-full">
                        <div className="text-sm font-normal font-manrope leading-none text-slate-50">
                          Subject
                        </div>
                        <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg shadow-sm max-md:max-w-full">
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-transparent border-none focus:outline-none"
                          >
                            <option value="">Select your subject</option>
                            <option value="general">General Inquiries</option>
                            <option value="support">Customer Support</option>
                            <option value="sales">Sales and Demos</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-6 w-full text-sm font-normal font-manrope leading-none whitespace-nowrap min-h-[154px] text-slate-50 max-md:max-w-full">
                      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                          <div>Message</div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            className="flex flex-1 gap-2 p-2.5 mt-1.5 w-full bg-white rounded-lg shadow-sm min-h-[128px] max-md:max-w-full resize-none focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center mt-6 w-full max-md:max-w-full">
                      <div className="flex justify-center items-center self-stretch my-auto w-5">
                        <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          className="form-checkbox  font-manrope h-5 w-5 text-customGreen"
                        />
                      </div>
                      <div className="flex-1 shrink self-stretch my-auto text-base font-medium basis-0 text-slate-50 max-md:max-w-full">
                        <span className="">You agree to our friendly </span>
                        <span className="underline ">privacy policy</span>
                        <span className="text-gray-500 ">.</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col mt-8 w-full text-center text-base font-medium text-white max-md:max-w-full">
                    <button
                      type="submit"
                      className=" font-manrope items-center w-full text-center rounded-lg bg-customGreen px-5 py-3 shadow-sm max-md:max-w-full"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
