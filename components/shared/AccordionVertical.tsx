"use client";

import modifyComponentClassName from "@/utils/modifyComponentClassName";
import { useEffect, useState } from "react";

interface IProps extends IExtraClassNames {
  children: React.ReactNode;
  expanded: boolean;
  animate?: boolean;
  duration?: number;
}

const AccordionVertical = ({
  children,
  expanded = false,
  className = "",
  animate = false,
  duration = 150,
}: IProps) => {
  const transitionDurationClass = `duration-[${duration}ms]`;
  const [overflow, setOverflow] = useState("overflow-hidden");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (expanded) {
      timer = setTimeout(() => {
        setOverflow("overflow-visible");
      }, duration);
    }

    if (!expanded) {
      setOverflow("overflow-hidden");
    }
    return () => clearTimeout(timer);
  }, [expanded, duration]);

  return (
    <div className={modifyComponentClassName(className, "")}>
      <div
        className={`grid grid-cols-1 ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } ${animate ? `transition-all ${transitionDurationClass}` : ""}`}
      >
        <div className={`${overflow} transition-all !duration-0 no-scrollbar`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionVertical;
