"use client";

import { useState, FormEvent } from "react";

import { OutlineButton } from "./ui/outline-button";

interface GetEarlyAccessProps {
  title?: string;
  description?: string;
  onSuccess?: () => void;
  className?: string;
}

const GetEarlyAccess = ({
  title = "Get Early Access",
  description = "Simulate your next user, uncover their real needs, and make smarter product decisions instantly.",
  onSuccess,
  className = "",
}: GetEarlyAccessProps) => {
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
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError);
        responseData = {};
      }

      if (!response.ok) {
        const errorMessage =
          responseData?.error ||
          `Request failed with status ${response.status}`;
        setFormStatus({
          message: errorMessage,
          type: "error",
        });
        return;
      }

      setFormStatus({
        message: "Thanks for joining our waitlist! We'll be in touch soon.",
        type: "success",
      });

      // Reset form
      setEmail("");
      setMessage("");

      // Call the onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setFormStatus({
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`w-full h-full flex items-center justify-center py-16 sm:py-20 md:py-24 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 relative">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6 mb-10 lg:mb-0">
            <div className="w-full max-w-4xl relative text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-tight lg:leading-[68px] font-geist text-transparent !bg-clip-text [background:linear-gradient(90deg,_#62606c,_#fff_48.29%,_#62606c),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-start mx-auto">
              {title}
            </div>
            <p className="text-neutral-400 text-sm sm:text-base text-center md:text-lg max-w-xs sm:max-w-sm md:max-w-md font-normal leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right side form */}
          <div className="w-full lg:w-1/2 max-w-sm mx-auto lg:mx-0 relative">
            {/* Background glows - positioned to be partially behind and partially outside the form */}
            <div
              className="absolute w-40 sm:w-60 h-12 sm:h-16 -right-4 sm:-left-8
             lg:-left-12 bottom-8 sm:bottom-12 bg-indigo-400 blur-[60px] sm:blur-[80px] lg:blur-[111px] opacity-80 z-0"
            />
            <div
              className="absolute w-40 sm:w-60 h-16 sm:h-24 -left-4 sm:-left-8 
            lg:-left-16 -top-32 sm:-top-8 bg-violet-900 blur-[60px] sm:blur-[80px] lg:blur-[111px] opacity-80 z-0"
            />

            {/* Middle-left blur effect */}
            <div
              className="absolute w-40 sm:w-52 h-16 sm:h-20 -left-4 top-1/2 -translate-y-1/2 bg-indigo-600 blur-[60px] sm:blur-[80px] lg:blur-[100px] opacity-50 z-0"
            />

            <div className="w-full sm:w-[488px] h-auto sm:h-[557px] bg-gradient-to-l from-neutral-950/20 to-stone-950/30 rounded-[20px] border border-neutral-800 p-5 sm:p-6 md:p-8 shadow-lg backdrop-blur-sm relative z-10 max-w-full overflow-hidden flex flex-col">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-5 sm:space-y-6 flex-1"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 md:mb-3 tracking-tight">
                    Be the first to try it
                  </h2>
                  <p className="text-neutral-400 text-xs sm:text-sm font-normal">
                    Sign up now to join the waitlist.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <div className="space-y-2">
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
                      className="w-full h-10 md:h-12 px-3 py-2 rounded-md bg-transparent outline outline-1 outline-neutral-800 text-white text-sm placeholder:text-neutral-400 focus:outline-indigo-500 transition"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
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

                <OutlineButton
                  type="submit"
                  fullWidth
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Join the waitlist now"}
                </OutlineButton>

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
