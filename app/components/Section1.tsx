"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import AnimationContext from "../waltDisney/AnimationContext";
import { animated } from "@react-spring/web";
import Section1mobile from "./Section1mobile";
import Image from "next/image";
import gsap from "gsap";

export default function Section1() {
  const container = useRef(null) as any;
  const left = useRef(null) as any;
  const right = useRef(null) as any;
  const [mainHeight, setMainHeight] = useState("");

  const [isRight, setIsRight] = useState(false);
  const hero1 = useRef(null) as any;
  const hero2 = useRef(null) as any;

  const images = [
    {
      left: "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865457/leonie-en-jeroen-stock-hendrikse-stock-show-house-28-1-800x1200_koidyw.jpg",
      right:
        "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865457/leonie-en-jeroen-stock-hendrikse-stock-show-house-30-800x1200_xejguk.jpg",
    },
    {
      left: "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715771315/journal-get-to-kno-jeroen-stock-800x1203_krszpu.jpg",
      right:
        "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865456/leonie-en-jeroen-stock-hendrikse-stock-show-house-39-800x1200_bcptih.jpg",
    },
  ];

  const {
    reference,
    target,
    target2,
    setX,
    setY,
    setMouseExit,
    setMouseEnter,
    mouseEnter,
    mouseExit,
    moveTarget,
    moveTarget2,
    stayTarget,
  } = useContext(AnimationContext) as any;

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setX(event.clientX);
      setY(event.clientY);
      setMouseExit(false);
    };

    const handleMouseExit = (event: any) => {
      setMouseExit(true);
    };

    const handleMouseEnter = (event: any) => {
      setMouseEnter(true);
    };

    const handleMouseOverLeft = (event: any) => {
      gsap.to("body", { backgroundColor: "#b8a4ac", duration: 1 });
      setIsRight(false);
    };

    const handleMouseOverRight = (event: any) => {
      gsap.to("body", { backgroundColor: "#d09c64", duration: 1 });
      setIsRight(true);
    };
    setMainHeight(container.current.offsetHeight + hero2.current.offsetHeight);

    container.current &&
      document.body.addEventListener("mousemove", handleMouseMove);
    container.current &&
      document.body.addEventListener("mouseleave", handleMouseExit);
    container.current &&
      document.body.addEventListener("mouseenter", handleMouseEnter);

    left.current &&
      left.current.addEventListener("mouseover", handleMouseOverLeft);
    right.current &&
      right.current.addEventListener("mouseover", handleMouseOverRight);
  }, []);

  return (
    <div className="">
      <div
        className=" w-full mx-auto sm:translate-y-[-10%] sm:top-[5%] relative flex  items-center justify-center sm:justify-start h-full min-h-screen  "
        ref={container}
      >
        <div
          ref={reference}
          className="absolute bemo w-[100px] h-[100px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none overflow-hidden"
        ></div>
        {/* mobile */}
        <Section1mobile />

        {/* web */}
        <article className="relative w-fit mx-auto z-[6] hidden sm:block">
          <h2 className="f-heading-xxl-web  text-white ">
            Making
            <br />
            Enchanting
            <br />
            Memories
          </h2>
          <p className="f-chapeau-web  text-white text-nowrap pt-5 uppercase">
            Leonie Hendrikse
            <br />
            &amp; Jeroen Stock
          </p>
        </article>

        {/* left */}
        <animated.div
          style={mouseEnter && !mouseExit ? moveTarget : stayTarget}
          ref={target}
          className="absolute z-0 top-[31vh] left-[11vw] w-[23.5%] hidden sm:block  pb-[33%] "
        >
          <Image
            className={`w-full h-full absolute transition-opacity z-[1] ${
              isRight ? " opacity-0" : ""
            } `}
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865457/leonie-en-jeroen-stock-hendrikse-stock-show-house-28-1-800x1200_koidyw.jpg"
            }
            alt=""
          />
          <Image
            className="w-full h-full absolute z-[0]"
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865457/leonie-en-jeroen-stock-hendrikse-stock-show-house-30-800x1200_xejguk.jpg"
            }
            alt=""
          />
        </animated.div>
        <animated.div
          style={mouseEnter && !mouseExit ? moveTarget : stayTarget}
          ref={target}
          className="absolute z-[3] top-[70vh] left-[10vw] w-[12%] bg-white  pb-[16%] hidden sm:block"
        >
          <Image
            className={`w-full h-full absolute z-[1] transition-opacity  ${
              isRight ? " opacity-0" : ""
            }`}
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715926429/leonie-en-jeroen-stock-hendrikse-stock-show-house-05-800x1200_ojyyie.jpg"
            }
            alt=""
          />
          <Image
            className="w-full h-full absolute z-[0]"
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865456/leonie-en-jeroen-stock-hendrikse-stock-show-house-39-800x1200_bcptih.jpg"
            }
            alt=""
          />
        </animated.div>
        <animated.div
          style={mouseEnter && !mouseExit ? moveTarget : stayTarget}
          ref={target}
          className="absolute z-[2] top-[50vh] left-[2vw] w-[14%] bg-orange-300  pb-[22%] hidden sm:block"
        >
          <Image
            className="w-full h-full absolute"
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715771315/journal-get-to-kno-jeroen-stock-800x1203_krszpu.jpg"
            }
            alt=""
          />
        </animated.div>

        {/* right*/}
        <animated.div
          style={mouseEnter && !mouseExit ? moveTarget2 : stayTarget}
          ref={target2}
          className="absolute z-0 top-[13vh] right-[24vw] w-[16.66%] pb-[26%] sm:block hidden"
        >
          <Image
            className={`w-full h-full z-[1] absolute transition-opacity ${
              isRight ? " opacity-0" : ""
            }`}
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865457/leonie-en-jeroen-stock-hendrikse-stock-show-house-07-800x1200_jo5rju.jpg"
            }
            alt=""
          />
          <Image
            className="w-full h-full absolute z-[0]"
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865456/leonie-en-jeroen-stock-hendrikse-stock-show-house-29-1-800x1200_vernlc.jpg"
            }
            alt=""
          />
        </animated.div>
        <animated.div
          style={mouseEnter && !mouseExit ? moveTarget2 : stayTarget}
          ref={target2}
          className="absolute z-[2] top-[31vh] right-[18vw] w-[14.5%] bg-orange-300  pb-[22%] hidden sm:block"
        >
          <Image
            className="w-full h-full absolute"
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715771316/leonie-hendriks-blog-800x1203_olpzzm.jpg"
            }
            alt=""
          />
        </animated.div>
        <animated.div
          style={mouseEnter && !mouseExit ? moveTarget2 : stayTarget}
          ref={target2}
          className="absolute z-[3] top-[55vh] right-[23vw] w-[12%] bg-white  pb-[16%] hidden sm:block "
        >
          <Image
            className={`w-full h-full absolute z-[1] transition-opacity ${
              isRight ? " opacity-0" : ""
            }`}
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865456/leonie-en-jeroen-stock-hendrikse-stock-show-house-09-800x1200_e5bzzl.jpg"
            }
            alt=""
          />
          <Image
            className="w-full h-full absolute z-[0] object-cover"
            width={500}
            height={500}
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715865459/pierre-frey-behang-800x426_isne4z.png"
            }
            alt=""
          />
        </animated.div>
        {/* split */}
        <div className="absolute w-full h-full top-0 left-0 sm:grid grid-cols-2 z-[5] hidden ">
          <div className="left w-full h-full" ref={left}></div>
          <div className="right w-full h-full" ref={right}></div>
        </div>

        <div className="absolute w-[8.33vw] pb-[8.33vw] left-[75%] bottom-[-4vw]  hidden sm:block ">
          <Image
            height={500}
            width={500}
            className="w-[25vw] absolute top-0 left-0 animate-[spin_10s_infinite]"
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715777786/badge-circle_cltytx.svg"
            }
            alt=""
          />
          <Image
            height={500}
            width={500}
            className="w-[25vw] absolute  animate-[spin_15s_infinite]"
            src={
              "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715777787/badge-logo_yapbgj.svg"
            }
            alt=""
          />
        </div>
        {/* circle */}
        <animated.div
          style={mouseEnter && !mouseExit ? moveTarget2 : stayTarget}
          ref={target2}
          className="absolute z-[3]   top-[41vh] left-[28vw] w-[26%] opacity-20 rounded-[50%] border-2 border-white  pb-[26%] hidden sm:block "
        ></animated.div>

        <div
          className="absolute top-[110%] w-full sm:flex flex-col justify-center items-center  hidden "
          ref={hero2}
        >
          <p className="f-blockquote-web text-nowrap text-center text-white noto  pb-10">
            {'"'}We believe true design is about <br />
            understanding our client’s lifestyle.{'"'}
          </p>

          <a
            href=""
            className="p-4 border-2 mx-auto border-white noto text-white"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /* 

<animated.div
style={mouseEnter && !mouseExit ? moveTarget2 : stayTarget}
ref={target2}
className="absolute left-[10%] sm:w-[300px] w-[200px] sm:h-[400px] h-[300px] bg-black border-2 border-black top-0  "
></animated.div> */
}
