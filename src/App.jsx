import "./App.css";
import Dhiganta from "./Dhiganta";
import AnimationGreen from "./AnimationGreen";
import WhatWeDo from "./WhatWeDo";
import Clients from "./Clients";
import HowCanWeHelp from "./HowCanWeHelp";
import Awards from "./Awards";
import AnimationImage from "./AnimationImage";
import HeroComponent from "./heroComponent";
import FooterComponent from "./FooterComponent";
import ContactForm from "./ContactForm/ContactForm";
import Question from "./FaqComponent/FAQ";
import WhoAreWe from "./WhoAreWe/WhoAreWe";
import "./App.css";

export default function App() {
  return (
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
      <HowCanWeHelp />
      <ContactForm />
      <FooterComponent />
    </div>
  );
}
