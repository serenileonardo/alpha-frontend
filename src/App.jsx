import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import ChiSiamo from "./components/ChiSiamo";
import Progetti from "./components/Progetti";
import CantiereDetail from "./pages/CantiereDetail";

export default function App() {
  return (
    <Routes>

      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/progetti" element={<Progetti />} />
        <Route path="/cantiere/:id" element={<CantiereDetail />} />
      </Route>

    </Routes>
  );
}