import React from "react";
import { Wrench, Rocket, Bug } from "lucide-react";

interface ServiceCardProps {
  icon: any;
  title: string;
  description?: string;
}

interface Service {
  icon: any;
  title: string;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center max-w-sm p-6 text-center">
    <div className="mb-4 p-4 bg-gray-100 rounded-lg border border-gray-200">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <h3 className="mb-3 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description ||
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    </p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: Wrench,
      title: "Maintenance",
    },
    {
      icon: Rocket,
      title: "Residental Service",
    },
    {
      icon: Bug,
      title: "Commercial Service",
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
