import type { LangData } from "@/types/types";

const getContentJsonLang = <T extends keyof LangData>(
  section: T,
  lang: string
): LangData[T] => {
  const languages = import.meta.glob<LangData>("../lang/*.json", {
    eager: true,
  });
  const langData =
    languages[`../lang/${lang}.json`] || languages["../lang/es.json"];

  return langData[section];
};

export { getContentJsonLang };
