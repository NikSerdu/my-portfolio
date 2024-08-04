import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import useColorMode from "../../hooks/useColorMode";
import Button from "../ui/Button/Button";
import Checkbox from "../ui/Checkbox/Checkbox";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export const menuData = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("#");
  const [colorMode, setColorMode] = useColorMode();
  const handleChange = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="dark:bg-black bg-white  rounded-[1000px] flex px-2 py-2 border border-primary/50 container items-center sticky top-0 z-20 max-[1024px]:hidden">
        <Link to={"/"} className="font-bold text-2xl px-6 py-3">
          Nikolay S.
        </Link>
        <nav className="ml-10 text-lg">
          <ul className="flex gap-10 items-center justify-between">
            {menuData.map((item) => (
              <li
                key={item.name + item.href}
                className="relative"
                onClick={() => setActiveMenuItem(item.href)}
              >
                <a href={item.href} className="p-2 py-6">
                  {item.name}
                </a>
                <AnimatePresence>
                  {activeMenuItem === item.href && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      style={{ transformOrigin: "center" }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-[3px] bg-primary absolute -bottom-[22px] left-0 right-0 rounded-xl"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2 mr-10">
          <span className="dark:text-grey text-black">Light</span>
          <Checkbox isChecked={colorMode === "dark"} onChange={handleChange} />
          <span className="dark:text-white text-grey">Dark</span>
        </div>
        <a href="#contact" className="">
          <Button className="font-bold dark:bg-opacity-50 ">Contact me</Button>
        </a>
      </div>

      <div className="dark:bg-black bg-white flex px-2 py-4 border-t border-primary  container items-center justify-center fixed bottom-0 z-20 lg:hidden">
        <nav className="md:text-2xl sm:text-xl ">
          <ul className="flex max-[520px]:gap-4 max-[400px]:gap-0 gap-10 items-center ">
            {menuData.map((item) => (
              <li key={item.name + item.href} className="relative">
                <a
                  href={item.href}
                  className="p-2 py-6"
                  onClick={() => setActiveMenuItem(item.href)}
                >
                  {item.name}
                </a>
                <AnimatePresence>
                  {activeMenuItem === item.href && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      style={{ transformOrigin: "center" }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-[3px] bg-primary absolute -bottom-[18px] left-0 right-0 rounded-xl"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-10" onClick={handleChange}>
          <DarkModeSwitch
            checked={colorMode === "dark"}
            onChange={handleChange}
            size={27}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
