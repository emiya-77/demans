'use client';

import ScrollTrigger from "react-scroll-trigger";
// import { useSpring, animated } from "react-spring";
import { useState } from "react";
import CountUp from "react-countup";

// function Number({n}) {
//   const {number} = useSpring({
//       from: {number: 0},
//       number: n,
//       delay: 0,
//       config: {mass: 1, tension: 20, friction: 10},
//   });
//   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
// }

const AboutNumbersCard = ({info}) => {
    const { number, title } = info || {};
    const [counterOn, setCounterOn] = useState(true);

    return (
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="font-primary flex flex-col justify-center items-center p-4">
            <h1 className="text-[60px] md:text-[92.8px] leading-[100px]">
                {/* {counterOn && <Number n={number} />} */}
                {
                  counterOn &&
                  <CountUp start={0} end={number} duration={3} delay={0}/>
                }
            </h1>
            <p className="text-[16px] md:text-[24px] text-primary">{title || ""}</p>
        </div>
      </ScrollTrigger>
    );
}

export default AboutNumbersCard;
