import { useState, useEffect } from "react";
import { GradualSpacingDemo } from "./GradualSpacingDemo";
import { getContentJsonLang } from "@/services/langJson";

export default function Carousel({ lang }: { lang: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = getContentJsonLang("slideData", lang);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative w-full lg:h-[90vh] md:h-[60vh] h-[85vh]">
      {slides.items.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className=" object-cover w-full h-full"
          />
          <dt className="absolute h-full w-full bg-black bg-opacity-50 flex gap-3 flex-col justify-center md:items-start items-center text-white p-4 top-0 left-0">
            <h2 className="text-2xl text-center font-din">{slide.title}</h2>

            <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-4 gap-2 overflow-hidden md:text-4xl text-xl font-bold">
              {slide.subtitle.split(" ").map((word) => (
                <GradualSpacingDemo text={word} />
              ))}
            </div>
            {/* <h2 className="md:text-4xl text-xl font-bold text-center">
              <GradualSpacingDemo text={slide.subtitle} />

            </h2> */}

            <div className="lg:w-5/12 md:text-2xl lg:text-xl w-10/12 flex flex-wrap font-bergsland">
              {slide.description}
            </div>

            <button className="bg-[#ffff00] text-black font-bold py-2 px-4 rounded w-full max-w-xs transition duration-300 ease-in-out transform hover:scale-105">
              {slide.buttonText}
            </button>
          </dt>
        </div>
      ))}
    </div>
  );
}
