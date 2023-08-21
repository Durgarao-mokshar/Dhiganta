export default function WhoAreWe() {
	return (
		<section className="min-h-screen h-full flex flex-col justify-center items-center relative py-16 px-4 ">
			<h1 className="font-bold  lg:text-6xl md:text-4xl text-2xl text-center absolute top-0 left-0 right-0 mx-auto">Who Are We</h1>

			<div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10  md:gap-6 gap-4">
				<div className=" max-w-sm text-center flex flex-col gap-4 items-center justify-center shadow-xl p-5">
					<img src="public\what_we_do_1.jpg" alt="ImageOne" className=" rounded-full w-64  h-64 object-cover " />
					<h3 className="lg:text-3xl md:text-2xl text-xl">Vijay</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum, eveniet natus culpa fugit, explicabo voluptate repellendus
						voluptatibus accusamus autem sequi qui consequatur enim ab odit nostrum illo ad fugiat?
					</p>
				</div>
				<div className=" max-w-sm text-center flex flex-col gap-4 items-center justify-center shadow-xl p-5">
					<img src="public\what_we_do_2.jpg" alt="ImageOne" className=" rounded-full w-64  h-64 object-cover " />
					<h3 className="lg:text-3xl md:text-2xl text-xl">Shriya</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum, eveniet natus culpa fugit, explicabo voluptate repellendus
						voluptatibus accusamus autem sequi qui consequatur enim ab odit nostrum illo ad fugiat?
					</p>
				</div>
			</div>
		</section>
	)
}
