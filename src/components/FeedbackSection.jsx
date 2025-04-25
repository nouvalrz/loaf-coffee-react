import FeedbackForm from "./FeedbackForm";

function FeedbackSection() {
  return (
    <section
      id="feedback"
      className="px-2 my-8 lg:my-16 lg:px-8"
      data-aos="fade-up"
    >
      <h2 className="font-[Archivo] text-center text-3xl font-extrabold text-choco lg:text-4xl uppercase">
        Feedback Form
      </h2>
      <div className="flex mt-6">
        <div className="w-full max-w-2xl p-4 mx-auto rounded-lg bg-choco lg:p-6">
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
