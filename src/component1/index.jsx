export default function Index() {
  return<div className="flex flex-col items-center mt-10 gap-28 pb-24">

  <div className="text-center px-6 max-w-5xl">
    <h2 className="md:text-5xl lg:text-6xl text-4xl  font-light font-serif leading-tight">
    “Parada is a <span className="text-green-600 border-b border-solid border-green-600">creative digital agency</span>, composed of creative designers & experienced developers.”
    </h2>
  </div>

  <div className="lg:grid lg:grid-cols-3 gap-16 flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center">
      <img src="icon1.png" alt="UI-UX Design Icon" className="w-24 h-24"/>
      <div className="flex flex-col items-center justify-center w-60">
        <h3 className="text-lg font-semibold">UI-UX DESIGN</h3>
        <p className="text-gray-600 text-center">
          Because the jQuery function has a lot of code in it.
        </p>
      </div>
    </div>
    
    <div className="flex flex-col items-center justify-center">
      <img src="icon2.png" alt="Online Stores Icon" className="w-24 h-24"/>
      <div className="flex flex-col items-center justify-center w-60">
        <h3 className="text-lg font-semibold">ONLINE STORES</h3>
        <p className="text-gray-600 text-center">
          Which involves unnecessary overhead if you execute it.
        </p>
      </div>
    </div>
    
    <div className="flex flex-col items-center justify-center">
      <img src="icon3.png" alt="Development Icon" className="w-24 h-24"/>
      <div className="flex flex-col items-center justify-center w-60">
        <h3 className="text-lg font-semibold">DEVELOPMENT</h3>
        <p className="text-gray-600 text-center">
          More than once with the same inputs expecting the same.
        </p>
      </div>
    </div>
  </div>
</div>

  

}
