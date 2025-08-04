import { useState } from "react";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const form = e.target;

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(new FormData(form)).toString(),
  //   })
  //     .then(() => {
  //       setShowModal(true);
  //       form.reset();
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }
  return (
    <div
      className="contact flex h-screen p-7 max-h-screen bg-white gap-4
    "
    >
      <div className=" basis-1/3">
        <h1 className="text-3xl font-semibold">Echo New</h1>
        <div className="contact-features mt-6 p-3 flex flex-col gap-6 ">
          <div className="contact-feature pr-12 flex items-center gap-7">
            <div className="flex justify-center items-center border border-gray-200 rounded-xl p-2 hover:border-gray-400 transition duration-500 self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-messages-square-icon lucide-messages-square"
              >
                <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-2xl">Chat To Us</h5>
              <p className="text-gray-500 font-medium">
                We're ready to help you anytime
              </p>
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-black transition duration-300"
              >
                someone@example.com
              </a>
            </div>
          </div>
          <div className="contact-feature pr-12 flex items-center gap-7">
            <div className="flex justify-center items-center border border-gray-200 rounded-xl p-2 hover:border-gray-400 transition duration-500 self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin-icon lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-2xl">Visit Us</h5>
              <p className="text-gray-500 font-medium">
                We’d love to meet you in person
              </p>
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-black transition duration-300"
              >
                123 Main Street, City Name, Country
              </a>
            </div>
          </div>
          <div className="contact-feature pr-12 flex items-center gap-7">
            <div className="flex justify-center items-center border border-gray-200 rounded-xl p-2 hover:border-gray-400 transition duration-500 self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-2xl">Call Us</h5>
              <p className="text-gray-500 font-medium">
                Available Monday to Friday, 10AM – 8PM
              </p>
              <a
                href="#"
                className="font-medium text-gray-700 hover:text-black transition duration-300"
              >
                0135453435
              </a>
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
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

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

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default Contact;
