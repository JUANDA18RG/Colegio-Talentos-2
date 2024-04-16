export default function Servicios() {
  return (
    <div className="flex justify-center items-center pt-24">
      <div className="flex justify-between items-start animate-jump-in">
        <img
          src="rainbow.png"
          className="w-20 h-20 object-cover transform scale-x-[-1]"
        />
        <h1
          className="text-5xl font-bold text-center items-center border-4 border-red-500 py-3 px-4 inline-block rounded-lg shadow-lg bg-gradient-to-b from-red-500 to-red-400 text-white"
          id="servicios"
        >
          Servicios
        </h1>
        <img src="rainbow.png" className="w-20 h-20 object-cover" />
      </div>
    </div>
  );
}
