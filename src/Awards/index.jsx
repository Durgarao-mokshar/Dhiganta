export default function Awards() {
  return (
    <div className="grid lg:grid-cols-4 lg:gap-14 md:grid-cols-2 max-w-7xl py-36 px-16 mx-auto gap-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="uppercase mb-5 text-black font-bold text-4xl text-center">
          Awards
        </h3>
        <p className="text-sm text-gray-400 text-center max-w-sm">
          All of our products exist to help you customize your website and add
          some advanced functionality lacks.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-center">
          <img
            src="https://themezinho.net/parada/images/award1.jpg"
            className="h-20 w-40"
          />
        </div>
        <p className="uppercase text-sm text-center mb-3 ">website of the day</p>
        <div className="flex items-center justify-center">
          <img src="https://themezinho.net/parada/images/shape-gray-wave.png" />
        </div>
        <p className="text-center font-bold text-xl">13</p>
      </div>

      <div>
        <div className="flex items-center justify-center">
          <img
            src="https://themezinho.net/parada/images/award2.jpg"
            className="h-20 w-40"
          />
        </div>
        <p className="uppercase text-sm text-center mb-3">honorable mention</p>
        <div className="flex items-center justify-center">
          <img src="https://themezinho.net/parada/images/shape-gray-wave.png" />
        </div>
        <p className="text-center font-bold text-xl">13</p>
      </div>

      <div>
        <div className="flex items-center justify-center">
          <img
            src="https://themezinho.net/parada/images/award3.jpg"
            className="h-20 w-40"
          />
        </div>
        <p className="uppercase text-sm text-center mb-3">
          website of the month
        </p>
        <div className="flex items-center justify-center">
          <img src="https://themezinho.net/parada/images/shape-gray-wave.png" />
        </div>
        <p className="text-center font-bold text-xl">13</p>
      </div>
    </div>
  );
}
