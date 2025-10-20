import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Outlet />
    </main>
  );
};

export default MainLayout;
