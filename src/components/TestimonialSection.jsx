import { testimonials } from "@/data";
import TestimonialItem from "./TestimonialItem";

function TestimonialSection() {
  return (
    <section id="testimonials" className="relative z-20">
      <div className="px-2 py-8 bg-orange lg:px-8 lg:pb-20">
        <div data-aos="fade-up">
          <h2 className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase ">
            Customer Testimonials
          </h2>
          <p className="max-w-[1000px] mt-3 text-lg lg:text-xl  text-oat">
            Hear what our happy customers say about our coffee and cozy
            atmosphere!
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-6 lg:mt-12 scroll-mt-80 lg:gap-10 lg:flex-row">
          {testimonials.map((item, index) => (
            <TestimonialItem {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
