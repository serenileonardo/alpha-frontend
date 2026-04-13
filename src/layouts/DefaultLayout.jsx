import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { Outlet } from "react-router-dom";
import MapSection from "../components/MapSection"

export default function DefaultLayout() {
  return (
    <div className="app-layout">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENUTO DINAMICO PAGINE */}
      <main className="content">
        <Outlet />
        <MapSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOAT BUTTON */}
      <WhatsAppFloat />

    </div>
  );
}