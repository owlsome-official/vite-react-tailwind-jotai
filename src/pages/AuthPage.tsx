import SignIn from "@/components/auth/SignIn";
import BackgroundCardLayout from "@/layouts/BackgroundCardLayout";
import MainLayout from "@/layouts/MainLayout";

const AuthPage = () => {
  return (
    <MainLayout>
      <BackgroundCardLayout>
        <SignIn />
      </BackgroundCardLayout>
    </MainLayout>
  );
};

export default AuthPage;
