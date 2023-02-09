import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useUserContext } from "../context/user-context";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { loginWithRedirect, myUser, logout, handleSidebar } = useUserContext();
  console.log(myUser);
  // console.log(loginWithRedirect);
  return (
    <Wrapper>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Simplenote</p>
        </div>
      </Link>
      <ul className="navlinks">
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contactus">contact us</Link>
        </li>
        {myUser ? (
          <div className="">
            <Link to="/notes" className="user">
              <FaUserAlt style={{ fontSize: "3vh" }} color="white" />
            </Link>
            {/* <div className="line"></div> */}
            <button className="signup button-btn " onClick={logout}>
              log-out
            </button>
          </div>
        ) : (
          <li className="login-btn">
            <Link to="/login">login</Link>
            <div className="line"></div>
            <button className="signup button-btn " onClick={loginWithRedirect}>
              Sign up
            </button>
          </li>
        )}
        {/* <li className="login-btn">
          <Link to="/login">login</Link>
          <div className="line"></div>
          <button className="signup" onClick={loginWithRedirect}>
            Sign up
          </button>
        </li> */}
      </ul>
      <GiHamburgerMenu onClick={handleSidebar} className="ham" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  /* margin: ; */
  padding: 2rem 15vw;
  width: 100%;
  background-color: #1f2123;

  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.5rem;
      font-weight: 1rem;
      color: white;
    }
  }
  .navlinks {
    display: none;

    li {
      list-style: none;
      margin: 0 2rem;
      a {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
      }
      a:hover {
        color: #6c7c7f;
      }
    }
    .login-btn {
      display: flex;
      /* justify-content: center;
      align-items: center; */
      /* background-color: orange; */
      .button-btn {
        background-color: transparent;
        color: white;
        font-size: 1.3rem;
        /* margin: 0.5rem; */
        margin-left: 0.3rem;
        border: none;
        border-left: 2px solid white;
        padding-left: 5px;
      }
    }
  }
  .button-btn {
    background-color: transparent;
    color: white;
    font-size: 1.3rem;
    /* margin: 0.5rem; */
    margin-left: 0.3rem;
    border: none;
    border-left: 2px solid white;
    padding-left: 5px;
    cursor: pointer;
  }
  .ham {
    display: flex;
    color: white;
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    .ham {
      display: none;
    }
    .navlinks {
      display: flex;
    }
  }
`;
export default Navbar;
