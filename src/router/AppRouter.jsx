import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<PrivateRouter/>}>
            <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};

export default AppRouter;
