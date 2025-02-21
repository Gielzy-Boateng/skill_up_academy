"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Spinner from "./Spinner";
import WidthConstraint from "./width-constraint";

export default function FormField() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  // const pathname = usePathname();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setEmail("");
    setName("");
    setText("");

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        // .log(result);
        setMessage(
          "Thank you for sending me your message. I will get in touch with you."
        );
      } else {
        setMessage("Form Submission failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("There was an error Submitting the form");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div
      id="contact"
      className="scroll-m-20 mt-20 relative bg-[url(/assets/home/form-bg.jpg)]  w-full "
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 " />
      <WidthConstraint className="py-10">
        <h1 className="relative text-nowrap bebasNeue tracking-wider text-[40px] lg:text-[60px] z-20 mb-10 text-start text-4xl font-bold text-[#FF4500]">
          Sign Up Now!
        </h1>
        <div className="relative z-20 mx-auto max-w-[600px] flex-col items-center justify-center">
          <form onSubmit={handleSubmit} className="space-y-5  z-10 mt-20">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              name="name"
              className="w-full placeholder:text-[#FF5722] font-medium p-4 box-border text-[16px] appearance-none rounded-xl outline-none ring-blue-600  text-stone-900 "
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full placeholder:text-[#FF5722] box-border text-[16px] appearance-none p-4 rounded-xl font-medium outline-none focus:ring-offset-2 focus:ring-[#FF5722] text-stone-900 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Contact"
              name="tel"
              className="w-full placeholder:text-[#FF5722] box-border text-[16px] appearance-none p-4 rounded-xl font-medium outline-none focus:ring-offset-2 text-stone-900 "
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <textarea
              placeholder="List your courses here..."
              className="w-full h-[130px] placeholder:text-[#FF5722] box-border text-[16px] appearance-none resize-none p-4 rounded-xl font-medium outline-none focus:ring-offset-2 text-stone-900"
              value={text}
              name="message"
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              disabled={!email || isSending || message}
              className={`${
                !email ? "cursor-not-allowed" : "cursor-pointer"
              } w-full bg-[#FF6D00] text-white font-bold hover:bg-black py-2 transition-all duration-200 rounded-xl`}
            >
              {isSending ? <Spinner /> : "Submit"}
            </button>

            {message && (
              <div className="absolute inset-0 bg-gray-300 rounded-xl bg-opacity-90 w-full  text-[#38126D] font-semibold h-full -translate-y-5 flex flex-col items-center justify-center space-y-2 ">
                <p className="p-2 text-center text-[20px]">{message}</p>
                <Link
                  href="/"
                  className="bg-[#B336FF] py-2 px-4 rounded-full text-white text-base"
                >
                  Go back to Home
                </Link>
              </div>
            )}
          </form>
        </div>
      </WidthConstraint>
    </div>
  );
}
