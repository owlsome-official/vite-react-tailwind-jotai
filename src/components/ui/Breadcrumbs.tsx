import { cn } from "@/utils";
import { ReactNode } from "react";
import { UIMatch, useMatches } from "react-router-dom";
import ArrowRightIcon from "./icons/ArrowRight";

type _MatchHandle = {
  handle: {
    crumb: (data: unknown) => ReactNode;
  };
};

interface Props {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const Breadcrumbs = ({ className }: Props) => {
  const matches = useMatches();
  const crumbs = matches
    .filter((match: UIMatch) => {
      const matchIter = match as _MatchHandle;
      return Boolean(matchIter.handle?.crumb);
    })
    .map((match) => {
      const matchIter = match as _MatchHandle;
      return matchIter.handle.crumb(match.data);
    });
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {crumbs.map((elem, idx) => (
          <li key={idx} className="inline-flex items-center">
            <div className="flex items-center">
              <div className="flex items-center text-gray-300">
                {idx === 0 ? null : <ArrowRightIcon />}
                <span
                  className={cn(
                    "select-none text-sm font-medium hover:text-gray-100",
                    idx !== 0 && "ms-1 md:ms-2",
                    idx === crumbs.length - 1 && "pointer-events-none",
                  )}
                >
                  {elem}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
