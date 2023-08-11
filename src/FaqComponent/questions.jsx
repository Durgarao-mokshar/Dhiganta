/* eslint-disable react/prop-types */
import { useState } from "react";
export default function FAQ({question, answer}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <div
          className={`flex items-start gap-5 justify-between bg-gray-100 p-4 cursor-pointer transition duration-300 shadow-md popins`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="lg:text-xl md:text-xl text-start">
            {question}
          </h3>
          <div className="h-full flex items-center justify-center">
            {isOpen ? (
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
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="bg-gray-100 p-4 text-start shadow-md">
            <p className="lg:text-base text-sm">{ answer}</p>
          </div>
        )}
      </div>
    );
  }