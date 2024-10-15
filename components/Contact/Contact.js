import React, { useRef } from "react";
import styles from "./contact.module.scss";
import { MENULINKS } from "@/constants";
import { Toaster } from "react-hot-toast";

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "sans-serif",
  },
};

const Contact = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id={MENULINKS[4].ref}
      className="mt-30 w-full relative select-none bg-black pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20"
      ref={sectionRef}
    >
      <div>
        <Toaster toastOptions={toastOptions} />
      </div>
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col contact-wrapper">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            Contact
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Contact
          </h1>
        </div>
        <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
          Get In Touch
        </h2>
      </div>

      <form className="pt-10 sm:mx-auto px-5 sm:w-[30rem] md:w-[35rem] staggered-reveal">
        <div className="relative">
          <input
            id="email"
            type="text"
            className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
          />
          <label
            htmlFor="name"
            className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
          >
            Name
          </label>
        </div>

        <div className="relative mt-14">
          <input
            id="email"
            type="text"
            className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
          />
          <label
            htmlFor="name"
            className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
          >
            Email
          </label>
        </div>

        <div className="relative mt-14">
          <textarea
            id="message"
            className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
          />
          <label
            htmlFor="message"
            className="absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all"
          >
            Message
          </label>
        </div>

        <div className="mt-9 mx-auto link">
          <button className={styles.button}>
            <span>send -&gt;</span>
            <span className={styles.success}>
              <svg className={styles.trails} viewBox="0 0 33 64">
                <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
              </svg>
              Sent
            </span>
            <svg className={styles.trails} viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className={styles.plane}></div>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </button>
        </div>
      </form>

      {/* style */}
      <style jsx global>{`
        input,
        label,
        textarea {
          cursor: pointer;
        }

        input:hover,
        textarea:hover {
          box-shadow: 0 0 0.3rem #7000ff;
        }

        input:active,
        input:focus,
        textarea:focus {
          box-shadow: 0 0 0.3rem #000000;
        }

        input:focus + label,
        input:valid + label {
          height: 50%;
          padding-left: 0;
          transform: translateY(-100%);
        }

        textarea:focus + label,
        textarea:valid + label {
          height: 17%;
          padding-left: 0;
          transform: translateY(-100%);
        }
      `}</style>
    </section>
  );
};

export default Contact;
