import React from "react";
import { Vortex } from "./ui/Vortex";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaGitlab, FaLinkedin, FaLocationArrow } from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    icon: <FaGithub className="text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark"/>,
    url: "https://github.com/Mobin-Heydari"
  },
  {
    id: 2,
    icon: <FaGitlab className="text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark"/>,
    url: "https://gitlab.com/Mobin_Developer"
  },
  {
    id: 3,
    icon: <FaLinkedin className="text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark"/>,
    url: "https://www.linkedin.com/in/mobin--heydari/"
  },
];

export function Footer() {
  return (
    <footer className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden mt-20">
      <Vortex className="flex flex-col items-center justify-center px-2 md:px-10 py-4 w-full h-full" particleCount={120}>
        <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
          <img src="/footer-grid.svg" alt="footer grid" className="w-full h-full opacity-10"/>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-2xl w-full text-center">
            Ready to take your digital presence to the next level? Let’s start this journey together.
          </h4>
          <p className="text-center md:mt-10 my-5 text-2xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-primary-light via-main-text-light to-secondary-light dark:from-primary-dark dark:via-main-text-dark dark:to-secondary-dark  [text-shadow:0_0_rgba(0,0,0,0.1)] font-bold">
            Click the button below, and let’s get in touch!
          </p>
          <a href="mailto:mobinheydari.developer@gmail.com">
            <MagicButton 
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="w-full h-full flex md:flex-row flex-col justify-between items-center mt-16">
          <p className="md:text-HighlightText text-lg font-bold">
            Copyright ©2025 Mobin Developer
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg"
              >
                <a href={info.url} target="_blank" rel="noopener noreferrer">
                  {info.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Vortex>
    </footer>
  );
}

export default Footer;
