import { FC } from "react";

import {
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
const data = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Next.JS",
    icon: <SiNextdotjs />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Nest.JS",
    icon: <SiNestjs />,
  },
  {
    name: "PrismaORM",
    icon: <SiPrisma />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
];

const Skills: FC = () => {
  return (
    <section id="skills" className="container">
      <div className="flex gap-10 items-center justify-between max-[625px]:justify-center">
        <h2>My skills</h2>
        <img
          src="arrow-left.png"
          alt="Arrow to left"
          className="w-3/4 max-[1000px]:hidden"
        />
      </div>
      <div className="mt-20 flex flex-wrap gap-x-10 gap-y-10 justify-center max-[768px]:flex-col">
        {data.map((item) => (
          <div
            key={item.name}
            className="dark:text-white text-black w-[200px] h-[200px] bg-white dark:bg-black rounded-lg flex flex-col justify-center items-center gap-3 text-3xl shadow-primary max-[768px]:w-full "
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
