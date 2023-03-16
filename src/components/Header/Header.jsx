import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import PageTitle from "../PageTitle/PageTitle";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const categoryName = location.pathname.match(/^\/category\/(.+)/)?.[1];

  return (
    <header className="bg-gray-100 shadow">
      <Navbar brand="Free Market" />
      {isHome ? <Hero /> : <PageTitle category={categoryName} />}
    </header>
  );
};

export default Header;
