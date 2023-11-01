import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//pages & components
import NavBar from "./components/NavBar";
import ReviewDetails from "./components/ReviewDetails";
import Home from "./Pages/Home";
import About from "./Pages/About";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/reviews" element={<ReviewDetails />} />
          <Route path="/about" element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
