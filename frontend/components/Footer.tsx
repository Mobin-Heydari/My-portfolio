import React from "react";
import { Vortex } from "./ui/Vortex";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";


const socialMedia = [
    {
      id: 1,
      img: "icons/github.svg",
      link: "https://github.com/Mobin-Heydari"
    },
    {
      id: 2,
      img: "icons/gitlab.svg",
      link: "https://gitlab.com/Mobin_Developer"
    },
    {
      id: 3,
      img: "icons/linkedin.svg",
      link: "https://www.linkedin.com/in/mobin--heydari/"
    },
];


export function Footer() {
  return (
    <footer className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex backgroundColor="#222831" className="flex flex-col items-center justify-center px-2 md:px-10 py-4 w-full h-full">
        <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
            <img src="/footer-grid.svg" alt="footer grid" className="w-full h-full opacity-10"/>
        </div>
        <div className="flex flex-col items-center">
            <h3 className="text-4xl lg:max-w-[45vw]">
                Ready to take <span className="font-bold text-Primary">your</span> digital presence to the next level.
            </h3>
            <p className="text-white md:mt-10 my-5 text-2xl">Reach out to me today and let's discuss how I can help you achive your goals.</p>
            <a href="mailto:mobinheydari.developer@gmail.com">
                <MagicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>
        <div className="w-full h-full flex md:flex-row flex-col justify-between items-center mt-16 ">
            <p className="md:text-HighlightText text-lg font-bold">Copyright ©2025 Mobin Developer</p>
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg"
                >
                  <a href={info.link}>
                    <img src={info.img} alt="icons" width={30} height={30} />
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
