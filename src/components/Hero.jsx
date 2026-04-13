export default function Hero() {
  return (
    <section
      style={{
        height: "80vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1574955452/p/photo/image/3276503/cemento_armato_box_auto_128.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />

      {/* CONTENT */}
      <div
        className="d-flex align-items-center"
        style={{
          position: "relative",
          height: "100%",
          color: "white",
        }}
      >
        <div className="container">

          <h1 className="display-4 fw-bold">
            Alpha Costruzioni
          </h1>

          <p className="lead mt-3">
            Realizziamo box auto e strutture edilizie a Roma con qualità e sicurezza.
          </p>

          <div className="mt-4 d-flex gap-3 flex-wrap">
            <a
              href="https://wa.me/393358280109"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-lg"
            >
              Contattaci su WhatsApp
            </a>

            <a href="#progetti" className="btn btn-outline-light btn-lg">
              I nostri progetti
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}