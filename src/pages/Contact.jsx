import { useState } from "react";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  function handleSubmit(e) {
    e.prevntdefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        setShowModal(true);
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div
      className="contact flex h-screen p-6 max-h-screen bg-white gap-4
    "
    >
      <div className=" basis-1/3">
        <h1 className="text-3xl font-semibold">Echo New</h1>
        <div className="contact-features">
          <div className="contact-feature flex items-center gap-2">
            <i class="fa-solid fa-comments"></i>
            <div className="">
              <h5>Chat To Us</h5>
              <p>We're here for you</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl basis-2/3 from-green-500 to-green-400 bg-gradient-to-b p-12 text-black flex flex-col justify-center">
        <h3 className="font-bold text-5xl mb-7">Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          possimus?
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className=" flex flex-col gap-4 mt-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="form-name" value="contact" />

          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows={3}
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full bg-gray-100 text-black py-2.5 rounded-xl hover:bg-black transition duration-400 cursor-pointer hover:text-white"
          >
            Send
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              ✅ Message Sent!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
