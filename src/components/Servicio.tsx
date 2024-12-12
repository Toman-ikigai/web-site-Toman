import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Electricidad",
    username: "@servicios_electricos",
    body: "Instalaciones eléctricas profesionales, mantenimiento preventivo y correctivo. Especialistas en proyectos residenciales y comerciales.",
    img: "https://avatar.vercel.sh/electricity",
  },
  {
    name: "Automatización",
    username: "@smart_automation",
    body: "Sistemas de automatización industrial y domótica. Optimización de procesos y control inteligente para hogares y empresas.",
    img: "https://avatar.vercel.sh/automation",
  },
  {
    name: "Robótica",
    username: "@robotics_solutions",
    body: "Desarrollo e implementación de soluciones robóticas para industria y educación. Mantenimiento y programación de robots.",
    img: "https://avatar.vercel.sh/robotics",
  },
  {
    name: "Software",
    username: "@dev_solutions",
    body: "Desarrollo de software a medida, aplicaciones web y móviles. Soluciones tecnológicas para optimizar su negocio.",
    img: "https://avatar.vercel.sh/software",
  },
  {
    name: "Reparaciones",
    username: "@fix_master",
    body: "Servicio técnico especializado en reparaciones generales. Atención rápida y eficiente para emergencias.",
    img: "https://avatar.vercel.sh/repairs",
  },
  // {
  //   name: "Plomería",
  //   username: "@plumbing_pro",
  //   body: "Servicios de plomería residencial y comercial. Instalaciones, reparaciones y mantenimiento de sistemas hidráulicos.",
  //   img: "https://avatar.vercel.sh/plumbing",
  // },
  {
    name: "Sistemas de Seguridad",
    username: "@security_systems",
    body: "Instalación de cámaras de seguridad, alarmas y control de acceso. Protección integral para su hogar o negocio.",
    img: "https://avatar.vercel.sh/security",
  },
  // {
  //   name: "Carpintería",
  //   username: "@woodwork_expert",
  //   body: "Trabajos de carpintería fina, muebles a medida y restauraciones. Calidad y precisión en cada proyecto.",
  //   img: "https://avatar.vercel.sh/carpentry",
  // },
  // {
  //   name: "Herrería",
  //   username: "@metal_works",
  //   body: "Fabricación y reparación de estructuras metálicas. Trabajos de soldadura y herrería artística.",
  //   img: "https://avatar.vercel.sh/metalwork",
  // },
  {
    name: "Reparación de Equipos",
    username: "@tech_repair",
    body: "Servicio técnico especializado en computadoras, laptops y dispositivos electrónicos. Diagnóstico y reparación profesional.",
    img: "https://avatar.vercel.sh/techrepair",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Servicio() {
  return (
    <div className="relative flex sm:w-10/12 m-auto h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
