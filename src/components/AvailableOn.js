import React from "react";
import styled from "styled-components";
// import { BsApple } from "react-icons/bs";
// import { downloadFrom } from "../constants/downloadFrom";
import SingleStore from "./SingleStore";

const AvailableOn = () => {
  return (
    <Wrapper>
      <h2 className="av-h2">Available on all your devices</h2>
      <h3 className="av-h3">
        Download Simplenote for any device and stay in sync - all the time,
        everywhere.
      </h3>
      <div className="box-container">
        <SingleStore />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 2rem 1rem;
  .av-h2 {
    text-align: center;
  }
  .av-h3 {
    text-align: center;
  }
  @media (min-width: 800) {
    margin: 2rem 5rem;
  }
`;

export default AvailableOn;
