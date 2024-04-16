export default function Facebook() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end m-1">
      <button
        className="bg-blue-700 text-white px-3 py-1 rounded flex items-center justify-center mb-5 group"
        onClick={() =>
          window.open(
            "https://www.facebook.com/colegiotalentostulua/?locale=es_LA",
            "_blank"
          )
        }
      >
        <img src="Facebook.png" alt="" className=" h-8 w-8 rounded-full" />
        <span className="ml-2 hidden group-hover:block  transition-all duration-500 ease-in-out">
          Facebook
        </span>
      </button>
      <button
        className="bg-green-500 text-white px-3 py-1 rounded flex items-center justify-center group"
        onClick={() => window.open("https://wa.me/1234567890", "_blank")}
      >
        <img src="Wasa.png" alt="" className="h-8 w-8 rounded-full " />
        <span className="ml-2 hidden group-hover:block  transition-all duration-500 ease-in-out">
          WhatsApp
        </span>
      </button>
    </div>
  );
}
