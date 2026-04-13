import { useParams } from "react-router-dom";
import { cantieri } from "../data/cantieri";

export default function CantiereDetail() {
  const { id } = useParams();

  const cantiere = cantieri.find((c) => c.id === Number(id));

  if (!cantiere) {
    return (
      <div className="container mt-5">
        <h2>Cantiere non trovato</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {/* TITOLO */}
      <h1 className="text-danger">{cantiere.nome}</h1>

      {/* INDIRIZZO */}
      <p className="text-muted">{cantiere.indirizzo}</p>

      <hr />

      {/* DESCRIZIONE */}
      <h5>Descrizione progetto</h5>
      <p>{cantiere.descrizione}</p>

      {/* FOTO MOCK */}
      <div className="mt-4">
        <h5>Foto cantiere</h5>

        <div className="row">
          <div className="col-md-4">
            <div className="bg-secondary text-white p-5 text-center rounded">
              Foto 1
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-secondary text-white p-5 text-center rounded">
              Foto 2
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-secondary text-white p-5 text-center rounded">
              Foto 3
            </div>
          </div>
        </div>
      </div>

      {/* WHATSAPP DINAMICO */}
      <div className="mt-5">
        <a
          href={`https://wa.me/393358280109?text=${encodeURIComponent(
            `Ciao, vorrei informazioni sul cantiere: ${cantiere.indirizzo}`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-success btn-lg"
        >
          Contatta su WhatsApp
        </a>
      </div>
    </div>
  );
}