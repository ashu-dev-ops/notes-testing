const userReducer = (state, action) => {
  if (action.type === "HANDLE-SIDEBAR") {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  return state;
};
export default userReducer;
