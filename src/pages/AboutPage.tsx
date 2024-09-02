import GetStarted from "@/components/about/GetStarted";
import BackgroundCardLayout from "@/layouts/BackgroundCardLayout";
import MainLayout from "@/layouts/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <BackgroundCardLayout>
        <GetStarted />
      </BackgroundCardLayout>
    </MainLayout>
  );
};

export default AboutPage;
