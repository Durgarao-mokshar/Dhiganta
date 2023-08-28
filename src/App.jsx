import "./App.css";
import Dhiganta from "./Dhiganta";
import AnimationGreen from "./AnimationGreen";
import WhatWeDo from "./WhatWeDo";
import Clients from "./Clients";
import Awards from "./Awards";
import AnimationImage from "./AnimationImage";
import HeroComponent from "./heroComponent";
import FooterComponent from "./FooterComponent";
import ContactForm from "./ContactForm/ContactForm";
import Question from "./FaqComponent/FAQ";
import WhoAreWe from "./WhoAreWe/WhoAreWe";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [open, setOpen ] =  useState(true)
  return (
    <div>
      {open ? (
        <div className="min-h-screen min-w-screen flex justify-center items-center bg-green-800">
          <div className="flex flex-col gap-8 justify-center items-center text-white">
            <img src="./logoWhite.png" className="w-46 h-28" />
            <div onClick={()=>setOpen(!open)} className=" transition-transform ease-in-out duration-500 hover:border-gray-100 hover:scale-110 text-white">
							<div className="group  relative cursor-pointer border border-gray-100 px-3 py-1 rounded-full transition ease-in-out duration-500 hover:border-gray-100 hover:scale-105">
								<div className="uppercase text-xl flex items-center relative font-mono text-slate-100">
									{'Get Started'.split('').map((letter, i) => (
										<div
											key={i}
											className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
											style={{ transitionDelay: `${i * 80}ms` }}
										>
											{letter}
										</div>
									))}
									<div className="uppercase text-xl absolute bottom-0 left-0 flex items-center">
										{'Get Started'.split('').map((letter, i) => (
											<div
												key={i}
												className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
												style={{ transitionDelay: `${i * 50}ms` }}
											>
												{letter}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
          </div>
        </div>
      ) : (
        <div>
          <HeroComponent />
          <Dhiganta />
          <WhoAreWe />
          <WhatWeDo />
          {/* <AnimationGreen /> */}
          {/* <Clients /> */}
          {/* <AnimationImage /> */}
          {/* <Awards /> */}
          <Question />
          <ContactForm />
          <FooterComponent />
        </div>
      )}
    </div>
  );
}
