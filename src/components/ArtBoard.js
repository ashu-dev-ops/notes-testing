import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";

import { useNoteContext } from "../context/note-context";
const colors = ["#F06F32", "#A44444", "#B5EDBA"];
const ArtBoard = () => {
  const { changeShowAddNote } = useNoteContext();
  const [color, setColor] = useState(false);

  return (
    <div>
      <Wrapper>
        {/* <h1>hiiiiiiiiiii</h1> */}

        <IoIosAddCircle
          color="white"
          fontSize="4rem"
          onClick={() => setColor(!color)}
        />
        {color && (
          <div className="artBoard">
            {colors.map((i) => {
              return (
                <button
                  className="color-btn"
                  style={{ backgroundColor: i }}
                  value={i}
                  key={i}
                  onClick={(e) => {
                    setColor(!color);
                    // console.log(e.target.value);
                    changeShowAddNote(e.target.value);
                  }}
                >
                  {/* {i} */}
                </button>
              );
            })}
          </div>
        )}
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  /* transition: all 1s; */

  .artBoard {
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    /* align-items: center;
    justify-content: center; */
    /* transition: all 1s; */
  }
  .color-btn {
    transition: all 1s;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`;

export default ArtBoard;
