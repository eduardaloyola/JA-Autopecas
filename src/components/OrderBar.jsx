import { SITE, whats } from "../config";
import { WhatsAppIcone } from "./Icons";

export default function OrderBar({ carrinho, limpar }) {
  const itens = Object.entries(carrinho);
  const total = itens.reduce((soma, [, qtd]) => soma + qtd, 0);
  const lista = itens.map(([nome, qtd]) => `${qtd}x ${nome}`).join(", ");

  return (
    <>
      {total > 0 && (
        <div className="bar" role="status">
          <div>
            <b>{total} {total > 1 ? "peças" : "peça"} no pedido</b>
            <span>{lista}</span>
          </div>
          <button className="x" onClick={limpar}>Limpar</button>
          <a className="btn btn-wa" href={whats(`${SITE.saudacao} Gostaria de orçamento destas peças: ${lista}. Veículo (modelo e ano): `)} target="_blank" rel="noopener noreferrer">
            Enviar no WhatsApp
          </a>
        </div>
      )}
      <a className={"fab" + (total ? " up" : "")} href={whats(SITE.saudacao)} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <WhatsAppIcone />
      </a>
    </>
  );
}
