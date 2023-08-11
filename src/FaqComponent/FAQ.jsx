import FAQ from "./questions";

export default function Question() {
  return (
    <div className="bg-[#fbf3e4] text-black">
      <div className="text-center py-32 max-w-7xl mx-auto h-full w-full min-h-screen p-4 flex flex-col gap-2">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold bebas my-10">
          QUESTIONS?
        </h1>

        <FAQ
          question="What is Dhiganta?"
          answer="Dhiganta is an organization specializing in crafting compelling documentary films. Our mission is to tell impactful stories through the art of filmmaking, capturing real-life narratives that resonate with audiences."
        />

        <FAQ
          question="What types of documentaries does Dhiganta create?"
          answer="We produce a diverse range of documentary films, covering various subjects such as social issues, environmental concerns, human stories, historical events, and much more. Our goal is to bring meaningful stories to life."
        />

        <FAQ
          question="How does Dhiganta approach documentary filmmaking?"
          answer="At Dhiganta, we believe in a creative and authentic approach to filmmaking. Our team is dedicated to thorough research, careful storytelling, and artistic presentation, ensuring that each documentary leaves a lasting impression."
        />

        <FAQ
          question="Can Dhiganta create custom documentaries for clients?"
          answer="Yes, we specialize in creating custom documentary films tailored to our clients' needs. Whether it's a corporate documentary, a promotional piece, or an educational film, we collaborate closely with our clients to bring their vision to the screen."
        />

        <FAQ
          question="What sets Dhiganta's documentaries apart from others?"
          answer="Our documentaries stand out due to their thought-provoking narratives and high production quality. We combine cinematic aesthetics with meaningful storytelling to create documentaries that engage, educate, and inspire audiences."
        />

        <FAQ
          question="How involved can clients be in the documentary creation process?"
          answer="We believe in collaboration, and our clients' input is valuable to us. We involve clients at various stages, from concept development to editing, ensuring that the final product aligns with their goals and expectations."
        />

        <FAQ
          question="What is the typical timeline for creating a documentary with Dhiganta?"
          answer="The timeline can vary based on the complexity and length of the documentary. On average, our documentary production process takes several weeks to a few months. We work diligently to deliver a high-quality film within a reasonable timeframe."
        />
      </div>
    </div>
  );
}
