import { version } from "@/../package.json";

const VersionCapsule = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-1 rounded-full bg-zinc-900 py-1 pr-1 pl-4 text-xs font-bold text-white">
        <span>Template </span>
        <span className="rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white">
          v{version}
        </span>
      </div>
    </div>
  );
};

export default VersionCapsule;
