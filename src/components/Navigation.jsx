import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg bg-orange min-h-[44px] p-2 lg:py-3 lg:px-7">
      <img
        src="./assets/svg/loaf-coffee-logo-only.svg"
        alt="Logo"
        className="w-[2rem] lg:hidden"
      />
      <img
        src="./assets/svg/loaf-coffee-logo-landscape.svg"
        alt="Logo"
        className="hidden lg:block lg:w-3xs"
      />
      <nav className="flex flex-row gap-5 font-medium lg:gap-12 text-oat md:text-2xl ">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/facilities">Facilities</Link>
        <Link to="/">About Us</Link>
      </nav>
    </div>
  );
}

export default Navigation;
