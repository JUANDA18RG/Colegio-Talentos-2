import { useState, useEffect } from "react";

const Navbar = () => {
  const [setScrollPosition] = useState(0);
  const [activeButton, setActiveButton] = useState("home"); // Set initial state to "home"

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="w-full mx-auto fixed top-0 py-3 sm:py-2 z-30 bg-gradient-to-t from-red-200 to-white shadow-lg animate-fade-down">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className=" items-center border-2 border-red-500 rounded-full mr-2 p-1">
                <img
                  src="Logo.jpg"
                  alt="Colegio Talentos"
                  className="h-14 w-14 rounded-full "
                />
              </div>
              <a
                href="/"
                className="text-xl font-extrabold uppercase  rounded-full p-2 "
              >
                Colegio Talentos
              </a>
            </div>
            <div className="flex space-x-10">
              <button
                className={`flex items-center animate-jump-in px-3 py-2 rounded-md transition duration-500 ease-in-out font-bold ${
                  activeButton === "home"
                    ? "text-white bg-red-500"
                    : "hover:text-white hover:bg-red-500"
                }`}
                onClick={() => {
                  scrollToSection("home");
                  setActiveButton("home");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="text-lg font-bold">Inicio</span>
              </button>
              <button
                className={`flex items-center animate-jump-in px-3 py-2 rounded-md transition duration-500 ease-in-out ${
                  activeButton === "servicios"
                    ? "text-white bg-red-500"
                    : "hover:text-white hover:bg-red-500"
                }`}
                onClick={() => {
                  scrollToSection("servicios");
                  setActiveButton("servicios");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <span className="text-lg font-bold">Servicios</span>
              </button>
              <button
                className={`flex items-center animate-jump-in px-3 py-2 rounded-md transition duration-500 ease-in-out ${
                  activeButton === "nosotros"
                    ? "text-white bg-red-500"
                    : "hover:text-white hover:bg-red-500"
                }`}
                onClick={() => {
                  scrollToSection("nosotros");
                  setActiveButton("nosotros");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <span className="text-lg font-bold">Nosotros</span>
              </button>
              <button
                className={`flex items-center animate-jump-in px-3 py-2 rounded-md transition duration-500 ease-in-out font-bold ${
                  activeButton === "contacto"
                    ? "text-white bg-red-500"
                    : "hover:text-white hover:bg-red-500"
                }`}
                onClick={() => {
                  scrollToSection("contacto");
                  setActiveButton("contacto");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <span className="text-lg font-bold">Contacto</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed bottom-0 left-0 right-0 z-50 opacity-85 transition-all duration-500 ease-in-out animate-fade-up">
        <img src="Footer.png" alt="" className="w-full h-20" />
      </div>
    </>
  );
};

export default Navbar;
