import { SITE, whats } from "../config";
import { PRODUTOS } from "../data";

export default function Products({ busca, setBusca, categoria, limpar, carrinho, alterar }) {
  const termo = busca.toLowerCase();
  const lista = PRODUTOS.filter(
    (p) =>
      (categoria === "Todos" || p.categoria === categoria) &&
      (!busca || `${p.nome} ${p.categoria}`.toLowerCase().includes(termo))
  );

  return (
    <section id="pecas" className="product-section">
      <div className="wrap">
        <div className="sec-h">
          <div>
            <h2>Peças em destaque</h2>
            <p>Alguns exemplos do que temos (imagens ilustrativas). Não viu a sua? Pergunte pelo WhatsApp.</p>
          </div>
          <div className="product-tools">
            <input
              className="product-search"
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar nas peças"
              aria-label="Buscar peças por nome ou categoria"
            />
            <span className="result-count" aria-live="polite">
              {lista.length} {lista.length === 1 ? "peça encontrada" : "peças encontradas"}
            </span>
          </div>
        </div>

        {(categoria !== "Todos" || busca) && (
          <div className="tabs">
            <button className="tab" aria-pressed="true" onClick={limpar}>
              {busca ? `“${busca}”` : categoria} ✕
            </button>
          </div>
        )}

        {lista.length ? (
          <div className="prods">
            {lista.map((p, i) => {
              const qtd = carrinho[p.nome] || 0;
              return (
                <article className="prod" key={p.nome} style={{ animationDelay: (i % 6) * 60 + "ms" }}>
                  <div className="slot">
                    <img className="ph" src={p.img} alt={p.nome} loading="lazy" />
                  </div>
                  <div className="pb">
                    <small>Consulte marca e aplicação</small>
                    <h3>{p.nome}</h3>
                    {qtd ? (
                      <div className="qty">
                        <button onClick={() => alterar(p.nome, -1)} aria-label="Diminuir">−</button>
                        <b>{qtd}</b>
                        <button onClick={() => alterar(p.nome, 1)} aria-label="Aumentar">+</button>
                      </div>
                    ) : (
                      <button className="btn btn-navy" onClick={() => alterar(p.nome, 1)}>+ Adicionar ao pedido</button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="none">
            Nenhuma peça na vitrine para essa busca. Pergunte pelo WhatsApp:{" "}
            <a href={whats(`${SITE.saudacao} Procuro: ${busca || categoria}`)} target="_blank" rel="noopener noreferrer">
              enviar “{busca || categoria}”
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
