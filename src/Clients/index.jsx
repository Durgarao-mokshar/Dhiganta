export default function Clients() {
  return (
    <footer className="max-w-7xl mx-auto  p-4 lg:py-32 md:py-24 py-20">
      <div>
        <h3 className="uppercase mb-5 text-black font-bold text-4xl text-center">Clients</h3>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-14 gap-10 md:grid-cols-2 md:gap-12  items-center justify-center">
        <div className="bg-white shadow-md px-12 py-3">
          <img
            src="https://themezinho.net/parada/images/logo1.jpg"
            alt="Client Logo"
          />
        </div>
        <div className="bg-white shadow-md px-12 py-3">
          <img
            src="https://themezinho.net/parada/images/logo2.jpg"
            alt="Client Logo"
          />
        </div>
        <div className="bg-white shadow-md px-12 py-3">
          <img
            src="https://themezinho.net/parada/images/logo3.jpg"
            alt="Client Logo"
          />
        </div>
        <div className="bg-white shadow-md px-12 py-3">
          <img
            src="https://themezinho.net/parada/images/logo4.jpg"
            alt="Client Logo"
          />
        </div>
      </div>
    </footer>
  );
}
