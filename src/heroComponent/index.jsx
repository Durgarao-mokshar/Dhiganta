// import { useEffect,useState } from "react";
import Typewriter from "typewriter-effect";

export default function HeroComponent() {
  // const [scrollY, setScrollY] = useState(0);

  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
		<>
			<div className="bg-white flex items-center justify-center lg:p-3 md:p-2 p-1">
				<img src="./DhigantaLogo.png" alt="Dhigantaa logo" className="h-22 w-32" />
			</div>

			<div className="flex items-center justify-center w-full min-h-screen relative">
				<div className="absolute  min-h-screen  heroBgImage inset-0 w-full"></div>
				<div className="">
					<div className="flex flex-col gap-4 items-center justify-center font-playfair">
						<div className="capitalize font-bold lg:text-5xl md:text-4xl text-2xl text-gray-900 ">
							<Typewriter
								options={{
									strings: ['Essence', 'in Motion', 'Sagas ✨'],
									autoStart: true,
									loop: true,
									delay: 100
								}}
							/>
						</div>
						<h1 className=" text-xl  text-center mt-4 text-blue-900   font-serif max-w-3xl font-bold">
							Embark on captivating journeys with Dhiganta as they skillfully craft visual narratives. Revealing the very soul of each story
							through the artistry of documentary filmmaking
						</h1>

						<div className=" transition-transform ease-in-out duration-500 hover:border-gray-100 hover:scale-110 text-black">
							<div className="group  relative cursor-pointer border border-gray-900  px-3 py-1  rounded-full transition ease-in-out duration-500 hover:border-gray-800 hover:scale-110">
								<div className="uppercase text-xl flex items-center relative font-mono text-slate-900">
									{'Get Started'.split('').map((letter, i) => (
										<div
											key={i}
											className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
											style={{ transitionDelay: `${i * 80}ms` }}
										>
											{letter}
										</div>
									))}
									<div className="uppercase text-xl absolute bottom-0 left-0 flex items-center ">
										{'Get Started'.split('').map((letter, i) => (
											<div
												key={i}
												className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
												style={{ transitionDelay: `${i * 80}ms` }}
											>
												{letter}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <section className="lg:self-center bg-black rounded-md">
						<img src="Hero.jpg" className="rounded-md w-full" alt="Hero Section" loading="lazy" />
					</section> */}
				</div>
			</div>
		</>
  )
}
