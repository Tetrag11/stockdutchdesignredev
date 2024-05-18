import Link from "next/link";
import React from "react";

export default function NavLinks() {
  return (
    <ul className=" gap-3 list-none  justify-self-end ml-auto md:flex hidden">
      <li className="">
        <Link
          href="#"
          className="inline-block source-sans font-bold uppercase no-underline text-white mr-[1.08vw] tracking-[0.27vw] relative lg:text-[0.9dvw] text-[13px] sm:text[2vw]"
        >
          About<span className="slider"></span>
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="inline-block source-sans font-bold uppercase no-underline text-white mr-[1.08vw] tracking-[0.27vw] relative lg:text-[0.9dvw] text-[13px] sm:text[2vw]"
        >
          Projects<span className="slider"></span>
        </Link>
      </li>

      <li className="">
        <Link
          href="#"
          className="inline-block source-sans font-bold uppercase no-underline text-white mr-[1.08vw] tracking-[0.27vw] relative lg:text-[0.9dvw] text-[13px] sm:text[2vw]"
        >
          Journal<span className="slider"></span>
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="inline-block source-sans font-bold uppercase no-underline text-white mr-[1.08vw] tracking-[0.27vw] relative lg:text-[0.9dvw] text-[13px] sm:text[2vw]"
        >
          Media<span className="slider"></span>
        </Link>
      </li>
      <li className="">
        <Link
          href="#"
          className="inline-block source-sans font-bold uppercase no-underline text-white mr-[1.08vw] tracking-[0.27vw] relative lg:text-[0.9dvw] text-[13px] sm:text[2vw]"
        >
          Contact<span className="slider"></span>
        </Link>
      </li>
    </ul>
  );
}
