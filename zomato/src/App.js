import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import Image from "./Image.jpg";

const App = () => {
  const [page, setPage] = useState(1);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showHappyBirthday, setShowHappyBirthday] = useState(false);

  const handleNextPage = () => setPage(page + 1);

  const triggerFireworks = () => {
    setShowAnimation(true);
    setShowHappyBirthday(true); // Show "Happy Birthday!" text after clicking
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundColor:
          page === 2 && showAnimation ? "transparent" : "#f3f4f6", // Make the background transparent when fireworks show
      }}
    >
      {/* Full-screen background color for fireworks */}
      {page === 2 && showAnimation && (
        <div className="full-screen-background"></div>
      )}

      {page === 1 && (
        <div className="page1-content">
          <h1 className="text-3xl font-bold mb-4 birthday">
            Oh, it’s YOU again! 😏
          </h1>
          <p className="text-lg mb-6">
            Couldn’t resist checking what this is about, huh? Well, let’s see
            where this goes...
          </p>
          <button
            onClick={handleNextPage}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Let’s Go
          </button>
        </div>
      )}

      {page === 2 && (
        <div>
          {showHappyBirthday ? (
            <>
              <h1 className="text-3xl font-bold mb-4 text-white hbirthday">
                Happy Birthday! 🎉🎂
              </h1>
              <button
                onClick={handleNextPage} // Go to the next page
                className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Next
              </button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4 text-white birthday">
                Click the button below for a surprise! 🎁
              </h1>
              <button
                onClick={triggerFireworks}
                className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
              >
                Click Me
              </button>
            </>
          )}

          {showAnimation && (
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="firework"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: 360 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  style={{
                    position: "absolute",
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: "20px",
                    height: "20px",
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    borderRadius: "50%",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {page === 3 && (
        <div className="card-container">
          <div className="card">
            <img
              src={Image} // Replace this with your image URL
              alt="Us"
              className="card-image"
            />
            <div className="card-text">
              <h1 className="text-3xl font-bold mb-4">
                Happy Birthday, Garimaaaa! 🎉❤️
              </h1>
              <p className="text-lg">
                I didn't knew from know-where we have that meet, but from there,
                there was no going back. I know everyone is making sure to make
                your day special, I just added more in the celebration to make
                you feel more special. Hope I made it! Here wishing you all
                love, tons of success and wishing more of our coffee dates!
                Here’s to many more amazing memories together. 💕
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
