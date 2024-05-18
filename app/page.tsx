"use client";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  //gsap
  const container = useRef() as any;

  useGSAP(
    () => {
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=500", // end after scrolling 500px beyond the start

          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
        x: "100%",
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full h-full flex flex-col gap-20" ref={container}>
      <Section1 />
      {/* <Section2 /> */}
    </div>
  );
}
