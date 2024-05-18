"use client";
import React, { useState, useRef, useContext } from "react";
import { animated, useTransition, easings, a } from "@react-spring/web";
import Link from "next/link";
import Logo from "./Logo";

import NavLinks from "./NavLinks";
import Hamburger from "hamburger-react";
import NavInner from "./NavInner";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimationContext from "@/app/waltDisney/AnimationContext";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  //react spring
  const {
    isOpen,
    setOpen,
    animating,
    setAnimating,
    InnerNavAnimation,
    setInnerNavAnimation,
    transition,
    container,
  } = useContext(AnimationContext) as any;

  const handleClick = () => {
    setOpen(!isOpen); // Toggle isOpen state when the button is clicked
    setInnerNavAnimation(!InnerNavAnimation);
    setAnimating(true);
    if (document) {
      if (document.body.style.overflowY === "hidden") {
        document.body.style.overflowY = "auto";
      } else {
        document.body.style.overflowY = "hidden";
      }
    }
  };

  //gsap

  return (
    <menu
      className="py-14 px-[8dvw] m-0  w-full relative flex  "
      ref={container}
    >
      {transition((style: any, isOpen: any) => (
        <>
          {isOpen ? (
            <animated.div
              style={style}
              className="fixed w-full  bg-black top-0 left-0 overflow-x-hidden z-20"
            >
              <NavInner navAnimation={InnerNavAnimation} />
            </animated.div>
          ) : null}
        </>
      ))}
      <div className="relative w-full flex  items-center z-10">
        <Link href={"#"}>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <span
        className={`justify-self-end md:ml-0 ml-auto sticky pointer-events-none z-30 hamburger-wrapper ${
          animating ? "?pointer-events-none" : "pointer-events-auto"
        } `}
      >
        <Hamburger size={40} color="white" onToggle={handleClick} />
      </span>
    </menu>
  );
}
