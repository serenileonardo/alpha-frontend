import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import Hero from "./components/Hero";
import ChiSiamo from "./components/ChiSiamo";
import Progetti from "./components/Progetti";
import CantiereDetail from "./pages/CantiereDetail";

export default function App() {
  return (
    <Routes>

      {/* LAYOUT PRINCIPALE */}
      <Route element={<DefaultLayout />}>
        
        <Route path="/" element={<Hero />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/progetti" element={<Progetti />} />
        <Route path="/cantiere/:id" element={<CantiereDetail />} />

      </Route>

    </Routes>
  );
}