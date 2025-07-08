"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnvyjlr"); // <-- Your Formspree ID

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex justify-center flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <h1 className="text-4xl font-bold text-body-color dark:text-gray-400 mb-4">
                    Thank you!
                  </h1>
                  <h2 className="text-lg text-body-color dark:text-white">
                    We will get back to you shortly.
                  </h2>
                </div>
              ) : (
                <>
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    Let's Connect
                  </h2>
                  <p className="mb-10 text-base font-medium text-body-color">
                    Reach out for inquiries, support, or bring your ideas to life!
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:text-white"
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                      </div>

                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:text-white"
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            placeholder="Enter your message"
                            className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:text-white"
                          ></textarea>
                          <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <button
                          type="submit"
                          disabled={state.submitting}
                          className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-opacity-90"
                        >
                          {state.submitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
