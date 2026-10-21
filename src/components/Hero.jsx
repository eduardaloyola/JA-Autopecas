import { useState } from "react";
import { SITE, whats, asset } from "../config";
import { PRODUTOS, ATALHOS, EXEMPLOS } from "../data";
import { useTypewriter } from "../hooks";

export default function Hero({ busca, setBusca, irParaPecas, escolherCategoria }) {
  const [foco, setFoco] = useState(false);
  const exemplo = useTypewriter(EXEMPLOS);
  const sugestoes = busca
    ? PRODUTOS.filter((p) => p.nome.toLowerCase().includes(busca.toLowerCase())).slice(0, 5)
    : [];

  return (
    <div className="hero" style={{ "--shop": `url("${asset("fachada.jpg")}")` }}>
      <div className="wrap">
        <div className="hero-copy">
          <h1>
            <span className="hero-brand">
              JA <span className="hero-brand-blue">AUTOPEÇAS</span>
            </span>
            <span className="hero-slogan">A peça certa, com atendimento de confiança.</span>
          </h1>
          <p>Encontre o que seu carro precisa. Nossa equipe confirma a aplicação e prepara seu orçamento pelo WhatsApp.</p>

          <div className="sw">
            <div className="hsearch">
              <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                onFocus={() => setFoco(true)}
                onBlur={() => setTimeout(() => setFoco(false), 160)}
                onKeyDown={(e) => { if (e.key === "Enter") { setFoco(false); irParaPecas(); } }}
                placeholder={exemplo ? `Ex.: ${exemplo}` : "Qual peça você procura?"}
                aria-label="Buscar peça"
                autoComplete="off"
              />
              <button className="btn btn-red" onClick={irParaPecas}>Buscar</button>
            </div>
            {foco && sugestoes.length > 0 && (
              <div className="sug">
                {sugestoes.map((p) => (
                  <button
                    key={p.nome}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => { setBusca(p.nome); setFoco(false); irParaPecas(); }}
                  >
                    {p.nome}<small>{p.categoria}</small>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chips">
            {ATALHOS.map((c) => (
              <button key={c} onClick={() => escolherCategoria(c)}>{c}</button>
            ))}
          </div>

          <a className="hero-link" href={whats(`${SITE.saudacao} Preciso de uma peça.`)} target="_blank" rel="noopener noreferrer">
            Prefiro falar com a equipe <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
