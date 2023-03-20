import React, { useState } from "react";
import Link from "next/link";

export default function CardHero() {
  return (
    <>
      <div className="relative md:h-[80vh] w-full flex items-center justify-center px-4 bg-red-800">
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left-img.png"
          alt="left circle border"
          className="sm:block hidden absolute left-0 z-0 xl:w-auto md:w-64 w-12 md:h-auto h-full"
        />
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/mobile.png"
          alt="left circle border"
          className="sm:hidden absolute right-0 z-0 "
        />
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right-img.png"
          alt="right circle border"
          className="sm:block hidden absolute right-0 z-0 xl:w-auto md:w-40 w-12 md:h-auto h-full"
        />
        <div className="flex flex-col items-center justify-center md:py-32 py-10 max-w-2xl relative z-40">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold lg:leading-tight md:leading-10 leading-8 text-center text-gray-100">
            Discover your exact search engine rankings
          </h1>
          <p className="lg:text-base text-sm leading-6 mt-6 text-center text-gray-300">
            The next big thing starts here. Start building with Prodify and be
            the first to market with a product that is ready to take on the
            competition and delight your customers
          </p>
          <p className="lg:text-base text-sm leading-6 mt-4 text-center text-gray-300">
            Best in class UX design services that launch and manage your product
            with a lean methadology.
          </p>
          <Link
            href="/products"
            className="px-7 lg:py-3 lg:text-lg md:text-base text-sm py-4 bg-red-700 rounded-md flex items-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-4 mt-12 focus:ring-blue-700"
          >
            <p className="lg:text-lg md:text-base text-sm font-medium leading-none text-white mr-3">
              See products
            </p>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.767 4.4545C12.2063 4.01517 12.9187 4.01517 13.358 4.4545L20.108 11.2045C20.5473 11.6438 20.5473 12.3562 20.108 12.7955L13.358 19.5455C12.9187 19.9848 12.2063 19.9848 11.767 19.5455C11.3277 19.1062 11.3277 18.3938 11.767 17.9545L17.7215 12L11.767 6.0455C11.3277 5.60616 11.3277 4.89384 11.767 4.4545Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5625 12C3.5625 11.3787 4.06618 10.875 4.6875 10.875H18.375C18.9963 10.875 19.5 11.3787 19.5 12C19.5 12.6213 18.9963 13.125 18.375 13.125H4.6875C4.06618 13.125 3.5625 12.6213 3.5625 12Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
