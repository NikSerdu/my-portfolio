import { FC } from "react";
import { Link } from "react-router-dom";

type TypeProps = {
  project: {
    id: number;
    name: string;
    date: string;
    imgUrl: string;
    width: number;
    height: number;
  };
  orientation: "left" | "right";
};

const Project: FC<TypeProps> = ({ orientation, project }) => {
  const { date, height, imgUrl, name, width, id } = project;
  return (
    <>
      {orientation === "left" ? (
        <Link
          to={`/projects/${id}`}
          className="flex max-[1000px]:items-center max-[1000px]:flex-col"
        >
          <img
            src={imgUrl}
            alt=""
            className="rounded-xl"
            width={width}
            height={height}
          />
          <div className="min-[1000px]:-ml-20 min-[1000px]:mt-20 dark:text-white text-primary">
            <h3>{name}</h3>
            <span className="font-extralight text-2xl">{date}</span>
          </div>
        </Link>
      ) : (
        <Link
          to={`/projects/${id}`}
          className="flex max-[1000px]:items-center max-[1000px]:flex-col min-[1000px]:flex-row-reverse"
        >
          <img
            src={imgUrl}
            alt=""
            className="rounded-xl"
            width={width}
            height={height}
          />
          <div className="min-[1000px]:-mr-20 min-[1000px]:mb-5 z-10 mt-auto dark:text-white text-primary">
            <h3>{name}</h3>
            <span className="font-extralight text-2xl">{date}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default Project;
