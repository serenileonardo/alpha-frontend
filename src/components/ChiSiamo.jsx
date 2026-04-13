export default function ChiSiamo() {
  return (
    <div className="container my-5">

      {/* TITOLO */}
      <h2 className="text-danger fw-bold mb-4">
        Chi siamo
      </h2>

      {/* INTRO */}
      <p className="lead">
        <strong>Alpha Costruzioni</strong> è un’azienda specializzata nella realizzazione di box auto e strutture edilizie a Roma.
        Da anni operiamo nel settore con professionalità, affidabilità e attenzione ai dettagli.
      </p>

      <hr className="my-4" />

      {/* SEZIONE STORIA */}
      <div className="row">

        <div className="col-md-6">
          <h4>La nostra storia</h4>
          <p>
            Siamo nati con l’obiettivo di offrire soluzioni edilizie solide e sicure.
            Nel tempo abbiamo realizzato numerosi cantieri su tutto il territorio di Roma,
            costruendo un rapporto di fiducia con i nostri clienti.
          </p>
        </div>

        <div className="col-md-6">
          <h4>I nostri valori</h4>
          <ul>
            <li>✔ Qualità dei materiali</li>
            <li>✔ Affidabilità nei tempi di consegna</li>
            <li>✔ Sicurezza nei cantieri</li>
            <li>✔ Trasparenza con il cliente</li>
          </ul>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-4">
        <a
          href="https://wa.me/393358280109"
          target="_blank"
          rel="noreferrer"
          className="btn btn-danger btn-lg"
        >
          Parla con noi
        </a>
      </div>

    </div>
  );
}