import { FC } from "react";
import Project from "./Project";
import { Link } from "react-router-dom";
import Xmark from "../ui/Xmark/Xmark";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const data = [
  {
    id: 1,
    name: "Project name",
    date: "Aug 2022",
    imgUrl: "site1.png",
    width: 670,
    height: 360,
  },
  {
    id: 1,
    name: "Project name",
    date: "Aug 2022",
    imgUrl: "site2.png",
    width: 500,
    height: 500,
  },
  {
    id: 1,
    name: "Project name",
    date: "Aug 2022",
    imgUrl: "site3.png",
    width: 800,
    height: 330,
  },
  {
    id: 1,
    name: "Project name",
    date: "Aug 2022",
    imgUrl: "site4.png",
    width: 470,
    height: 360,
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="container">
      <div className="flex gap-10 items-center justify-end max-[625px]:justify-center">
        <h2>My projects</h2>
      </div>
      <div className="mt-20 flex flex-col gap-20 relative">
        <img
          src="points.png"
          alt=""
          className="absolute top-1/4 scale-125 left-0"
        />
        <img
          src="points.png"
          alt=""
          className="absolute bottom-1/4 scale-125 rotate-90 right-0"
        />
        <Xmark className="absolute -left-10 top-1/2 scale-50" />
        {data.map((project, index) => {
          return (
            <Project
              project={project}
              orientation={index % 2 === 0 ? "left" : "right"}
              key={project.imgUrl}
            />
          );
        })}
        <Link
          to={"/projects"}
          className="text-xl text-primary justify-center p-4 flex items-center gap-1"
        >
          See more projects
          <MdOutlineKeyboardDoubleArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
