"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState(0); // 5-second countdown

  useEffect(() => {
    if (timeLeft <= 0) {
      redirectToLink();
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 12);
      }, 1000);

      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [timeLeft]);

  const redirectToLink = () => {
    window.location.href = "https://bit.ly/4i3zgLf"; // Redirect link
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 text-white font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto:wght@300;400;700&display=swap");

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif; /* Primary font */
          background-color: #f3f4f6;
          overflow-x: hidden;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        button {
          cursor: pointer;
          font-family: "Roboto", sans-serif; /* More refined button font */
        }

        footer {
          backdrop-filter: blur(10px); /* Frosted glass effect */
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
      <div className="max-w-lg p-8 bg-white text-gray-900 rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105 animate-fade-in">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <img
            src="/logo.jpg" // Path to your logo
            alt="Lina Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <h1 className="text-4xl font-extrabold text-center text-gradient">
            እንኩአን ወደ Lina ኤጀንሲ በሰላም መጣችሁ ✋🏻✋🏻
          </h1>
        </div>
        <p className="text-lg text-gray-600 text-center mb-6">
          Experience exceptional services tailored just for you. We value our
          customers and strive for excellence in everything we offer.
        </p>
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">
            Redirecting in{" "}
            <span className="text-red-500 font-extrabold">{timeLeft}s</span>
          </p>
          <button
            onClick={redirectToLink}
            className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 animate-bounce"
          >
            Go Now
          </button>
        </div>
      </div>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-80 py-4 flex justify-around items-center text-white animate-slide-up">
        <button
          onClick={redirectToLink}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        >
          Learn More
        </button>
        <button
          onClick={redirectToLink}
          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        >
          Contact Us
        </button>
      </footer>
    </div>
  );
}
