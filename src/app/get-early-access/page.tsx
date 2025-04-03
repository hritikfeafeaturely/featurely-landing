"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const GetEarlyAccess = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "", // "success" or "error"
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setFormStatus({
        message: "Please enter your email address",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API call when ready
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, message }),
      // });

      // Simulating successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus({
        message: "Thanks for joining our waitlist! We'll be in touch soon.",
        type: "success",
      });

      // Optional: Reset form
      setEmail("");
      setMessage("");
    } catch (error) {
      setFormStatus({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-neutral-950 py-10 sm:py-12 md:py-16 lg:py-24 mt-8 sm:mt-12 lg:mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 relative">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white">
              Get Early Access
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md font-normal leading-relaxed">
              Simulate your next user, uncover their real needs, and make smarter
              product decisions instantly.
            </p>
          </div>

          {/* Right side form */}
          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 relative">
            {/* Background glows - positioned to be partially behind and partially outside the form */}
            <div className="absolute w-40 sm:w-60 h-12 sm:h-16 -right-8 sm:-right-12 bottom-8 sm:bottom-12 bg-indigo-400 blur-[80px] sm:blur-[111.11px] opacity-50" />
            <div className="absolute w-40 sm:w-60 h-16 sm:h-24 -left-8 sm:-left-16 -top-6 sm:-top-8 bg-violet-900 blur-[80px] sm:blur-[111.11px] opacity-50" />
            
            <div className="bg-gradient-to-l from-neutral-950/30 to-stone-950/30 rounded-lg sm:rounded-xl border border-neutral-800 p-4 sm:p-6 md:p-8 w-full shadow-lg backdrop-blur-sm relative">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-1 sm:mb-2 md:mb-3">
                    Be the first to try it
                  </h2>
                  <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-normal">
                    Sign up now to join the waitlist.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div className="space-y-1 sm:space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-white text-xs sm:text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full h-9 sm:h-10 md:h-12 px-3 py-2 rounded-md bg-transparent outline outline-1 outline-neutral-800 text-white text-sm placeholder:text-neutral-400 focus:outline-indigo-500 transition"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-white text-xs sm:text-sm font-medium"
                    >
                      Tell us more (optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Anything you'd like to share?"
                      rows={3}
                      className="w-full px-3 py-2 rounded-md bg-transparent outline outline-1 outline-neutral-800 text-white text-sm placeholder:text-neutral-400 focus:outline-indigo-500 transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-9 sm:h-10 md:h-12 px-3 sm:px-4 md:px-8 py-2 rounded-md outline outline-1 outline-offset-[-1px] outline-gray-600 flex justify-center items-center transition ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900 active:scale-[0.99]"
                  }`}
                >
                  <span className="text-white text-xs sm:text-sm font-normal uppercase">
                    {isSubmitting ? "Processing..." : "Join the waitlist now"}
                  </span>
                </button>

                {formStatus.message && (
                  <div
                    className={`text-xs sm:text-sm ${
                      formStatus.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    } py-1`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <p className="text-center text-neutral-400 text-[10px] xs:text-xs sm:text-sm font-normal">
                  We respect your privacy and will never share your email with
                  anyone.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetEarlyAccess;

