'use client'
import ScrollTrigger from "react-scroll-trigger";
import AboutNumbersCard from "./AboutNumbersCard"
import { useSpring, animated } from "react-spring";
import { useState } from "react";

const aboutNumbersInfo = [
    {
        id: 1,
        number: 2279,
        title: "International Awards",
    },
    {
        id: 1,
        number: 3099,
        title: "Dedicater Volunteer",
    },
    {
        id: 1,
        number: 1589,
        title: "Successfull Campaigns",
    },
    {
        id: 1,
        number: 526,
        title: "Supporting Country",
    }
]

const AboutNumbers = () => {

  return (
        <div className="flex justify-around items-center flex-wrap mt-[98px]">
            {
                aboutNumbersInfo.map((number) => (
                    <AboutNumbersCard key={number.id} info={number} />
                ))
            }
        </div>
  )
}

export default AboutNumbers