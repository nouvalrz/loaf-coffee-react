import KeySellingSection from "@/components/KeySellingSection";
import HomeJumbotron from "../components/HomeJumbotron";
import LogoBadge from "../components/LogoBadge";
import HomeNavigation from "../components/HomeNavigation";
import PromoBannerPortrait from "../components/PromoBannerPortrait";
import PromoSectionMobile from "../components/PromoSectionMobile";
import TopSellingSection from "@/components/TopSellingSection";
import TestimonialSection from "@/components/TestimonialSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";

function HomePage() {
  return (
    <div className="bg-oat font-[Manrope] text-oat">
      <header className="px-2 mx-auto mt-2 lg:mt-8 main-container lg:px-8">
        <div className="flex flex-row gap-4">
          <div className="lg:flex flex-col max-w-[180px] hidden">
            <LogoBadge />
            <PromoBannerPortrait
              title="Discover Ramadan Special"
              backgroundUrl="./assets/images/ramadan-specials.png"
              buttonTitle="Explore"
              buttonTo="/menu"
            />
          </div>
          <div className="flex flex-col gap-4 grow-[1]">
            <HomeNavigation />
            <HomeJumbotron
              imageSource="./assets/images/jumbotron-product.webp"
              titleComponent={
                <>
                  <h1 className="font-[Archivo] uppercase lg:text-6xl text-5xl font-extrabold flex flex-col gap-0.5 lg:gap-2">
                    <span className="text-3xl font-normal lg:text-4xl">
                      The
                    </span>{" "}
                    <span>Perfect</span> <span>Match</span>
                  </h1>
                  <p className="mt-2 lg:mt-4 lg:text-2xl">
                    Coffee and classic croissant at special price
                  </p>
                </>
              }
            />
          </div>
        </div>
      </header>
      <main>
        <PromoSectionMobile
          title="Discover Ramadan Specials"
          backgroundUrl="../assets/images/ramadan-specials.png"
          buttonTitle="Explore"
          buttonTo="/menu"
        />
        <KeySellingSection />
        <TopSellingSection />
        <TestimonialSection />
        <LocationSection />
        <GallerySection />
      </main>
    </div>
  );
}

export default HomePage;
