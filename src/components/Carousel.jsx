// src/components/Carousel.js

import React from 'react';
import Slider from 'react-slick';
import { FaMoneyBillWave, FaBriefcase } from 'react-icons/fa'; // Importing react-icons
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpeg';
import img3 from '../assets/image3.jpeg';
import img4 from '../assets/image4.jpg';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true, // Adds a fade effect
    };

    const slides = [
        { img: img1, text: "Remote Software Engineer", salary: "$80,000 - $120,000", location: "Anywhere" },
        { img: img2, text: "Product Manager", salary: "$90,000 - $130,000", location: "Remote" },
        { img: img3, text: "Data Scientist", salary: "$100,000 - $150,000", location: "Worldwide" },
        { img: img4, text: "UI/UX Designer", salary: "$70,000 - $110,000", location: "Flexible" },
    ];

    return (
        <div className="relative w-3/4 mx-auto">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <img
                            src={slide.img}
                            alt={`Job ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg" // Height reduced and rounded
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50 p-4">
                            <h3>{slide.text}</h3>
                            <div className="flex items-center mt-2">
                                <span className="mr-2">{slide.salary} <FaMoneyBillWave /></span>
                                <span>{slide.location} <FaBriefcase /></span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;