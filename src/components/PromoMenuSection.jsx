import { promoMenuItems } from "@/data";
import PromoMenuItem from "./PromoMenuItem";

function PromoMenuSection() {
  return (
    <section id="promo">
      <div className="px-2 mt-6 lg:px-8">
        <h2
          className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase text-choco text-center"
          data-aos="fade-up"
        >
          Promo & Offers
        </h2>
        <div className="flex flex-col gap-2 mt-4 lg:gap-8 lg:flex-row">
          {promoMenuItems.map((item, index) => (
            <PromoMenuItem {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoMenuSection;
