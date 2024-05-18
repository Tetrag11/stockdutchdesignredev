import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faHouzz,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { useTrail, a } from "@react-spring/web";

const Trail: any = ({ open, children }: any) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 600 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function NavInner({ navAnimation }: any) {
  const navLinks = ["About", "Projects", "Journal", "Media", "Contact"];
  const secLinks = [
    "Embracing & Toasting",
    "Cooking & Sharing",
    "Splattering & Dreaming",
    "Creating & Playing Style",
    "Stock Originals",
    "__",
    "All Projects",
    "Testimonials",
  ];

  return (
    <div className="text-white w-full  flex justify-center items-center  h-[100%] min-h-screen">
      <div className="grid lg:grid-cols-2 sm:grid-cols-[1.2fr_1.5fr] grid-cols-1 lg:max-w-[60vw] max-w-[95vw] w-full p-2">
        <ul className="w-full flex flex-col sm:justify-between gap-2 py-20">
          <Trail open={navAnimation}>
            {navLinks.length !== 0 &&
              navLinks.map((link: any, index: any) => (
                <Link
                  href="#"
                  key={index}
                  className="inline-block source-sans font-bold uppercase no-underline text-white mr-[1.08vw] tracking-[0.27vw] relative noto lg:text-[2.9dvw] text-[20px] sm:text-[4vw]"
                >
                  {link}
                  <span className="slider"></span>
                </Link>
              ))}
          </Trail>
        </ul>

        <div className="w-full grid min-[400px]:grid-cols-2 grid-cols-1 gap-5">
          <article className="w-full h-full flex flex-col">
            <Trail open={navAnimation}>
              <h6 className="lg:text-[1.0dvw] text-[13px] sm:text[2vw] noto pb-5">
                Lookbook
              </h6>
            </Trail>

            <ul className="flex flex-col gap-2 sm:pb-40 pb-20">
              <Trail open={navAnimation}>
                {secLinks.length > 0 &&
                  secLinks.map((link, index) => (
                    <li
                      key={index}
                      className="lg:text-[1.0dvw] text-[13px] sm:text[2vw] opacity-60 noto "
                    >
                      {link}
                    </li>
                  ))}
              </Trail>
            </ul>

            <div className="mt-auto">
              <Trail open={navAnimation}>
                <span className="flex gap-4 mt-auto">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faPinterest} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faHouzz} />
                </span>
              </Trail>
            </div>
          </article>
          <article className="w-full h-full flex flex-col ">
            <Trail open={navAnimation}>
              <h6 className="lg:text-[1.0dvw] text-[13px] sm:text[2vw] noto pb-5">
                In The Middle
              </h6>
            </Trail>
            <ul className="flex flex-col gap-2 sm:pb-40 pb-20">
              <Trail open={navAnimation}>
                <li className="lg:text-[1.0dvw] text-[13px] sm:text[2vw] opacity-60 noto ">
                  Books
                </li>
                <li className="lg:text-[1.0dvw] text-[13px] sm:text[2vw] opacity-60 noto ">
                  Magazines
                </li>
                <li className="lg:text-[1.0dvw] text-[13px] sm:text[2vw] opacity-60 noto ">
                  Videos
                </li>
              </Trail>
            </ul>

            <ul className="flex flex-col gap-2  mt-auto">
              <Trail open={navAnimation}>
                <li className="lg:text-[1.0dvw] text-[13px] sm:text[2vw]  noto ">
                  English
                </li>
                <li className="lg:text-[1.0dvw] text-[13px] sm:text[2vw] opacity-60 noto ">
                  Netherlands
                </li>
              </Trail>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
