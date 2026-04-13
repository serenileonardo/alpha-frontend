import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="app-layout">

      <Navbar />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />

    </div>
  );
}