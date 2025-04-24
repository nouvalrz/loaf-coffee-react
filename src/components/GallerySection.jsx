import { galleryImages } from "@/data";
import GalleryItem from "./GalleryItem";

function GallerySection() {
  return (
    <section id="gallery" className="mt-8 lg:mt-12">
      <div className="px-2 py-6 rounded-t-lg lg:p-8 bg-choco">
        <div data-aos="fade-up">
          <h2 className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase ">
            Our Gallery
          </h2>
          <p className="max-w-[1000px] mt-3 text-lg lg:text-xl  text-oat">
            Explore our collection of moments, from beautifully crafted coffee
            to the cozy vibes of our shop!
          </p>
          <div className="flex flex-row gap-6 mt-6 overflow-x-auto lg:gap-10 lg:justify-between">
            {galleryImages.map((item, index) => (
              <GalleryItem imageSource={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
