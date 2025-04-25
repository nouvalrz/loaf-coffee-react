function AboutSection() {
  return (
    <section
      id="about"
      className="px-2 my-8 lg:my-16 lg:px-8"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
        <h1 className="font-[Archivo] text-4xl font-extrabold whitespace-pre-line text-choco lg:text-6xl flex-[1]">
          ABOUT LOAF COFFEE
        </h1>
        <div className="flex-[2]">
          <p className="text-choco lg:text-xl">
            Welcome to Loaf Coffee, where coffee isn&apos;t just a beverage;
            it&apos;s a passion, a craft, and a way of life.
          </p>
          <p className="mt-4 text-choco lg:text-xl">
            From bean to cup, we&apos;re dedicated to delivering excellence in
            every sip. Join us on a journey of flavor and quality, crafted with
            love for the ultimate coffee experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
