import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Contenido from "./Contenido/Contenido";
import Contacto from "./Contacto/Contacto";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner/Spinner";
import Servicios from "./Servicios/Servicios";
import Enlaces from "./Enlaces/Enlaces";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <div className="flex justify-center items-center min-h-screen">
      <Spinner />
    </div>
  ) : (
    <Suspense>
      <Navbar />
      <Header />
      <Servicios />
      <Contenido />
      <Contacto />
      <Enlaces />
    </Suspense>
  );
}

export default App;
