import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shopping } from "./pages/Shopping/Shopping";
import { NotFound } from "./pages/NotFound/NotFound";
import { User } from "./pages/User/User";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./pages/Cart/Cart";
import { NewSession } from "./pages/NewSession/NewSession";
import { Connexion } from "./pages/Connexion/Connexion";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="h-screen px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/user" element={<User />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="api/sessions/create" element={<NewSession />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
