import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// dati cantieri (mock, poi li colleghiamo al backend)
const cantieri = [
  {
    id: 1,
    nome: "Via Luigi Angeloni",
    indirizzo: "Via Luigi Angeloni, 90 Roma",
    lat: 41.8856,
    lng: 12.5132
  },
  {
    id: 2,
    nome: "Pigneto",
    indirizzo: "Via del Pigneto, 303 Roma",
    lat: 41.8919,
    lng: 12.5311
  },
  {
    id: 3,
    nome: "Box Nomentana",
    indirizzo: "Circonvallazione Nomentana, 140 Roma",
    lat: 41.9108,
    lng: 12.5186
  },
  {
    id: 4,
    nome: "Box Viale Marco Polo",
    indirizzo: "Viale Marco Polo, 84 Roma",
    lat: 41.8732,
    lng: 12.4827
  },
  {
    id: 5,
    nome: "Box Livio Andronico 14",
    indirizzo: "Via Livio Andronico, 14 Roma",
    lat: 41.8976,
    lng: 12.5348
  },
  {
    id: 6,
    nome: "Box Costantino",
    indirizzo: "Via Costantino, 85 Roma",
    lat: 41.8649,
    lng: 12.5164
  },
  {
    id: 7,
    nome: "Box Montessori",
    indirizzo: "Via Maria Montessori, 16-18 Roma",
    lat: 41.9034,
    lng: 12.5289
  },
  {
    id: 8,
    nome: "Box Gregorio XI",
    indirizzo: "Via Gregorio XI, 25 Roma",
    lat: 41.8887,
    lng: 12.4462
  },
  {
    id: 9,
    nome: "Box Livio Andronico 34",
    indirizzo: "Via Livio Andronico, 34 Roma",
    lat: 41.8979,
    lng: 12.5356
  },
  {
    id: 10,
    nome: "Box Antonio Spinetti",
    indirizzo: "Via Antonio Spinetti, 6 Roma",
    lat: 41.9241,
    lng: 12.5047
  },
  {
    id: 11,
    nome: "Box Pietro Fedele",
    indirizzo: "Via Pietro Fedele, 72 Roma",
    lat: 41.8798,
    lng: 12.5442
  },
  {
    id: 12,
    nome: "Box Angelo Mosso",
    indirizzo: "Via Angelo Mosso, 57 Roma",
    lat: 41.9123,
    lng: 12.5601
  }
];

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
              
              {/* 🔴 HOVER */}
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                <strong>{c.nome}</strong>
              </Tooltip>

              {/* 🔵 CLICK */}
              <Popup>
                <h6>{c.nome}</h6>
                <p>{c.indirizzo}</p>
              </Popup>

            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}