// Dados da loja: edite aqui para atualizar o site inteiro.
export const SITE = {
  nome: "JA Autopeças",
  telefone: "5571987015648", // formato internacional, só números
  telefoneTexto: "(71) 98701-5648",
  endereco: "Estr. das Barreiras, S/N, Salvador - BA, 41195-001",
  mapa:
    "https://www.google.com.br/maps/place/JA+Auto+Pe%C3%A7as/@-12.9495774,-38.4634615,17z/data=!3m1!4b1!4m6!3m5!1s0x7161a94c4978213:0x33fe39e315f0da1!8m2!3d-12.9495774!4d-38.4608866!16s%2Fg%2F1thp85l5?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D",
  saudacao: "Olá! Vim pelo site da JA Autopeças.",
};

export const whats = (texto) =>
  `https://wa.me/${SITE.telefone}?text=${encodeURIComponent(texto)}`;

// Caminho de arquivos da pasta /public (funciona em qualquer hospedagem)
export const asset = (caminho) => import.meta.env.BASE_URL + caminho;
