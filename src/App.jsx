import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-screen-xl  mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;
