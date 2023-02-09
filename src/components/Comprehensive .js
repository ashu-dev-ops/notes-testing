import React from "react";
import styled from "styled-components";
import { info } from "../constants/info";
// import Icon from "./Icon";

const Comprehensive = () => {
  return (
    <Wrapper>
      <h2>
        Comprehensive underneath, <br /> simple on the surface
      </h2>

      <div className="info-container">
        {info.map((i) => {
          return (
            <article className="info">
              <div className="info-header">
                {/* <{i.icons}> */}
                {i.icon}
                {/* <Icon icons={i.icon} /> */}

                <h3>{i.heading}</h3>
              </div>
              <p>{i.para}</p>
            </article>
          );
        })}
      </div>
      <div className="line"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* margin: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  h2 {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 3vh;
  }
  .info-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    /* grid-column-gap: 6rem; */
    /* background-color: red; */
    overflow: hidden;
    /* justify-items: center; */
  }
  .info {
    display: flex;
    flex-direction: column;
    margin: 3vh;
    /* padding: 0 3vw; */

    .info-header {
      margin-bottom: 1vh;
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      .icon-info {
        font-size: 4.5vh;
        /* margin-right: 1vmax; */
        /* margin-bottom: 2vmax; */
        /* padding-bottom: 10px; */
        color: #2d51a2;
        position: relative;
        top: -5px;
      }
      h3 {
        font-size: 1.5rem;
        font-weight: 100;
      }
    }
    p {
      color: #6c7c7f;
      font-size: 1rem;
      text-align: left;
    }
  }
  .line {
    height: 5px;
    width: 70%;
    background-color: white;
    align-self: center;
    border-radius: 20px;
  }
  @media (min-width: 768px) {
    margin: 3rem;
    h2 {
      font-size: 3rem;
    }
    .info {
      padding: 0 3vw;
    }
  }
`;

export default Comprehensive;
