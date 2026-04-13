import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cantieri } from "../data/cantieri";
import { useNavigate } from "react-router-dom";

export default function MapSection() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-danger mb-3">I nostri cantieri a Roma</h2>

      <div style={{ height: "500px" }}>
        <MapContainer
          center={[41.9028, 12.4964]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {cantieri.map((c) => (
            <Marker
              key={c.id}
              position={[c.lat, c.lng]}
              eventHandlers={{
                click: () => navigate(`/cantiere/${c.id}`)
              }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                <div style={{ textAlign: "center" }}>
                  <strong>{c.indirizzo}</strong>
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}