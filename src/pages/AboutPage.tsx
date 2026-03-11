import VersionCapsule from "@/components/VersionCapsule";
import LogoImage from "assets/images/logo200.png";
import { useEffect } from "react";
import { GetEnv } from "utils/index";

// Set global background for AboutPage
const useLight2026Background = () => {
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevColor = document.body.style.backgroundColor;
    // soft sunrise-to-cream glassy gradient
    document.body.style.background =
      "linear-gradient(120deg, #FDF6E3 0%, #FBFAF7 30%, #F0EDED 100%)";
    document.body.style.backgroundColor = "#FAF7F2";
    document.body.style.transition = "background 0.6s, background-color 0.6s";
    return () => {
      document.body.style.background = prevBg;
      document.body.style.backgroundColor = prevColor;
      document.body.style.transition = "";
    };
  }, []);
};

const AboutPage = () => {
  useLight2026Background();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-10">
      {/* Soft, subtle floating blobs for modern aesthetic */}
      <div className="pointer-events-none absolute -top-28 -left-32 h-64 w-72 rounded-full bg-[#F1F0EC] opacity-50 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-0 top-1/2 translate-y-[-60%] h-48 w-56 rounded-full bg-[#C4B5A0]/60 opacity-40 blur-2xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 translate-x-[-70%] h-36 w-44 rounded-full bg-[#fbddad]/60 opacity-30 blur-2xl -z-10" />
      <section className="w-full max-w-2xl rounded-3xl shadow-[0_16px_48px_0_rgba(200,190,170,0.08)] ring-1 ring-[#eaddcb]/80 px-6 py-10 sm:px-10 sm:py-14 bg-white/90 backdrop-blur-[2.5px] border border-[#ece9e6]">
        {/* Header - Title and Pantone */}
        <div className="mb-9 flex flex-col sm:flex-row items-center justify-between gap-5">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#746c5b] via-[#ac9873] to-[#c2b6a0] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(232,218,184,0.11)]">
            After Installation
          </h1>
          <a
            href="https://www.pantone.com/color-of-the-year/2026"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 px-3 py-1 rounded-xl transition-shadow hover:shadow-md hover:ring-2 hover:ring-[#F1F0EC]/40"
          >
            <span className="h-3 w-3 rounded-md bg-[#F1F0EC] ring-2 ring-[#C4B5A0] group-hover:ring-[#ac9873] transition-shadow" />
            <span className="text-xs font-medium text-[#9D7F55] tracking-widest opacity-90">
              Pantone 2026 – Cloud Dancer
            </span>
          </a>
        </div>
        {/* Center Card: logo + version + info */}
        <div className="mx-auto mb-8 flex w-full max-w-[320px] flex-col items-center gap-3 rounded-2xl bg-gradient-to-tr from-[#F8E5BB]/70 via-[#fbfaf7]/80 to-[#ece9e6]/60 p-5 shadow-[0_4px_24px_0_rgba(238,225,199,0.13)] ring-1 ring-[#e7d7bd]/60">
          <img
            src={LogoImage}
            alt="logo"
            draggable={false}
            className="w-24 h-24 object-cover rounded-2xl bg-[#e8e3df] shadow-xl border-2 border-[#efd7ad] mb-2"
            style={{ aspectRatio: 1 }}
          />
          <div className="mt-1">
            <VersionCapsule />
          </div>
          <div className="w-full rounded-md bg-[#fffdf7]/80 px-3 py-2 text-center shadow-inner border border-[#f3ede3]/70">
            <div className="text-[#857651] text-[1.08rem] font-semibold mb-1 tracking-tight">
              This is the way <span className="hidden sm:inline opacity-40 text-xs font-normal">— Mandalorian</span>
            </div>
            <div className="text-sm text-[#a09272]">
              <strong>Mode:</strong>&nbsp;
              <span className="font-mono">{GetEnv("MODE")}</span>
            </div>
          </div>
        </div>
        {/* Editable List */}
        <div className="py-4">
          <div className="text-base font-semibold text-[#b49f76] flex items-center gap-2">
            You have to edit text by name below this
            <span className="bg-[#fff6de] text-[#88764b] px-2 py-0.5 rounded text-xs ml-1 tracking-wider font-mono">
              (Use ‘Find All and Replace’)
            </span>
          </div>
          <ul className="mt-2 list-[upper-roman] pl-8 space-y-1 text-[#675f4d] text-base">
            <li>
              <span className="font-semibold">REPLACE_WITH_YOUR_DOCKER_REGISTRY</span>
            </li>
            <li>
              <span className="font-semibold">REPLACE_WITH_YOUR_PROJECT_NAME</span>
            </li>
            <li>
              <span className="font-semibold">REPLACE_WITH_YOUR_APP_NAME</span>
            </li>
            <li>
              <span className="font-semibold">REPLACE_WITH_YOUR_APP_DESCRIPTION</span>
            </li>
            <li>
              <span className="font-semibold">REPLACE_WITH_YOUR_APP_GIT_LINK</span>
            </li>
            <li>
              <span className="font-semibold">REPLACE_WITH_YOUR_APP_API</span>
            </li>
          </ul>
        </div>
        <footer className="mt-10 leading-tight text-[#C6B8AC]/60">
          <blockquote className="rounded bg-[#fcf6eb]/80 px-4 py-2 text-center text-xs font-light shadow-inner border border-[#f7ecd9]/70">
            จะรู้ได้ไงคนไหนคนไทย ถ้าแบ่งปันให้กันใช้ละคนไทยแน่นอน
          </blockquote>
        </footer>
      </section>
    </div>
  );
};

export default AboutPage;
