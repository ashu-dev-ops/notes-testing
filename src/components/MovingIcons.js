import React from "react";
import { AiFillLock } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import { BsShieldLockFill } from "react-icons/bs";
import { motion } from "framer-motion";
import styled from "styled-components";

const MovingIcons = () => {
  const icOne = {
    hidden: { x: 0, position: "absolute" },
    visible: {
      x: [300, 100, -2, 300],
      y: [200, -39],

      transition: {
        duration: 10,
        // repeate: Infinity,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const icTwo = {
    hiddenTwo: {
      //   x: [600],
      x: 700,
      //   x: 20,
      position: "absolute",
    },
    visibleTwo: {
      //   x: [300, 200, 40, 600],
      x: 900,
      y: [200, -39],
      backgroundColor: "red",
      position: "absolute",

      transition: {
        duration: 5,
        // repeate: Infinity,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <div className="moving-icons">
      <motion.span
        className="icon-1"
        variants={icOne}
        initial="hidden"
        animate="visible"
      >
        <BsShieldLockFill />
      </motion.span>
      <motion.span
        className="icon-1 two"
        variants={icTwo}
        // initial="hiddenTwo"
        initial=" hiddenTwo"
        animate="visibleTwo"
      >
        <AiFillLock />
      </motion.span>
      <span className="icon-1 three">
        <BiBlock />
      </span>
    </div>
  );
};
const Wrapper = styled.section`
  .moving-icons {
    position: relative;
    right: 50%;
    width: 100%;
  }
  .icon-1 {
    position: absolute;
  }
  .two {
    position: absolute;
    right: 0;
    z-index: -1;
  }
  .three {
    position: absolute;
    right: 0;
  }
`;

export default MovingIcons;
