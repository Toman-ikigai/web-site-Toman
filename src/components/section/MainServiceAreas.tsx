import React from "react";

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

interface ServiceAreaProps {
  title: string;
  description: string;
  icon: string;
}

const serviceAreas: ServiceAreaProps[] = [
  {
    title: "AUTOMATIZACIÓN",
    description:
      "Sistemas de control automático y soluciones de automatización industrial para optimizar sus procesos",
    icon: "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733959724/imagens/servicios/segq5ddqynro0w1lrbdl.png",
  },
  {
    title: "INFORMÁTICA",
    description:
      "Desarrollo de software, mantenimiento de sistemas y soluciones tecnológicas integrales",
    icon: "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733959724/imagens/servicios/ovp9gbtkoyxozkynaixb.png",
  },
  {
    title: "TRABAJO EN METAL",
    description:
      "Fabricación personalizada y trabajos especializados en estructuras metálicas",
    icon: "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733959724/imagens/servicios/vqp0m2pxkinmuqb14n04.png",
  },
  {
    title: "RED ELÉCTRICA",
    description:
      "Instalación y mantenimiento de sistemas eléctricos de alta calidad y eficiencia",
    icon: "https://res.cloudinary.com/dvggwdqnj/image/upload/v1733959725/imagens/servicios/qpvstm6wco3fojh1vmcy.png",
  },
];

const ServiceArea: React.FC<ServiceAreaProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white transition-all hover:shadow-xl">
    <div className="aspect-square w-full overflow-hidden">
      <img
        src={icon}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
    <div className="absolute bottom-0 p-6 text-white">
      <h3
        className="mb-2 text-xl font-bold"
        style={{ color: colors.primaryC.yellow }}
      >
        {title}
      </h3>
      <p className="transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {description}
      </p>
    </div>
  </div>
);

export const MainServiceAreas: React.FC = () => {
  return (
    <div
      className="w-full py-16 px-4 lg:w-10/12 m-auto"
      style={{ backgroundColor: colors.neutralC.white }}
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-12 text-center text-3xl font-bold"
          style={{ color: colors.primaryC.black }}
        >
          Áreas de Especialización
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((service) => (
            <ServiceArea key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainServiceAreas;
