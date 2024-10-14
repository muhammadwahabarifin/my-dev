import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import About1 from "@/components/About/About1";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import { useEffect, useState } from "react";
import { displayFancyLogs } from "@/utils/log";
import Loader from "@/components/Loader/Loader";
import About2 from "@/components/About/About2";
import Projects from "@/components/Projects/Projects";
import Work from "@/components/Work/Work";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Collaboration from "@/components/Collaboration/Collaboration";


gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDekstop, setIsDekstop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDekstop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDekstop]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Menu />
          </Header>
          <ProgressIndicator />
          <main className="flex flex-col">
            <div
              role="img"
              className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
            >
              DEV
            </div>
            <div className="fixed top-0 left-0 h-screen w-screen -z-1" />
            <Hero />
            <About1 clientHeight={clientHeight} />
            <Skills />
            <About2 clientHeight={clientHeight} />
            <Projects isDekstop={isDekstop} clientHeight={clientHeight} />
            <Work isDekstop={isDekstop} />
            <Collaboration clientHeight={clientHeight} />
          </main>
        </>
      )}
    </>
  );
}
