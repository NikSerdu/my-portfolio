import { FC } from "react";
import { IoCodeDownload } from "react-icons/io5";
import Xmark from "../ui/Xmark/Xmark";

const Hero: FC = () => {
  return (
    <section id="home" className="pb-32 pt-10 lg:py-40 font-light relative ">
      <img src="lines.png" alt="Lines" className="absolute left-0" />
      <div className="container relative overflow-hidden">
        <div className="lg:w-2/5 max-[1000px]:text-center relative z-30">
          <h2 className="uppercase text-grey text-2xl ">
            Full-Stack web developer
          </h2>
          <h1 className="dark:text-white text-black text-8xl mt-3 font-semibold tracking-widest z-10 relative max-[768px]:text-6xl max-[450px]:text-5xl">
            Serduchenko Nikolay
          </h1>
          <h3 className="border-l border-white lg:w-[200px] mt-20 pl-5 text-grey text-xl">
            I'm a full-stack web developer and I really like my job.
          </h3>
        </div>
        <div className="z-10 ">
          <img
            src="hero.png"
            alt="Lines"
            className="absolute right-0 top-0 max-[1000px]:hidden"
          />
          <img
            src="bubble.png"
            alt="Lines"
            className="absolute lg:right-0 lg:top-0 top-28 -right-20 z-10 "
          />
        </div>
      </div>
      <Xmark className="absolute left-1/2 top-20 scale-75 hidden lg:block" />
      <Xmark className="absolute right-[10%] top-[40%] scale-50 hidden lg:block" />
      <div className="absolute min-[1000px]:left-[45%] min-[1000px]:top-[70%] max-[1000px]:bottom-0 max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2">
        <div className="w-40 h-40 bg-primary bg-opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="w-48 h-48 bg-primary bg-opacity-25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        {/* TODO add link to CV */}
        <a
          href="#"
          download
          className="w-32 h-32 bg-primary  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center flex-col text-4xl font-bold text-white"
        >
          <IoCodeDownload />
          <p>CV</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
