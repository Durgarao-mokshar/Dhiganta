import  { useState } from "react";
import './App.css'

const App = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div>
      <div
        id="navigation"
        className={` ${
          click ? "translate-x-0" : "-translate-x-full"
        } bg-green-100 fixed top-0 left-0 h-screen w-full transform transition-transform duration-300 flex items-center justify-center `}
      >
        <ul className="flex flex-col items-center justify-center gap-14 text-xl">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Why Dhiganta</a>
          </li>
          <li>
            <a href="#">Our Clients</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      <nav className="bg-green-100 w-screen fixed top-0 left-0 right-0 h-24 flex justify-between items-center p-4">
        <div>
          <img src="./DhigantaLogo.png" alt="digantaa logo" className="h-20 w-40" />
        </div>

        <div onClick={handleClick} className="cursor-pointer">
          {click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </nav>
    </div>
  );
};

export default App;
