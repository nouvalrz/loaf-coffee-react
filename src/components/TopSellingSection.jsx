import { topSellingProducts } from "@/data";
import MenuItem from "./MenuItem";

function TopSellingSection() {
  return (
    <section id="top-selling" className="relative">
      <img
        src="./assets/svg/bg-orange-elipsis.svg"
        alt="bg-orange-elipsis"
        className="absolute w-screen top-[7rem] lg:top-0"
      />
      <div className="bg-mustard-to-orange">
        <div className="z-10 p-2 lg:p-8">
          <div
            className="relative z-20 w-full p-8 mt-12 rounded-lg lg:mt-0 lg:px-20 lg:py-12 bg-choco"
            data-aos="fade-up"
          >
            <h2 className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase text-center">
              Top Selling Product
            </h2>
            <p className="max-w-[1000px] mx-auto mt-3 text-lg lg:text-xl text-center text-oat">
              Discover our best-selling delights! Enjoy the most popular coffee
              and croissants loved by our customers. Experience the perfect
              blend of flavors in every sip and bite!
            </p>
            <div className="flex flex-row gap-5 mt-6 overflow-x-auto justify-evenly">
              {topSellingProducts.map((item, index) => (
                <MenuItem {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSellingSection;
