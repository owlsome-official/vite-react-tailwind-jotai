import { PropsWithChildren } from "react";

import BackgroundGradient from "@/components/ui/BackgroundGradient";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const BackgroundCardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BackgroundGradient>
        <Breadcrumbs className="ml-8 py-1" />
        <div className="shadow-xl">{children}</div>
      </BackgroundGradient>
    </>
  );
};

export default BackgroundCardLayout;
