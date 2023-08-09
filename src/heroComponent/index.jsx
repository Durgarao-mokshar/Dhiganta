// import { useEffect,useState } from "react";
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
          <section className="hero bg-cover bg-center h-screen relative flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://themezinho.net/parada/images/hero1.jpg')" }}></div>
      <div className="container mx-auto text-center z-10">
        <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-white text-lg">Discover amazing content that will inspire you.</p>
      </div>
    </section>
        );
}
