import AboutSection from "@/components/AboutSection";
import FeedbackSection from "@/components/FeedbackSection";
import Navigation from "@/components/Navigation";

function AboutUsPage() {
  return (
    <>
      <header className="px-2 mx-auto mt-2 lg:mt-8 lg:px-8">
        <div className="flex flex-col gap-4">
          <Navigation />
        </div>
      </header>
      <main>
        <AboutSection />
        <section
          id="gallery"
          className="px-2 my-8 lg:my-16 lg:px-8"
          data-aos="fade-up"
        >
          <img
            src="./assets/images/gallery.jpg"
            alt="gallery"
            className="mx-auto rounded-lg"
          />
        </section>
        <FeedbackSection />
      </main>
    </>
  );
}

export default AboutUsPage;
