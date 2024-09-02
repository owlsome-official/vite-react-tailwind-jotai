import { PropsWithChildren } from "react";

const PlainCenterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default PlainCenterLayout;
