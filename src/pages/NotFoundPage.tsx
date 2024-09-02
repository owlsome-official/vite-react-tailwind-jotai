import PlainCenterLayout from "layouts/PlainCenterLayout";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <PlainCenterLayout>
      <Section />
      <button
        className="z-20 rounded-xl border-0 px-3 py-2 shadow-lg shadow-violet-400 ring-2 ring-violet-600 transition-all duration-300 hover:bg-violet-600 hover:text-white"
        onClick={() => navigate("/")}
      >
        Back to home
      </button>
    </PlainCenterLayout>
  );
};

const Section = () => {
  return (
    <section className="z-10 my-6 overflow-hidden">
      <TopLeftSvg />
      <TopRightSvg />

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 bg-gradient-to-r from-teal-300 to-violet-600 bg-clip-text px-4 text-[100px] font-bold leading-none text-transparent md:text-[160px]">
            404
          </h2>
          <p className="text-3xl leading-none text-gray-900 opacity-80 md:text-5xl">
            Page Not Found!
          </p>
        </div>
      </div>
    </section>
  );
};

const TopLeftSvg = () => {
  return (
    <svg
      className="absolute left-0 top-0 -z-[1]"
      width="280"
      height="381"
      viewBox="0 0 280 381"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="-45"
        cy="73"
        r="307"
        stroke="#C8C6FC"
        strokeOpacity="0.52"
        strokeWidth="2"
      />
      <circle cx="258" cy="121" r="22" fill="#7c3aed" />
      <circle cx="79.5" cy="350.5" r="16.5" fill="#5eead4" />
    </svg>
  );
};

const TopRightSvg = () => {
  return (
    <svg
      className="absolute right-0 top-0 -z-[1] hidden sm:block"
      width="852"
      height="656"
      viewBox="0 0 852 656"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M292.329 224.493C207.524 138.952 22.4868 147.027 0 -2H854C854 134.174 852.001 436.049 852.001 560.411C594.652 699.364 368.784 560.411 368.784 460.713C368.784 348.161 368.784 301.612 292.329 224.493Z"
        fill="#b48bfa"
      />
      <circle
        cx="921.143"
        cy="160.345"
        r="339.591"
        transform="rotate(132.903 921.143 160.345)"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="2"
      />
      <circle
        cx="654.164"
        cy="369.644"
        r="24.3279"
        transform="rotate(132.903 654.164 369.644)"
        fill="#7c3aed"
      />
      <circle
        cx="602.642"
        cy="52.2899"
        r="18.2459"
        transform="rotate(132.903 602.642 52.2899)"
        fill="#5eead4"
      />
    </svg>
  );
};

export default NotFoundPage;
