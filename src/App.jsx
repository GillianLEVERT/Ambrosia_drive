import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shopping } from "./pages/Shopping/Shopping";
import { NotFound } from "./pages/NotFound/NotFound";
import { User } from "./pages/User/User";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Cart } from "./pages/Cart/Cart";
import { NewSession } from "./pages/NewSession/NewSession";
import { Booking } from "./components/Booking/Booking";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/user" element={<User />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="api/sessions/create" element={<NewSession />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
