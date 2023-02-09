import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import NoteList from "./components/NoteList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import ProtectedRoute from "./components/ProtectedRoute";
import NotesPage from "./pages/NotesPage";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="container">
      {/* <BrowserRouter></BrowserRouter> */}
      <BrowserRouter>
        <SideBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <NotesPage />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/direct-notes" element={<NotesPage />} />
          {/* <Route path="/notes" element={<NoteList />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
          {/* <Route path="/notespage" element={<NotesPage />} /> */}
          {/* // <NoteList /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
