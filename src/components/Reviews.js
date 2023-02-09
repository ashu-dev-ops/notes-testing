import React from "react";
import styled from "styled-components";
import { reviewList } from "../constants/reviewList";
const Reviews = () => {
  return (
    <Wrapper>
      <h3>What people are saying</h3>
      <div className="review-container">
        {reviewList.map((i) => {
          return (
            <article className="review">
              <div className="line"></div>
              <div className="content">
                <p>{i.para}</p>
                <h4>{i.name}</h4>
              </div>
            </article>
          );
        })}
      </div>
      <div className="line-buttom"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 2vh;
  h3 {
    text-align: center;
  }
  .review-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 0 5rem;
  }
  .review {
    display: flex;
    padding: 4vh 3vh;

    /* background-color: orange; */
    h4 {
      text-align: left;
      font-family: cursive;
      color: #6c7c7f;
    }
    .line {
      height: 100%;
      width: 5px;
      background-color: white;
      margin-right: 15px;
    }
    p {
      color: white;
      font-size: 1rem;
      text-align: left;
    }
  }
  .line-buttom {
    height: 5px;
    width: 70%;
    background-color: white;
    align-self: center;
    border-radius: 20px;
    margin-top: 5vh;
    /* padding: 5vh; */
    margin-bottom: 40vh;
    margin: auto;
  }
  @media (min-width: 700px) {
    .review {
      margin: 1rem;
    }
  }
`;

export default Reviews;
