import HoverBorderGradient from "components/ui/HoverBorderGradient";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onClickPrimaryButton?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  onClickSecondaryButton?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const TitleWithCta = ({
  primaryButtonLabel = "Checkout the project",
  secondaryButtonLabel = "",
  onClickPrimaryButton = () => null,
  onClickSecondaryButton = () => null,
  children,
}: Props) => {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center p-4">
      <h1 className="relative z-10 bg-gradient-to-b from-teal-300 to-violet-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl">
        Hello from the other side.
      </h1>
      <p className="relative z-10 mx-auto my-2 max-w-lg text-sm text-gray-500">
        The template{" "}
        <span className="font-bold">vite-react-tailwind-jotai</span> powered by{" "}
        <a
          href="https://www.github.com/buildingwatsize"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline"
        >
          buildingwatsize
        </a>
      </p>
      {children}
      <div className="mt-2 flex gap-2">
        <HoverBorderGradient
          className="transition-all duration-150 hover:bg-white hover:text-violet-600"
          onClick={onClickPrimaryButton}
        >
          {primaryButtonLabel}
        </HoverBorderGradient>
        {secondaryButtonLabel && (
          <HoverBorderGradient
            className="bg-white text-gray-500 transition-all duration-150 hover:text-violet-600"
            onClick={onClickSecondaryButton}
          >
            {secondaryButtonLabel}
          </HoverBorderGradient>
        )}
      </div>
    </div>
  );
};

export default TitleWithCta;
