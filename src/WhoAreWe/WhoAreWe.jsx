export default function WhoAreWe() {
  return (
    <section className="min-h-screen h-full flex flex-col justify-center items-center relative py-16 px-4 ">
      <h1 className="uppercase mb-5 text-black font-bold text-4xl text-center absolute top-0 left-0 right-0 mx-auto">
        Who Are We
      </h1>

      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10  md:gap-6 gap-4">
        <div className=" group max-w-sm text-center flex flex-col gap-4 items-center justify-start shadow-xl hover:bg-green-900 p-5 transform-all duration-700 ease-in rounded-md hover:text-white">
          <img
            src="./joginaidu.jpeg"
            alt="ImageOne"
            className="rounded-full w-64 h-64 object-cover "
          />
          <h3 className="lg:text-3xl md:text-2xl text-xl">Yogi Naidu</h3>
          <p>
            A multi-talented cinema stalwart for two decades, Jogi Naidu has
            excelled as an actor, studio magnate, writer, director, and anchor.
            Their lasting impact resonates through captivating performances and
            visionary storytelling.
          </p>
        </div>
        <div className=" group max-w-sm text-center flex flex-col gap-4 items-center justify-start shadow-xl hover:bg-green-900 p-5 transform-all duration-700 ease-in rounded-md hover:text-white">
          <img
            src="./what_we_do_1.jpg"
            alt="ImageOne"
            className="rounded-full   w-64  h-64 object-cover "
          />
          <h3 className="lg:text-3xl md:text-2xl text-xl">Raju UVS</h3>
          <p>
            With 15 years in film and media, Raju UVS is a seasoned writer and
            director. His creative journey resonates through impactful
            storytelling, leaving an enduring cinematic imprint.
          </p>
        </div>
      </div>
    </section>
  );
}
