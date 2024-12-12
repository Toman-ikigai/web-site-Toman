import GradualSpacing from "@/components/ui/gradual-spacing";

export function GradualSpacingDemo({ text }: { text: string }) {
  return (
    <GradualSpacing
      className="font-display text-center font-bold -tracking-widest md:leading-[5rem]"
      text={text}
    />
  );
}
