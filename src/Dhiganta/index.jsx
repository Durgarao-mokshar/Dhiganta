export default function Dhiganta() {
  return (
    <>
      <div className="text-center bg-green-800 max-w-full py-28 px-9 text-white ">
        <h2 className="md:text-2xl lg:text-3xl text-xl font-light leading-tight">
          <span className="md:text-5xl lg:text-6xl text-3xl font-light font-serif leading-tight">
            “ Dhiganta
          </span>{" "}
          -{" "}
          <span className="text-yellow-200 border-b border-solid border-yellow-300">
            Illuminating Stories{" "}
          </span>
          Through Film Capturing Moments, Shaping Narratives{" "}
          <span className="md:text-5xl lg:text-6xl text-3xl font-light font-serif leading-tight">
            ”
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-col items-center mt-10 gap-28 pb-24">
        <div className="lg:grid lg:grid-cols-3  gap-20 flex flex-col items-center justify-center max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="icon1.png"
              alt="UI-UX Design Icon"
              className="w-24 h-24"
            />
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <h3 className="text-lg font-semibold text-center">
                Transforming Visions into Visuals
              </h3>
              <p className="text-gray-600 text-center ">
                creative designers and skilled developers collaborate to bring
                your stories to life, ensuring each frame resonates with your
                vision.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="icon2.png"
              alt="Online Stores Icon"
              className="w-24 h-24"
            />
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <h3 className="text-lg font-semibold text-center">
                Captivating Realities on Screen
              </h3>
              <p className="text-gray-600 text-center">
                we go beyond mere visuals, delving deep into the heart of each
                narrative to create impactful films that resonate with your
                audience
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <img src="icon3.png" alt="Development Icon" className="w-24 h-24" />
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <h3 className="text-lg font-semibold text-center">
                Crafting Documentary Experiences
              </h3>
              <p className="text-gray-600 text-center">
                Our dedicated team meticulously curates and crafts stories,
                aiming to evoke emotions, provoke thought, and leave a lasting
                impression on every viewer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
