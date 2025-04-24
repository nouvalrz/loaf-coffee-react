import { keySellingItems } from "@/data";
import KeySellingItem from "./KeySellingItem";

function KeySellingSection() {
  return (
    <section id="key-selling" className="relative mt-16 lg:mt-24">
      <img
        src="./assets/svg/bg-mustard-elipsis.svg"
        alt="bg-mustard-elipsis"
        className="absolute w-screen -top-12 z-0 h-[200px] object-cover object-top"
      />
      <div className="relative z-10">
        <h2 className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase text-center lg:px-8">
          Why Our Coffee?
        </h2>
        <p className="px-2 mt-3 text-center text:lg lg:text-xl text-oat">
          Finest beans, perfect roast, rich flavor. Experience the difference in
          every sip!
        </p>
        <div className="flex flex-row flex-wrap justify-around gap-8 p-2 mt-12 bg-mustard lg:p-8">
          {keySellingItems.map((item, index) => (
            <KeySellingItem {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeySellingSection;
