// src/components/MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header__container flex flex-col items-center p-8">
        <h2 className="text-sm text-orange-500 mb-2">Welcome to My Site</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Your Title Here <span className="text-purple-600">Highlight</span>
        </h1>
        <p className="text-gray-500 text-center mb-4">Your description goes here.</p>
        <div className="header__btns">
          <a href="#learn-more" className="bg-purple-600 text-white px-4 py-2 rounded">Learn More</a>
        </div>
      </header>

      {/* Steps Section */}
      <section className="steps__grid grid gap-4 mt-10">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="steps__card p-4 bg-white rounded shadow">
            <span className="text-2xl">{step}</span>
            <h4 className="font-bold">Step {step}</h4>
            <p>Description for step {step}.</p>
          </div>
        ))}
      </section>

      {/* Explore Section */}
      <section className="explore__grid grid gap-4 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="explore__card p-4 bg-white rounded shadow hover:bg-purple-600 transition duration-300">
            <span className="text-xl">{`Explore Item ${item}`}</span>
            <h4 className="font-bold">Title {item}</h4>
            <p>Description for item {item}.</p>
          </div>
        ))}
      </section>

      {/* Jobs Section */}
      <section className="job__grid grid gap-4 mt-10">
        {[1, 2, 3, 4].map((job) => (
          <div key={job} className="job__card p-4 bg-white rounded shadow hover:bg-purple-600 transition duration-300">
            <div className="job__card__header flex items-center">
              <img src={`https://via.placeholder.com/50`} alt="Company" className="rounded-full" />
              <h5 className="ml-2 font-semibold">Job Title {job}</h5>
            </div>
            <h4 className="font-bold">Company {job}</h4>
            <p className="text-gray-600">Job description for job {job}.</p>
          </div>
        ))}
      </section>

      {/* Offers Section */}
      <section className="offer__grid grid gap-4 mt-10">
        {[1, 2, 3, 4].map((offer) => (
          <div key={offer} className="offer__card p-4 bg-white rounded shadow">
            <img src={`https://via.placeholder.com/150`} alt="Offer" className="rounded mb-2" />
            <div className="offer__details flex">
              <span className="text-2xl font-bold">{offer}</span>
              <div className="pl-4">
                <h4 className="font-semibold">Offer Title {offer}</h4>
                <p className="text-gray-600">Details about offer {offer}.</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 p-4 mt-10">
        <div className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainContent;
