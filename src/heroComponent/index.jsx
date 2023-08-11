// import { useEffect,useState } from "react";
import Typewriter from 'typewriter-effect'

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
    <div className=" flex justify-center items-center bg-white w-full h-screen realative">
      <div className="p-4 absolute inset-0 z-50">
        <img
          src="./DhigantaLogo.png"
          alt="digantaa logo"
          className="h-23 w-36"
        />
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-4 md:gap-7  gap-10 capitalize font-bold text-5xl max-w-7xl mx-auto">
        <div className="flex flex-col gap-1 items-center justify-center font-playfair text-6xl">
        <Typewriter
							options={{
								strings: ['essense','in Motion','Sagas ✨'],
								autoStart: true,
								loop: true,
                delay:100
							}}
						/>
            {/* <Typewriter
							options={{
								strings: [` in Motion:'`],
								autoStart: true,
								loop: true,
                delay:300

							}}
						/>
            <Typewriter
							options={{
								strings: [`'Sagas '`],
								autoStart: true,
								loop: true,
                delay:700

							}}
						/> */}
          
        </div>
        <section className='mt-12'>
         
        </section>
      </div>
      {/* <div className="absolute top-44 left-1/3 z-40 max-w-7xl mx-auto">
        <img
          src="https://everest.engineering/images/loop.svg "
          className=" h-full w-full "
        />
      </div> */}
    </div>
  );
}
