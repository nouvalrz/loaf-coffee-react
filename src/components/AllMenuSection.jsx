import MenuItem from "./MenuItem";
import { allMenuItems } from "@/data";
import ToggleGroupButton from "./ToggleGroupButton";
import { useState } from "react";

function AllMenuSection() {
  const [filterActive, setFilterActive] = useState("all");

  const menus =
    filterActive === "all"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === filterActive);

  return (
    <section id="menu" className="relative mt-16 lg:mt-24">
      <img
        src="./assets/svg/bg-mustard-elipsis.svg"
        alt="bg-mustard-elipsis"
        className="absolute w-screen -top-12 -z-20 h-[200px] object-cover object-top"
      />
      <h2
        className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase text-center text-choco"
        data-aos="fade-up"
      >
        ALL MENU
      </h2>
      <p
        className="max-w-[1000px] mx-auto mt-3 text-lg lg:text-xl text-center text-choco"
        data-aos="fade-up"
      >
        Find your best way to enjoy your day
      </p>
      <ToggleGroupButton
        items={["all", "food", "beverage"]}
        onValueChange={setFilterActive}
      />
      <div className="flex px-2 pt-6 pb-12 bg-mustard lg:px-8">
        <div
          className="grid grid-cols-2 gap-2 mx-auto mt-4 lg:gap-5 lg:grid-cols-6 md:grid-cols-4 lg:max-w-6xl"
          data-aos="fade-up"
        >
          {menus.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllMenuSection;
