import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dark:bg-black dark:text-white  pt-5">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
