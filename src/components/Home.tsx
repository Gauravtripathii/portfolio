import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import resumeUrl from "../assets/gaurav_kumar_tripathi.pdf";

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

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  const openResumeAndDownload = (link: string) => {
    openLink(link);
    const resume_link = document.createElement("a");
    resume_link.href = resumeUrl;
    resume_link.download = "gaurav_kumar_tripathi.pdf";
    document.body.appendChild(resume_link);
    resume_link.click();
    document.body.removeChild(resume_link);
  };

  return (
    <div className="w-full h-5/6 p-10 flex flex-col gap-10 lg:flex-row">
      {/* positions intro */}
      <div className="text-red-50 text-6xl sm:text-8xl font-semibold flex flex-col gap-2 lg:w-3/4 lg:items-center lg:justify-center lg:text-7xl xl:text-9xl">
        <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }}>
          A <span className="text-red-500">{position}</span>
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Developer.
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          className="hidden lg:block text-red-50 text-xl mt-10 xl:text-3xl"
        >
          Clean Code. Elegant Design.
        </motion.div>
      </div>

      {/* redirections */}
      <div className="h-full flex flex-col items-center justify-center gap-2 text-red-50 text-xl lg:w-1/4 xl:text-3xl">
        {/* resume */}
        <div
          className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition cursor-pointer"
          onClick={() =>
            openResumeAndDownload(
              "https://docs.google.com/document/d/1YRlA69avCSaBQMRYaCEMmnTXKftBfKG2NEpdvr__j14/edit?usp=sharing"
            )
          }
        >
          <span>Resume</span>
          <span>&rarr;</span>
        </div>

        {/* socials */}
        <div className="text-slate-400 mt-5 w-full font-mono xl:mt-14 xl:mb-5">
          SOCIALS
        </div>
        <div
          className="w-full flex flex-col gap-3 xl:gap-7"
          onClick={() =>
            openLink("https://www.linkedin.com/in/gaurav-kumar-tripathii/")
          }
        >
          <div className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition  cursor-pointer">
            <span>LinkedIn</span>
            <span>&rarr;</span>
          </div>
          <div
            className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition  cursor-pointer"
            onClick={() => openLink("https://twitter.com/gaurav0tripathi")}
          >
            <span>X</span>
            <span>&rarr;</span>
          </div>
          <div
            className="border-b w-full flex items-center justify-between px-1 hover:text-red-500 hover:border-red-500 hover:-translate-y-1 transition  cursor-pointer"
            onClick={() => openLink("https://github.com/gauravtripathii")}
          >
            <span>GitHub</span>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
