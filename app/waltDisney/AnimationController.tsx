"use client";
import React, { useRef, useState } from "react";
import AnimationContext from "./AnimationContext";
import { animated, useTransition, easings, a } from "@react-spring/web";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AnimationController({ children, env }: any) {
  const matches = useMediaQuery("(min-width: 768px)");

  //Navbar related
  //react spring
  const [isOpen, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [InnerNavAnimation, setInnerNavAnimation] = useState(false);

  //gsap
  const container = useRef() as any;

  const transition = useTransition(isOpen, {
    from: {
      y: "-100%",
    },
    enter: {
      y: "0",
    },
    leave: {
      y: "100%",
    },

    onDestroyed: () => {
      setAnimating(false);
    },
    config: { mass: 5, tension: 2000, friction: 300 },
  }) as any;

  // HomePage Section 1
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const target = useRef(null);
  const target2 = useRef(null);
  const reference = useRef(null);
  const [mouseExit, setMouseExit] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);

  const constrain = 150;
  const calculatePerspective = (
    x: any,
    y: any,
    target: any,
    reference: any,
    reverse: boolean
  ) => {
    if (target.current && reference.current) {
      let targetInfo = target.current.getBoundingClientRect();
      let referenceInfo = reference.current.getBoundingClientRect();

      let calcX = reverse
        ? (y - targetInfo.y - targetInfo.height / 2) / constrain
        : -(y - targetInfo.y - targetInfo.height / 2) / constrain;
      let calcY = (x - targetInfo.x - targetInfo.width / 2) / constrain;

      let centery =
        -(y - referenceInfo.y - referenceInfo.height / 2) / constrain;
      let centerx = (x - referenceInfo.x - referenceInfo.width / 2) / constrain;

      return (
        " translateX(" +
        centerx * 10 +
        "px) perspective(100px) " +
        "   rotateX(" +
        centery +
        "deg) " +
        "   rotateY(" +
        centerx +
        "deg) "
      );
    }
  };

  const moveTarget = {
    transform: matches
      ? calculatePerspective(x, y, target, reference, false)
      : "",
    transition: "all 0.6s ease-out",
    config: { tension: 200, friction: 10 },
  };

  const moveTarget2 = {
    transform: matches
      ? calculatePerspective(x, y, target2, reference, true)
      : "",
    transition: "all 0.6s ease-out",
    config: { tension: 200, friction: 20 },
  };

  const stayTarget = {
    transform:
      "perspective(100px) translateX(0) translateY(0) rotateX(0) rotateY(0)",
    transition: "all 0.6s ease-out",
    config: { tension: 200, friction: 20 },
  };

  return (
    <AnimationContext.Provider
      value={{
        // Navbar Section
        isOpen,
        setOpen,
        animating,
        setAnimating,
        InnerNavAnimation,
        setInnerNavAnimation,
        transition,
        container,
        //First Section of Hompage
        target,
        target2,
        reference,
        x,
        setX,
        y,
        setY,
        mouseEnter,
        mouseExit,
        setMouseExit,
        setMouseEnter,
        moveTarget,
        moveTarget2,
        stayTarget,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}
