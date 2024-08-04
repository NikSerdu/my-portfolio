import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";

const AboutMe: FC = () => {
  return (
    <section id="about-me" className="relative py-16">
      <div className="container flex justify-between">
        <div className="relative max-[1000px]:hidden">
          <img src="about-img.png" alt="About me img" className="w-3/4" />
          <img
            src="bubble.png"
            alt="Bubble img"
            className="absolute h-1/4 top-[85%] -translate-y-[85%]"
          />
        </div>
        <div className="min-[1000px]:w-1/2">
          <div className="flex items-end justify-between max-[1000px]:justify-center">
            <h2 className="">
              About <br className="max-[1000px]:hidden" /> me
            </h2>
            <img
              src="arrow-right.png"
              alt="Right arrow"
              className="h-1/2 max-[1000px]:hidden"
            />
          </div>
          <div className=" mt-20 min-[1000px]:w-[60%] text-grey ml-auto z-10 relative">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              provident sunt ullam vel perferendis vero excepturi aliquid quia,
              ut inventore sequi ducimus cum quam accusantium, ad unde quaerat!
              Repellendus, minus. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit.
            </p>
            <Link to={"#contact"}>
              <Button className="mt-6">Contact me</Button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src="points.png"
        alt="Points img"
        className="absolute h-[20%] -bottom-20 right-0 "
      />
    </section>
  );
};

export default AboutMe;
