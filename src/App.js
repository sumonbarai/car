import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import ChackOut from "./pages/ChackOut/ChackOut";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route
          path="/serviceDetails/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <ChackOut></ChackOut>
            </RequireAuth>
          }
        />
        <Route
          path="/forgetpassword"
          element={<ForgetPassword></ForgetPassword>}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
