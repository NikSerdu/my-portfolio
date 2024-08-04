import { FC } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
const Home: FC = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
