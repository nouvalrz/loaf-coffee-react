import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

function FeedbackForm() {
  return (
    <form action="#">
      <div>
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <Input type="text" name="name" id="name" placeholder="JohnDoe" />
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="body" className="font-semibold">
          Describe your feedback
        </label>
        <Textarea
          name="body"
          id="body"
          rows={5}
          placeholder="Provide suggestions, input or criticism"
        />
      </div>

      <Button type="submit" title="Send" />
    </form>
  );
}

export default FeedbackForm;
