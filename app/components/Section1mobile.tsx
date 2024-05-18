import React from "react";
import Image from "next/image";
export default function Section1mobile() {
  return (
    <div className="w-full h-full flex justify-center relative sm:hidden ">
      <Image
        height={500}
        width={500}
        className="w-[50vw]  pb-40"
        src={
          "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715771316/leonie-en-jeroen-stock-hendrikse-stock-show-house-28-1-800x1200_pcspsr.jpg"
        }
        alt=""
      />
      <Image
        height={500}
        width={500}
        className="w-[33vw] absolute left-[10%] top-[40%]"
        src={
          "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715771315/journal-get-to-kno-jeroen-stock-800x1203_krszpu.jpg"
        }
        alt=""
      />
      <Image
        height={500}
        width={500}
        className="w-[33vw] absolute right-[15%] top-[27%]"
        src={
          "https://res.cloudinary.com/dzjoao5pe/image/upload/v1715771316/leonie-hendriks-blog-800x1203_olpzzm.jpg"
        }
        alt=""
      />
      <h2 className="f-heading-xxl absolute text-white top-[70%] left-[50%] translate-x-[-50%] text-center">
        Making
        <br />
        Enchanting
        <br />
        Memories
      </h2>
      <p className="f-chapeau absolute top-[100%] left-[50%] translate-x-[-50%] text-center text-white text-nowrap">
        Leonie Hendrikse &amp; <br />
        Jeroen Stock
      </p>
      <div className="absolute w-[25vw] top-[120%]  ">
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
      <div className="absolute top-[150%] flex flex-col items-center  pb-[26.66vw]">
        <p className="f-blockquote-m text-nowrap text-center  pb-10">
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
  );
}
