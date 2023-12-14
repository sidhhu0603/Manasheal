import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes,  Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import FileManager from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import AdultCounselling from "./pages/AdultCounselling"
import ChildCounselling from "./pages/ChildCounselling"
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/adult" element={< AdultCounselling/>} />
          <Route path="/services/child" element={< ChildCounselling/>} />
          <Route path="/blog/posts" element={<Posts isAuth={isAuth} />} />
          <Route path="/blog/addpost" element={<AddPost isAuth={isAuth} />} />
          <Route path="/blog/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/blog/" element={<Blogs />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Saved />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
    


  );
}

export default App;