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
    <div className="w-full h-5/6 p-10">
      {/* positions intro */}
      <div className="text-red-50 text-6xl font-semibold flex flex-col gap-2">
        <span>
          A <span className="text-red-500">{position}</span>
        </span>
        <span>Developer.</span>
      </div>
    </div>
  );
}

export default Home;
