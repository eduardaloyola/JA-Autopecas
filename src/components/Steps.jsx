import { PASSOS } from "../data";

export default function Steps() {
  return (
    <section className="steps-section">
      <div className="wrap">
        <div className="sec-h"><h2>Como pedir</h2></div>
        <div className="steps">
          {PASSOS.map(([titulo, desc]) => (
            <div className="step" key={titulo}><h3>{titulo}</h3><p>{desc}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
