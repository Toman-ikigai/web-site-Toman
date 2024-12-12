import { useState, useEffect } from "react";
import { GradualSpacingDemo } from "./GradualSpacingDemo";

interface SlideData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const slides: SlideData[] = [
  {
    image:
      "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733960985/imagens/ooslmos6jf10frvcznuu.jpg",
    title: "SISTEMAS MES",
    subtitle: "GABINETE DE COMUNICACIÓN",
    description:
      "Esta diseñado para desplegar rapidamente una red Ethernet entre lienas de produccion y la planta.",
    buttonText: "MAS INFORMACION",
  },
  {
    image:
      "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733960985/imagens/vhld32il83d6nypf5tcg.jpg",
    title: "INOVACIONES TI",
    subtitle: "SERVICIOS DE INFORMÁTICA",
    description:
      "Servicios y soluciones relacionadas con las gestion, el soporte y la implementacion de tecnologias de la informacion en una organizacion.",
    buttonText: "MAS INFORMACION",
  },
  {
    image:
      "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733960985/imagens/medjsuumj86ydcv86mna.jpg",
    title: "SUMINISTRO",
    subtitle: "DISTRIBUCION DE MATERIALES",
    description:
      "Involucra la logistica, el transporte, el almacenamiento y la supervision de los materiales a lo largo de toda la cadena de suministro.",
    buttonText: "MAS INFORMACION",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative w-full lg:h-screen h-[70vh]">
      {slides.map((slide, index) => (
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
          <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-3 flex-col justify-center items-center text-white p-4">
            <h2 className="text-2xl font-bold text-center">{slide.title}</h2>
            <h2 className="md:text-4xl text-xl font-bold text-center">
              <GradualSpacingDemo text={slide.subtitle} />
              {/* {slide.title} */}
            </h2>
            <div className="lg:w-5/12 md:text-2xl lg:text-xl w-10/12 text-center flex flex-wrap">
              {slide.description}
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-2 rounded w-full max-w-xs transition duration-300 ease-in-out transform hover:scale-105">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
