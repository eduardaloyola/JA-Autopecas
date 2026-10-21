import { AVALIACOES } from "../data";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="reviews-section">
      <div className="wrap">
        <div className="sec-h">
          <div>
            <h2>Quem compra, recomenda</h2>
            <p><span className="stars">★★★★★</span> 4,5 de 5, média das avaliações do Google abaixo</p>
          </div>
        </div>
        <div className="revs">
          {AVALIACOES.map(([nome, nota, texto]) => (
            <figure className="rev" key={nome}>
              <div className="stars" aria-label={`${nota} de 5 estrelas`}>
                {"★".repeat(nota)}<i>{"★".repeat(5 - nota)}</i>
              </div>
              <p>“{texto}”</p>
              <figcaption className="who">{nome}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
