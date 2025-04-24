import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex flex-row items-center justify-between lg:justify-center rounded-lg bg-orange min-h-[44px] p-2 lg:py-3 lg:px-7">
      <img
        src="./assets/svg/loaf-coffee-logo-only.svg"
        alt="Logo"
        className="w-[2rem] lg:hidden"
      />
      <nav className="flex flex-row gap-5 font-medium lg:gap-12 text-oat md:text-2xl ">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/facilities">Facilities</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </div>
  );
}

export default Navigation;
