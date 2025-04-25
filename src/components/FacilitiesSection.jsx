import { facilityItems } from "@/data";
import FacilitiesItem from "./FacilitiesItem";

function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="relative pb-6 mt-6 overflow-clip bg-oat-to-mustard md:bg-none"
    >
      <img
        src="./assets/svg/bg-mustard-elipsis.svg"
        alt="bg-mustard-elipsis"
        className="absolute w-full top-15 lg:top-5"
      />
      <div className="px-2 lg:px-8">
        <div className="relative px-4 py-8 rounded-lg md:py-12 md:px-6 bg-choco ">
          <h2
            className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase text-center text-oat"
            data-aos="fade-up"
          >
            Facilities & Events
          </h2>

          <div
            className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-6 md:mt-10 md:grid-cols-2"
            data-aos="fade-up"
          >
            {facilityItems.map((item, index) => (
              <FacilitiesItem {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
