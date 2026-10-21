import { SITE, asset } from "../config";

export default function Location() {
  return (
    <section id="onde" className="location-section">
      <div className="wrap">
        <div className="wa-card shopbg" style={{ "--shop": `url("${asset("pecas-visita.png")}")` }}>
          <div>
            <h2 style={{ fontSize: 38 }}>Venha nos visitar</h2>
            <p style={{ margin: 0 }}>{SITE.endereco}</p>
          </div>
          <a className="btn btn-red" href={SITE.mapa} target="_blank" rel="noopener noreferrer">Abrir no mapa</a>
        </div>
      </div>
    </section>
  );
}
