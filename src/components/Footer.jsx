import { SITE } from "../config";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div><h3>{SITE.nome}</h3><p>Peça certa, preço bom e atendimento de confiança.</p></div>
        <div><h3>Contato</h3><p><a href={`tel:+${SITE.telefone}`}>{SITE.telefoneTexto}</a></p><p>WhatsApp: mesmo número</p></div>
        <div><h3>Endereço</h3><p>{SITE.endereco}</p></div>
        <div className="copy">© {new Date().getFullYear()} {SITE.nome}. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
