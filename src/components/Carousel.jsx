import React from 'react';
import Slider from 'react-slick';
import { FaMoneyBillWave } from 'react-icons/fa'; // Importing react-icons
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
        customPaging: (i) => (
            <button className="w-6 h-6 rounded-full bg-gray-400 transition duration-200 mx-2" />
        ),
        appendDots: (dots) => (
            <div className="flex justify-center mt-4">
                {dots}
            </div>
        ),
    };

    const slides = [
        { img: img1, text: "Remote Software Engineer" },
        { img: img2, text: "Product Manager" },
        { img: img3, text: "Data Scientist" },
        { img: img4, text: "UI/UX Designer" },
    ];

    return (
        <div className="relative w-full md:w-[76%] mx-auto mt-20 rounded-md overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <img
                            src={slide.img}
                            alt={`Job ${index + 1}`}
                            className="w-full h-72 object-cover rounded-md"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
                            <h3 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                {slide.text}
                            </h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
