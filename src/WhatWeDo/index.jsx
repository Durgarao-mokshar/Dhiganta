export default function WhatWeDo(){
    return (
		<>
			<div className=" py-11">
				<div className=" text-black min-h-screen h-full flex justify-center items-center">
					<div className="text-center max-w-7xl mx-auto w-full p-2">
						<div className="text-center mb-12">
							<p className="font-bold  lg:text-6xl md:text-4xl text-2xl text-center">What We Do</p>
						</div>
						<div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 text-gray-900 popins">
							<div className=" shadow-lg p-6 rounded-md flex gap-6 flex-col hover:bg-green-300 transform transition-all duration-300 hover:scale-95">
								<div>
									<img src="./visualization.png" alt="visualization" className="w-1/2 mx-auto" />
									<p className="lg:text-4xl md:text-3xl text-2xl font-semibold bebas text-center">Visualization</p>
								</div>
								<ul className="text-center">
									<li className="border-b-3 bordr-2 p-1 popins"> Explainer Videos</li>
									<li className="border-b-3 bordr-2 p-1 popins"> 3D Videos</li>
									<li className="border-b-3 bordr-2 p-1 popins"> 2D Videos</li>
									<li className="p-1"> Live Shoot</li>
								</ul>
							</div>
							<div className=" shadow-lg p-6 rounded-md flex gap-6 flex-col hover:bg-green-300 transform transition-all duration-300 hover:scale-95">
								<div>
									<img src="./development.png" alt="development" className="w-1/2 mx-auto" />
									<p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center bebas">Development</p>
								</div>
								<ul className="text-center">
									<li className="border-b-3 bordr-2 p-1 popins"> Website</li>
									<li className="border-b-3 bordr-2 p-1 popins"> Mobile</li>
									<li className="border-b-3 bordr-2 p-1 popins"> UI</li>
									<li className="p-1"> UX</li>
								</ul>
							</div>
							<div className=" shadow-lg p-6 rounded-md flex gap-6 flex-col hover:bg-green-300 transform transition-all duration-300 hover:scale-95">
								<div>
									<img src="./positioning.png" alt="positioning" className="w-1/2 mx-auto" />
									<p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center bebas">Positioning</p>
								</div>
								<ul className="text-center">
									<li className="border-b-3 bordr-2 p-1 popins"> Branding</li>
									<li className="border-b-3 bordr-2 p-1 popins"> Strategy</li>
									<li className="border-b-3 bordr-2 p-1 popins"> Digital</li>
									<li className="p-1"> Packaging</li>
								</ul>
							</div>
							<div className=" shadow-lg p-6 rounded-md flex gap-6 flex-col hover:bg-green-300 transform transition-all duration-300 hover:scale-95">
								<div>
									<img src="./metaverse.png" alt="metaverse" className="w-1/2 mx-auto" />
									<p className="lg:text-4xl md:text-3xl text-2xl font-semibold bebas text-center">Metaverse</p>
								</div>
								<ul className="text-center">
									<li className="border-b-3 bordr-2 p-1 popins"> Augmented Reality</li>
									<li className="border-b-3 bordr-2 p-1 popins"> Virtual Reality</li>
									<li className="border-b-3 bordr-2 p-1 popins"> Extended Reality</li>
									<li className="p-1"> Digital Twin</li>
								</ul>
							</div>
						</div>

						{/* <div className="my-20">
							<div className="my-10 w-full flex justify-center items-center text-blue-900">
								<a href="https://mokshar.com" target="_blank" rel="noreferrer" className="text-center block  popins">
									<button className="px-6 py-2 bg-[#33af4e] text-white rounded-full">GET CREATIVE</button>
								</a>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
} 