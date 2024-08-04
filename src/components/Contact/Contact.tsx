import { FC } from "react";
import { IoMdMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact: FC = () => {
  return (
    <section id="contact" className="relative mb-32">
      <img
        src="arc.png"
        alt=""
        className="absolute left-0 top-0 max-[1200px]:hidden"
        width={300}
        height={200}
      />
      <img
        src="points.png"
        alt=""
        className="absolute right-0 top-1/2 rotate-90"
      />
      <div className="container">
        <div className="flex gap-10 items-center justify-center ">
          <h2 className="">Contact me</h2>
        </div>
        <div className="mt-10 flex flex-col gap-5 relative text-4xl max-[450px]:text-2xl">
          <a
            href="mailto:nikserduchenko@yandex.ru"
            className="flex gap-2 items-center justify-center  text-primary"
          >
            <IoMdMail />
            nikserduchenko@yandex.ru
          </a>
          <a
            href="https://t.me/nikserdu"
            className="flex gap-2 items-center justify-center  text-primary"
          >
            <FaTelegram />
            @nikserdu
          </a>
          <a
            href="https://github.com/NikSerdu"
            className="flex gap-2 items-center justify-center  text-primary"
          >
            <FaGithub />
            NikSerdu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
