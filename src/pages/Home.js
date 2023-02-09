import React from "react";
import styled from "styled-components";
import Comprehensive from "../components/Comprehensive ";
import Reviews from "../components/Reviews";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import AvailableOn from "../components/AvailableOn";
import Typewriter from "typewriter-effect";
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import { useUserContext } from "../context/user-context";
const Home = () => {
  // const { loginWithRedirect } = useUserContext();
  const varOne = {
    hidden: {
      // x:0,
      y: 100,
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };
  // const { user } = useAuth0();
  return (
    <Wrapper>
      {/* <motion.AiFillLock color="white" /> */}

      {/**/}

      <div className="hero-text">
        <h1>
          The simplest way to <br />
          <Typewriter
            options={{
              strings: [
                "write notes",
                "save notes",
                "keep notes",
                "secure notes",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <br />
        <p>
          All your notes, synced on all your devices. Get Simplenote now for
          iOS, <br /> Android, Mac, Windows, Linux, or in your browser.
        </p>
        <button className="signup button-btn ">
          <Link to="/direct-notes">GO TO NOTES</Link>
        </button>
      </div>
      <motion.div
        variants={varOne}
        initial="hidden"
        animate="show"
        className="image-container"
      >
        <img src={hero} alt="" />
      </motion.div>
      <Comprehensive />
      <Reviews />
      <AvailableOn />
      {/* <Featu */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #1f2123;
  padding-top: 13vh;
  .hero-text {
    /* padding: 3rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 3rem; */

    h1 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 2.5vh;
      font-weight: 500;
    }
    p {
      text-align: center;
      font-size: 1.3rem;
      margin-bottom: 5vh;
      color: white;
    }
    button {
      text-align: center;
      display: inline-block;
      width: 10rem;
      margin-bottom: 2vh;
      background-color: #618df2;
      padding: 0.8rem 0rem;
      font-size: 1.5rem;
      font-weight: 400;
      border: none;
      color: white;
      border-radius: 10px;
      a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
      }
    }
    button:hover {
      background-color: #3361cc;
      cursor: pointer;
    }
  }
  .image-container {
    img {
      height: 50vw;
      width: 100%;
    }
  }
  .button-btn {
    text-align: center;
    display: inline-block;
    width: 10rem;
    margin-bottom: 2vh;
    background-color: #618df2;
    padding: 0.8rem 0rem;
    font-size: 1.5rem;
    font-weight: 400;
    border: none;
    color: white;
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
      text-align: center;
      margin-bottom: 2.5vh;
      font-weight: 500;
    }
    p {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 5vh;
      color: white;
    }
  }
`;

export default Home;
