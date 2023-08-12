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
  <div className="bg-gradient-to-r from-orange-200 to-gray-300 flex items-center lg:justify-start md:justify-start justify-center lg:p-3 md:p-2 p-1">
    <img
      src="./DhigantaLogo.png"
      alt="Dhigantaa logo"
      className="h-22 w-32"
    />
  </div>
  <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-orange-200 to-gray-300">
    <div className="grid lg:grid-cols-2 lg:gap-32 md:grid-cols-2 md:gap-12 gap-6 capitalize font-bold lg:text-5xl md:text-4xl text-2xl max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-1 items-center justify-center font-playfair">
        <Typewriter
          options={{
            strings: ["essence", "in Motion", "Sagas ✨"],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </div>
      <section className="lg:self-center">
        <img src="Hero.jpg" className="rounded-md w-full" alt="Hero Section" />
      </section>
    </div>
  </div>
</>
  );
}
