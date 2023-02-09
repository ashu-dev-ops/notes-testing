import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import userReducer from "../reducer/userReducer";
import { useAuth0 } from "@auth0/auth0-react";
const UserContext = createContext();
const initialState = {
  loggedIn: false,
  isSidebarOpen: true,
};
const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { logout, loginWithRedirect, user } = useAuth0();
  // console.log("hio");
  // console.log(user);
  // console.log(isAuthenticated);
  const userLogOut = () => {
    dispatch({
      type: "MAKE_USER_LOGOUT",
    });
  };
  // console.log(loginWithRedirect);
  const [myUser, setMyUser] = useState(null);
  // useEffect(() => {
  //   // console.log(isLoading);
  //   // console.log(isAuthenticated);//is boolean and return true if login
  //   // console.log(myUser);//contains data about the use enamil and username
  //   if (isAuthenticated) {
  //     // console.log(user);
  //     setMyUser(user);
  //   } else {
  //     setMyUser(false);
  //   }
  // }, [isAuthenticated]);
  useEffect(() => {
    setMyUser(user);
  }, [user]);
  // console.log(myUser);
  const handleSidebar = () => {
    console.log("running");

    dispatch({
      type: "HANDLE-SIDEBAR",
    });
  };
  return (
    <UserContext.Provider
      value={{
        ...state,
        myUser,
        userLogOut,
        logout,
        loginWithRedirect,
        handleSidebar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
export default UserContextProvider;
