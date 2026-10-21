import { useState } from "react";
import { SITE, whats } from "../config";
import { FAQ } from "../data";

export default function Help() {
  const [aberto, setAberto] = useState(0);
  return (
    <section className="help-section">
      <div className="wrap help">
        <div className="wa-card">
          <h2>Na dúvida, não arrisque.</h2>
          <p>Fale com a equipe e confirme a peça e a aplicação antes de fechar o pedido.</p>
          <a className="btn btn-wa" href={whats(SITE.saudacao)} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
        </div>
        <div className="faq">
          <h2>Antes de fechar o pedido</h2>
          {FAQ.map(([pergunta, resposta], i) => (
            <div key={pergunta}>
              <button onClick={() => setAberto(aberto === i ? -1 : i)} aria-expanded={aberto === i}>
                {pergunta}<span>{aberto === i ? "−" : "+"}</span>
              </button>
              {aberto === i && <p>{resposta}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
