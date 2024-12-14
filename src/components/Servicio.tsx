import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { getContentJsonLang } from "@/services/langJson";

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
        // dark styles optimized for black background
        "border-secondaryC-gray/20 bg-primaryC-black/30 hover:bg-primaryC-black/40",
        "text-neutralC-white"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-primaryC-yellow">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-secondaryC-gray/80">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-secondaryC-gray">
        {body}
      </blockquote>
    </figure>
  );
};

export function Servicio({ lang }: { lang: string }) {
  const { items } = getContentJsonLang("reviews", lang);

  const firstRow = items.slice(0, items.length / 2);
  const secondRow = items.slice(items.length / 2);
  return (
    <div className="relative flex lg:w-10/12 m-auto h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#2C2C2C]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#2C2C2C]"></div>
    </div>
  );
}
