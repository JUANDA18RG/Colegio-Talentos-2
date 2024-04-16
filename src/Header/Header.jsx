import { useState, useEffect } from "react";
import { useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => [
      "Banner.jpg",
      "Banner2.jpg",
      "Banner3.jpg",
      "Banner5.jpg",
      "Banner4.jpg",
      "Banner6.jpg",
    ],
    []
  ); // Rutas de las imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar la imagen de fondo cada cierto tiempo
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambiar cada 5 segundos (5000 ms)

    return () => clearInterval(interval);
  }, [images]);

  const bgStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    transition: "background-image 0.6s ease-in-out",
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat animate-fade-left"
        style={bgStyle}
        id="home"
      >
        <img
          src="Dibujos.png"
          alt="Fondo"
          className="absolute inset-0 m-auto w-auto h-auto object-contain z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent sm:bg-transparent"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-between z-20">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              ¡Bienvenido al Portal Web del Colegio
              <strong className="block font-extrabold text-red-700 mt-2">
                TALENTOS TULUA!
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Formamos Talentos para el Futuro, Preescolar y Básica Primaria
              con:
              <TypeAnimation
                sequence={[
                  "Creatividad ✒️",
                  2000,
                  "Innovación 🧠",
                  2000,
                  "Recreación ⚽",
                  2000,
                ]}
                speed={30}
                wrapper="span"
                repeat={Infinity}
                className="text-red-600 ml-2"
              />
            </p>

            <div className="flex items-center justify-center mt-3 mr-14">
              <div className="bees relative  scale-x-[-1] bottom-8">
                <span></span>
              </div>
              <button className="mx-8 bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg items-center justify-center hover:animate-shake">
                TalenToast
              </button>
              <div className="bees relative bottom-8 right-2">
                <span></span>
              </div>
            </div>
          </div>
          <div
            className="flex justify-end bg-white items-center border-4 border-red-500 animate-jump-in p-2"
            style={{ borderRadius: "50%", overflow: "hidden" }}
          >
            <img
              src="Logo.jpg"
              alt=""
              className="h-80 w-80 object-contain m-3"
            />
          </div>
        </div>
      </section>

      <div
        id="carouselExampleSlidesOnly"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      ></div>
    </>
  );
};

export default Header;
