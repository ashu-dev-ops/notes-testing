import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Wrapper>
      <div>
        <h1>About simple notes</h1>
        <p className="para">
          Simplenote is a note-taking application with Markdown support. In
          addition to being accessible via most web browsers, cross-platform
          apps are available on Android, Linux, Windows, iOS, and macOS.
          Simplenote has an externally accessible API, allowing other clients to
          be written: macOS Dashboard widget DashNote; nvPY, a cross-platform
          Simplenote client; amongst others. In addition, the macOS program
          Notational Velocity and the Windows utility ResophNotes can also sync
          with Simplenote
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .about-page {
    text-align: center;
  }
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  .para {
    /* background-color: orange; */
    margin: 2vw 15vw;
    font-size: 1.5rem;
    color: white;
    text-align: left;
    line-height: 1.9rem;
    word-spacing: 1rem;
  }
  @media (min-width: 768px) {
    height: 90vh;
    /* width: 100vw; */

    margin: 0rem 5rem;

    p {
      margin: 2vh 15vw;
      font-size: 3vh;
      /* font-weight: bold; */
      color: white;
    }
  }
`;

export default AboutUs;
