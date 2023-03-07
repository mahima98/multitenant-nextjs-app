import react, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function CardHero() {
  return (
    <div>
      <section className={styles.cardHero}>
        <div className="w-full relative pb-10 px-6 xl:px-0 bg-teal-300">
          <nav
            role="navigation"
            aria-label="Main"
            className="hidden relative z-10 w-full lg:flex justify-between items-center p-20"
          >
            <div className="w-1/6">
              <a aria-label="we care company logo" href="#">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg3.svg"
                  alt="logo"
                />
              </a>
            </div>
          </nav>
          <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                role="img"
                aria-label="people smiling"
                className="mx-auto"
                src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"
                alt="people smiling"
              />
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          /* Top menu */
          .top-100 {
              animation: slideDown 0.5s ease-in-out;
          }
          @keyframes slideDown {
              0% {
                  top: -50%;
              }
              100% {
                  top: 0;
              }
          }
          * {
              outline: none !important;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              -webkit-tap-highlight-color: transparent;
          }`}
      </style>
    </div>
  );
}
