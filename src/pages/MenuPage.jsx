import AllMenuSection from "@/components/AllMenuSection";
import Jumbotron from "@/components/Jumbotron";
import Navigation from "@/components/Navigation";
import PromoMenuSection from "@/components/PromoMenuSection";

function MenuPage() {
  return (
    <>
      <header className="px-2 mx-auto mt-2 lg:mt-8 lg:px-8">
        <div className="flex flex-col gap-4">
          <Navigation />
          <Jumbotron
            title="Explore Menu"
            description="We have everything you need."
            imageSource="./assets/images/menu-banner.webp"
          />
        </div>
      </header>
      <main>
        <PromoMenuSection />
        <AllMenuSection />
      </main>
    </>
  );
}

export default MenuPage;
