import { useState, useRef } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  const data = [
    { _id: 1, name: "Explainer Videos" },
    { _id: 2, name: "3D Animations" },
    { _id: 3, name: "Branding" },
    { _id: 4, name: "Live Shoot" },
    { _id: 5, name: "Web Development" },
    { _id: 6, name: "Mobile Development" },
    { _id: 7, name: "UI / UX" },
    { _id: 8, name: "Metaverse" },
    { _id: 9, name: "Digital Marketing" },
    { _id: 10, name: "Product Design" },
  ];

  const handleClick = () => {
    // Scroll to the ref element
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const post = {
      message,
      email,
      name,
      service,
    };
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className={`bg-white`}>
      <div className="max-w-7xl mx-auto"></div>
      <div className="border-b border-[#333333]"></div>
      <div className=" py-24 p-4" ref={scrollRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl w-full mx-auto">
          <div className="w-full h-full flex flex-col justify-start items-start py-12 p-4">
            <div className="text-gray-900 lg:text-2xl text-xl">
              <p data-aos="fade-up">To make your ideas move </p>
            </div>
            <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-orange-400 py-6">
              <p data-aos="fade-up">Elevating </p>
              <p data-aos="fade-up">Stories,</p>
              <p data-aos="fade-up">Cinematically.</p>
            </div>
            <div className="text-gray-900 lg:text-xl">
              <p data-aos="fade-up">info@dhiganta.com</p>
            </div>
          </div>
          {success ? (
            <div className="w-full h-full flex flex-col justify-center items-center text-center py-32">
              <p className="text-4xl text-[#F2751A] ">Thank you</p>
              <p className="text-3xl text-gray-900">
                your form has been submitted!
              </p>
            </div>
          ) : (
            <form
              onSubmit={submitForm}
              autoComplete="off"
              className="w-full h-full flex flex-col"
            >
              <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                <div className="relative z-0 w-full m-1">
                  <label htmlFor="floating_standard" className=" p-1">
                    Your Name
                  </label>
                  <input
                    autoComplete="off"
                    required
                    type="text"
                    id="floating_standard"
                    className="w-full bg-gray-100 outline-none  p-3"
                    placeholder=" "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="relative z-0 w-full m-1">
				<label
                    htmlFor="floating_standard"
                    className="p-1"
                  >
                    Your Email
                  </label>
                  <input
                    autoComplete="off"
                    required
                    type="email"
                    id="floating_standard"
                    className="w-full bg-gray-100  outline-none p-3"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                </div>
              </div>
              <div className="w-full h-full p-4 pt-2">
                <div className="relative z-0 w-full m-1">

					<label className="p-1">
						Tell us about your project
					</label>
                  <textarea
                    autoComplete="off"
                    required
                    type="text"
                    id="floating_standard"
                    className="w-full bg-gray-100  outline-none p-3"
                    placeholder=" "
                    value={message}
                    onChange={(e) => {
                      if (e.target.value.length < 1001) {
                        setMessage(e.target.value);
                      }
                    }}
                  />
                  
                </div>
                <div className="flex justify-end text-gray-900">
                  <p className="text-sm py-1">{message.length}/1000</p>
                </div>
              </div>
              <div>
                <div className="p-4">
                  <p className="text-3xl text-gray-900">Im interested in...</p>
                </div>
                <div className="p-4 flex items-center flex-wrap">
                  {data.map((ele) => (
                    <div
                      onClick={() => {
                        if (service.find((value) => value._id === ele._id)) {
                          setService(
                            service.filter((value) => value._id !== ele._id)
                          );
                        } else {
                          setService([...service, ele]);
                        }
                      }}
                      key={ele._id}
                      className={`px-6 py-3 cursor-pointer border-2 rounded-full flex justify-center items-center text-blue-900 font-semibold my-2 mr-4 hover:scale-110 hover:border-[#fde047] hover:bg-orange-400 ${
                        service.find((service) => service._id === ele._id)
                          ? "bg-[#F2751A] border-[#F2751A]"
                          : "border-[#FDE047]"
                      }`}
                    >
                      {service.find((service) => service._id === ele._id) && (
                        <img
                          className="w-3.5 h-3.5 opacity-100 mr-1"
                          src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                        />
                      )}
                      <p className="text-sm">{ele.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-start p-4">
                <input
                  required
                  type="checkbox"
                  className="accent-[#F2751A] border-2 border-gray-200"
                />
                <p className="text-gray-900 pl-4">
                  I agree with your{" "}
                  <span className="text-[#F2751A]">privacy policy</span>
                </p>
              </div>
              <div className="p-4">
                <div>
                  <button
                    type="submit"
                    className="bg-white font-semibold text-blue-800 border border-[#FDE047] px-6 py-3 rounded-full flex justify-between items-center hover:bg-[#F2751A] hover:text-gray-900 transition delay-75 duration-300 ease-in-out"
                  >
                    {!loading && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    )}
                    <span className={`${loading ? "" : "ml-2"}`}>
                      {loading ? "loading..." : "submit"}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
