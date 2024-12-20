interface HeaderItem {
  name: string;
  url: string;
}

interface SlideItem {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
}

interface ServiceItem extends Pick<SlideItem, "title" | "description"> {
  icon: string;
}

interface ReviewsItem {
  name: string;
  username: string;
  body: string;
  img: string;
}

interface BenefitsDataItem {
  title: string;
  content: string;
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
}

interface ServiceAreaItem extends Pick<SlideItem, "title" | "description"> {
  icon: string;
}

interface CatalogItem
  extends Pick<SlideItem, "title" | "description" | "image"> {
  url_pdf: string;
}

interface ProjectsItem
  extends Pick<SlideItem, "title" | "description" | "image"> {}

interface MissionandVision {
  title: string;
  content: string[];
}

interface Programas extends MissionandVision {}

interface Description {
  title: string;
  descripcion: string;
}

interface Spot {
  title: string;
  content: string;
}

interface Informacion {
  title: string;
  content: string;
  descripcion: Description[];
}

interface About {
  spot: Spot;
  informacion: Informacion;
  mision: string;
  vision: string;
  valores: {
    icon: string;
    label: string;
  }[];
}
interface LangData {
  header: {
    items: HeaderItem[];
  };
  slideData: {
    items: SlideItem[];
  };
  services: {
    items: ServiceItem[];
  };
  reviews: {
    items: ReviewsItem[];
  };
  benefitsData: BenefitsDataItem;
  serviceAreas: {
    items: ServiceAreaItem[];
  };
  catalogItems: {
    items: CatalogItem[];
  };
  projects: {
    items: ProjectsItem[];
  };
  missionandVision: MissionandVision;
  programas: Programas;
  about: About;
}

enum Lang {
  es = "es",
  en = "en",
}
type LangType = keyof typeof Lang;
export { LangData, Lang, LangType };
