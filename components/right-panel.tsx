"use client";
import { siteConfig } from "@/config/site-config";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import GridItem from "./grid-item";
import Social from "./grid-items/social-box";

const RightPanel = () => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  // ANIMATION
  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  return (
    <div
      ref={scope}
      className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 xl:overflow-y-auto auto-rows-[76px]"
    >
      {siteConfig.items.map((item, index) => {
        return (
          <GridItem key={item.title + item.type + index} size={item.layout}>
            {item.type === "social" ? (
              <Social item={item} />
            ) : (
              <div>Need to create new component type.</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default RightPanel;
