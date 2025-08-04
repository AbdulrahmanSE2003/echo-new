function Modal({ setShowModal }) {
  return (
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
  );
}

export default Modal;
