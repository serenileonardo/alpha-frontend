import { Link } from "react-router-dom";
import { cantieri } from "../data/cantieri";

export default function Progetti() {
  return (
    <div className="container my-5">

      <h2 className="text-danger fw-bold mb-5 pt-4">
        I nostri progetti
      </h2>

      <div className="row g-4">

        {cantieri.map((c) => (
          <div className="col-md-4" key={c.id}>

            <div className="card shadow-sm h-100">

              <div
                style={{
                  height: "200px",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="card-body">

                <h5 className="card-title text-danger">
                  {c.indirizzo}
                </h5>

                <p className="card-text text-muted">
                  Cantiere completato a Roma
                </p>

                <Link
                  to={`/cantiere/${c.id}`}
                  className="btn btn-outline-danger w-100"
                >
                  Vedi dettagli
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}