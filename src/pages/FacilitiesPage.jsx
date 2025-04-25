import Navigation from "@/components/Navigation";
import Jumbotron from "@/components/Jumbotron";
import FacilitiesSection from "@/components/FacilitiesSection";

function FacilitiesPage() {
  return (
    <>
      <header className="px-2 mx-auto mt-2 lg:mt-8 lg:px-8">
        <div className="flex flex-col gap-4">
          <Navigation />
          <Jumbotron
            title="OUR FACILITIES"
            description="We provide everything for you."
            imageSource="./assets/images/facilities-banner.png"
          />
        </div>
      </header>
      <main>
        <FacilitiesSection />
      </main>
    </>
  );
}

export default FacilitiesPage;
