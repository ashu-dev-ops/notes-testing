import React from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useUserContext } from "../context/user-context";

const Sidebar = () => {
  const { isSidebarOpen, handleSidebar } = useUserContext();
  console.log(isSidebarOpen);

  return (
    <Wrapper>
      <aside
        className={`${!isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="container">
          <div className="right">
            <li>
              <Link to="/direct-notes" onClick={handleSidebar}>
                Notes
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={handleSidebar}>
                help
              </Link>
            </li>

            <li>
              {" "}
              <Link to="/about" onClick={handleSidebar}>
                About us
              </Link>
            </li>
          </div>
        </div>

        <RxCross1 onClick={handleSidebar} className="close-btn" />
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    display: flex;
    .left {
      width: 0%;
      img {
        /* height: 10px; */
        width: 100%;
        height: 100%;
        transition: all 1s;
      }
    }
    .right {
      width: 100%;
      background-color: #1f2123;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      .support {
        /* color: white; */
        margin: 1rem;
        cursor: pointer;
        color: white;
        list-style: none;
        font-weight: bold;
        font-size: 2rem;
        height: fit-content;
        position: relative;
        /* width: fit-content; */
        display: flex;
        justify-content: space-between;
        /* padding: 0 2rem; */
        span {
          opacity: 0;
          margin-right: 4rem;
        }
      }
      .support:hover.support span {
        opacity: 1;
      }
      .line {
        width: 100%;
        height: 4px;
        background-color: white;
        margin: 5px 10px;
        border-radius: 30px;
      }
      /* justify-content: center; */
      li {
        margin: 1rem;
        cursor: pointer;
        color: white;
        list-style: none;
        font-weight: bold;
        font-size: 2rem;
        height: fit-content;
        position: relative;
        width: fit-content;
        a {
          text-decoration: none;
          color: white;
        }
      }

      li::after {
        width: 0%;
        position: absolute;
        content: "";
        background-color: gray;
        bottom: -5px;
        height: 5px;
        /* right: 0; */
        left: 0;
        transition: all 0.5s;
      }
      li:hover:after {
        width: 100%;
      }
      /* li:hover {
        text-decoration: underline;
      } */
    }
  }
  /* grid-template-columns: 1fr 1fr; */
  .close-btn {
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 5rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
    font-weight: bolder;
    transition: all cubic-bezier(0.445, 0.05, 0.55, 0.95);
    color: white;
    /* padding: 2rem; */
  }
  .close-btn:hover {
    border: 2px solid grey;
    transform: rotate("180deg");
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: red; */
    transition: var(--transition);
    transform: translateY(-120%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media (min-width: 768px) {
    .container {
      .left {
        width: 60%;
      }
      .right {
        width: 40%;
      }
    }

    .close-btn {
      background-color: black;
    }
  }
`;

export default Sidebar;
