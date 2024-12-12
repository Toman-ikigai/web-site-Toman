import { useState } from "react";
import { Eye } from "lucide-react";

// Color Palette
const colors = {
  primaryC: {
    yellow: "#FFD966",
    black: "#2C2C2C",
  },
  secondaryC: {
    gray: "#E0E0E0",
    orange: "#FFA500",
  },
  neutralC: {
    white: "#FFFFFF",
    brown: "#D2B48C",
  },
};

// ProjectCard Component
const ProjectCard = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden"
      style={{
        backgroundColor: colors.neutralC.white,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div
        className="relative w-full h-48 overflow-hidden"
        style={{
          backgroundColor: colors.primaryC.yellow,
        }}
      >
        <img
          src={image || "/api/placeholder/400/250"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            filter: isHovered ? "brightness(70%)" : "brightness(100%)",
          }}
        />

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <Eye
              color={colors.neutralC.white}
              size={48}
              className="opacity-80 hover:opacity-100 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div
        className="p-4"
        style={{
          backgroundColor: colors.neutralC.white,
          color: colors.primaryC.black,
        }}
      >
        <h3
          className="text-xl font-bold mb-2 truncate"
          style={{ color: colors.secondaryC.orange }}
        >
          {title}
        </h3>
        <p
          className="text-sm line-clamp-3"
          style={{ color: colors.primaryC.black }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Project Showcase Component
const ProjectShowcase = () => {
  const projects = [
    {
      title: "Proyecto Innovación",
      image: "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733960985/imagens/ooslmos6jf10frvcznuu.jpg",
      description:
        "Un proyecto revolucionario que combina tecnología de punta con soluciones creativas para resolver desafíos empresariales complejos.",
    },
    {
      title: "Desarrollo Sostenible",
      image: "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733960985/imagens/vhld32il83d6nypf5tcg.jpg",
      description:
        "Iniciativa enfocada en crear soluciones ecológicas y sostenibles que contribuyan al cuidado del medio ambiente y la responsabilidad social.",
    },
    {
      title: "Transformación Digital",
      image: "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733960985/imagens/medjsuumj86ydcv86mna.jpg",
      description:
        "Estrategia integral para modernizar procesos empresariales mediante la implementación de tecnologías digitales de última generación.",
    },
  ];

  return (
    <div
      className="p-6 flex flex-col items-center justify-center"
      style={{
        backgroundColor: colors.neutralC.white,
      }}
    >
      <h2
        className="text-3xl font-bold mb-8 text-center"
        style={{
          color: colors.secondaryC.orange,
        }}
      >
        Nuestros Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
