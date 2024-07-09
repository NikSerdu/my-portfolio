import Header from "@components/Layout/Header";
import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dark:bg-black dark:text-white h-[100vh] ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
