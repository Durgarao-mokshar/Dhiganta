export default function WhatWeDo() {
  const topics = [
    {
      image: "./filmmaking.avif",
      title: "Film Making",
      description:
        "Explore the mesmerizing world of film making, where creativity meets technology to bring stories to life. From conceptualization to screenplay, casting to shooting, and editing to final production, this process involves a symphony of talents. Dive into the magic of storytelling through motion pictures and learn about the collaborative efforts that make it all possible.",
    },
    {
      image: "./ads.avif",
      title: "Crop Rate Ads",
      description:
        "Unearth the secrets of captivating crop rate advertisements that engage, inform, and drive action. Discover how agricultural businesses strategically market their products and services through compelling visuals, persuasive messaging, and up-to-date information. This exploration delves into the intersection of modern advertising techniques and the agriculture industry.",
    },
    {
      image: "./documentary.avif",
      title: "Documentary",
      description:
        "Immerse yourself in the world of documentary filmmaking, where reality takes center stage. From capturing impactful narratives to shedding light on pressing social issues, documentaries have the ability to inform, inspire, and invoke change. Learn how documentarians research, interview, film, and edit their way to telling authentic stories that resonate with audiences worldwide.",
    },
    {
      image: "./postproduction.avif",
      title: "Post Production",
      description:
        "Venture into the behind-the-scenes realm of post production, where raw footage transforms into cinematic brilliance. Discover the meticulous process of editing, sound design, visual effects, color grading, and more. This exploration unveils the unsung heroes who add the finishing touches to films, videos, and multimedia projects, elevating them to their full potential.",
    },
    {
      image: "./profileshoot.avif",
      title: "Profile Shoot",
      description:
        "Embark on a visual voyage through the world of profile photography, where personalities come to life through images. Whether for personal branding, social media, or professional use, profile shoots encapsulate the uniqueness of individuals. Learn about lighting, composition, posing, and the art of making subjects feel at ease, resulting in striking portraits that tell stories with just a glance.",
    },
  ];

  return (
    <>
      <div className=" py-11">
        <div className=" text-black min-h-screen h-full flex justify-center items-center">
          <div className="text-center max-w-7xl mx-auto w-full p-2">
            <div className="text-center mb-12">
              <p className="uppercase mb-5 text-black font-bold text-4xl text-center">
                What We Do
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 text-gray-900 popins">
              {topics.map((ele, index) => (
                <div key={index} className="shadow-lg hover:shadow-2xl">
                  <div className="flex flex-col gap-4 p-4">
                    <div className="w-full h-80">
                      <img
                        src={ele.image}
                        alt={ele.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-start flex flex-col gap-2 p-4">
                      <p className="text-2xl font-semibold text-center">
                        {ele.title}
                      </p>
                      <p>{ele.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
