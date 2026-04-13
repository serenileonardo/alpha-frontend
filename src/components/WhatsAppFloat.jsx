import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "39XXXXXXXXXX";

  const link = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
        textDecoration: "none",
      }}
    >
      <MessageCircle size={32} color="white" />
    </a>
  );
}