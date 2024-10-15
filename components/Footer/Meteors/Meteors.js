import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

const Meteors = ({ number = 10 }) => {
  const [meteorStyle, setMeteorStyle] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 9 + 2) + "5",
    }));

    setMeteorStyle(styles);
  }, [number]);

  return (
    <div>
      {[...meteorStyle].map((style, index) => (
        // meteor head
        <span
          key={index}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          {/* meteor tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent"></div>
        </span>
      ))}
    </div>
  );
};

export default Meteors;
