import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cantieri } from "../data/cantieri";

export default function MapSection() {
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
            <Marker key={c.id} position={[c.lat, c.lng]}>

              {/* 🔴 HOVER → ORA INDIRIZZO */}
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                <strong>{c.indirizzo}</strong>
              </Tooltip>

              {/* 🔵 CLICK → DETTAGLIO */}
              <Popup>
                
                <p>{c.indirizzo}</p>
                <small>{c.descrizione}</small>
              </Popup>

            </Marker>
          ))}

        </MapContainer>
      </div>
    </div>
  );
}