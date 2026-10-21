import { CATEGORIAS } from "../data";
import { Icone } from "./Icons";

export default function Categories({ escolher, categoriaAtual }) {
  return (
    <section className="category-section">
      <div className="wrap">
        <div className="sec-h">
          <div>
            <h2>Cada sistema. A solução certa.</h2>
            <p>Escolha uma categoria para ver as peças.</p>
          </div>
        </div>
        <div className="cats">
          {CATEGORIAS.map(([nome, desc]) => (
            <button
              key={nome}
              className={`cat${categoriaAtual === nome ? " selecionada" : ""}`}
              aria-pressed={categoriaAtual === nome}
              onClick={() => escolher(nome)}
            >
              <Icone nome={nome} />
              <b>{nome}</b>
              <span>{desc}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
