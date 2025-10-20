import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="text-2xl font-bold">HomePage</div>
      <button onClick={handleClick}>Check me first!</button>
    </div>
  );
};

export default HomePage;
