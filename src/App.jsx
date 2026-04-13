import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import CantiereDetail from "./pages/CantiereDetail";

function Home() {
  return (
    <>
      <Hero />
      <MapSection />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cantiere/:id" element={<CantiereDetail />} />
      </Routes>

      <Footer />
    </>
  );
}
