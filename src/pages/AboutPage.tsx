import VersionCapsule from "@/components/VersionCapsule";
import LogoImage from "assets/images/logo200.png";
import { GetEnv } from "utils/index";

const AboutPage = () => {
  return (
    <div className="w-full rounded-[22px] bg-white p-8">
      <div className="relative">
        <div className="mb-4 flex flex-col justify-between sm:flex-row">
          <div className="bg-linear-to-l from-[#9E7A68] to-[#9E7A68] bg-clip-text text-2xl font-bold text-transparent">
            After Installation
          </div>
          <div className="text-small flex items-center">
            <a
              href="https://www.pantone.com/color-of-the-year/2024"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <div className="h-2 w-2 bg-[#9E7A68]" />
              Pantone Color of the Year 2025 - Mocca Mousse
            </a>
          </div>
        </div>
        <div className="mx-auto mb-4 w-full max-w-xs rounded-xl bg-linear-to-r from-[#9E7A68]/50 to-[#9E7A68] p-1.5 text-center shadow-lg">
          <div className="flex flex-col items-center">
            <img src={LogoImage} alt="logo" className="w-[30vw] max-w-40" />
            <VersionCapsule />
            <div className="bg-neutral w-full rounded-lg p-1">
              <div>This is the way -- Mandalorian</div>
              <div>
                <strong>Mode: </strong>
                {GetEnv("MODE")}
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <strong>
            You have to edit text by name below this{" "}
            <span className="text-[#9E7A68]">
              (Spoiled Alert!, use &apos;Find All and Replace&apos;)
            </span>
          </strong>
          <ul className="list-[upper-roman] pl-8">
            <li>REPLACE_WITH_YOUR_DOCKER_REGISTRY</li>
            <li>REPLACE_WITH_YOUR_PROJECT_NAME</li>
            <li>REPLACE_WITH_YOUR_APP_NAME</li>
            <li>REPLACE_WITH_YOUR_APP_DESCRIPTION</li>
            <li>REPLACE_WITH_YOUR_APP_GIT_LINK</li>
            <li>REPLACE_WITH_YOUR_APP_API</li>
          </ul>
        </div>
        <sup className="opacity-10">
          จะรู้ได้ไงคนไหนคนไทย ถ้าแบ่งปันให้กันใช้ละคนไทยแน่นอน
        </sup>
      </div>
    </div>
  );
};

export default AboutPage;
