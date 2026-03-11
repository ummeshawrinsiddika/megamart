import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Topbar } from "./Topbar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
