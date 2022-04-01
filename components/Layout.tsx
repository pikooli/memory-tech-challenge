import React, { ReactNode } from "react";
import Navbar from "components/navbar/Navbar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-6 pt-2">{children}</div>
    </div>
  );
};

export default Layout;
