import BackgroundBeams from "@/components/ui/BackgroundBeams";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <BackgroundBeams />
      <div className="z-10">{children}</div>
    </main>
  );
};

export default MainLayout;
