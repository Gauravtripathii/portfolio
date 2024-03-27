import { useEffect, useState } from "react";

const positions = ["Frontend", "Backend", "Fullstack"];

function Home() {
  const [position, setPosition] = useState<string>(positions[0]);
  useEffect(() => {
    const timeoutId = setInterval(() => {
      const nextPositionIndex =
        (positions.indexOf(position) + 1) % positions.length;
      setPosition(positions[nextPositionIndex]);
    }, 1500);
    return () => clearInterval(timeoutId);
  }, [position]);

  return (
    <div className="w-full h-5/6 p-10 flex flex-col gap-10">
      {/* positions intro */}
      <div className="text-red-50 text-6xl font-semibold flex flex-col gap-2">
        <span>
          A <span className="text-red-500">{position}</span>
        </span>
        <span>Developer.</span>
      </div>

      {/* redirections */}
      <div className="h-full flex flex-col items-center justify-center gap-2 text-red-50 text-xl">
        {/* resume */}
        <div className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition">
          <span>Resume</span>
          <span>&rarr;</span>
        </div>

        {/* socials */}
        <div className="text-slate-400 mt-5 w-full font-mono">SOCIALS</div>
        <div className="w-full flex flex-col gap-3">
          <div className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition">
            <span>LinkedIn</span>
            <span>&rarr;</span>
          </div>
          <div className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition">
            <span>X</span>
            <span>&rarr;</span>
          </div>
          <div className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition">
            <span>FrontendMentor</span>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
