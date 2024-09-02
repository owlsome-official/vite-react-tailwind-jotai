import { useNavigate } from "react-router-dom";

import VersionCapsule from "@/components/landing/VersionCapsule";
import MainLayout from "@/layouts/MainLayout";
import TitleWithCta from "components/landing/TitleWithCta";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <VersionCapsule />
      <TitleWithCta
        primaryButtonLabel="Get started"
        onClickPrimaryButton={() => navigate("/about")}
        secondaryButtonLabel="Example Component"
        onClickSecondaryButton={() => navigate("/auth")}
      />
    </MainLayout>
  );
};

export default HomePage;
