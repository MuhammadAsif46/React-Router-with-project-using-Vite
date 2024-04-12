import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
