import { useState } from "react";
import { SITE, whats, asset } from "../config";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header>
      <div className="wrap">
        <div className="top">
          <a className="brand" href="#topo" aria-label={SITE.nome} onClick={fecharMenu}>
            <img src={asset("logo-laranja.png")} alt={SITE.nome} />
          </a>
          <nav className={`mnav${menuAberto ? " aberto" : ""}`} aria-label="Navegação principal">
            <a href="#pecas" onClick={fecharMenu}>Peças</a>
            <a href="#avaliacoes" onClick={fecharMenu}>Avaliações</a>
            <a href="#onde" onClick={fecharMenu}>Onde estamos</a>
          </nav>
          <a className="btn btn-wa" href={whats(SITE.saudacao)} target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
