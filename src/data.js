import { SITE, asset } from "./config";

// [nome, descrição curta]. Os nomes precisam existir em Icons.jsx.
export const CATEGORIAS = [["Freios","Pastilhas, discos e lonas"],["Suspensão","Amortecedores e buchas"],["Motor","Velas, correias e juntas"],["Óleos e filtros","Óleo, ar, combustível"],["Elétrica","Baterias e sensores"],["Iluminação","Faróis e lâmpadas"],["Arrefecimento","Radiador e bomba d’água"],["Outras peças","Não achou? A gente pede"]];

const peca = (nome, categoria, arquivo) => ({
  nome,
  categoria,
  img: asset(`produtos/${arquivo}.jpg`),
});

// Para incluir uma peça: coloque a foto em public/produtos e adicione uma linha aqui.
export const PRODUTOS = [
  peca("Filtro de óleo", "Óleos e filtros", "filtro-de-oleo"),
  peca("Filtro de ar", "Óleos e filtros", "filtro-de-ar"),
  peca("Pastilha de freio", "Freios", "pastilha-de-freio"),
  peca("Disco de freio", "Freios", "disco-de-freio"),
  peca("Amortecedor dianteiro", "Suspensão", "amortecedor"),
  peca("Bateria automotiva", "Elétrica", "bateria"),
  peca("Vela de ignição", "Motor", "vela-de-ignicao"),
  peca("Kit de correia dentada", "Motor", "kit-correia-dentada"),
  peca("Palhetas limpadoras", "Outras peças", "palhetas"),
  peca("Óleo de motor", "Óleos e filtros", "oleo-de-motor"),
  peca("Kit de embreagem", "Outras peças", "kit-embreagem"),
  peca("Radiador", "Arrefecimento", "radiador"),
];

export const ATALHOS = ["Freios", "Óleos e filtros", "Elétrica", "Suspensão"];
export const EXEMPLOS = ["pastilha de freio", "filtro de óleo", "bateria", "amortecedor", "vela de ignição", "radiador"];

// [título, descrição, desenho do ícone]
export const BENEFICIOS = [
  ["Peças originais", "Qualidade que os clientes destacam", "M13 20l5 5 9-10"],
  ["Se não tem, a gente pede", "Pedido sob encomenda, em alguns dias", "M12 20h16M22 14l6 6-6 6"],
  ["Atendimento sincero", "Equipe cortês, ágil e honesta", "M20 12v9l6 3"],
  ["Preço bom", "Preços acessíveis e competitivos", "M14 24l6-12 6 12z"],
];

export const PASSOS = [
  ["Escolha a peça", "Navegue pela vitrine ou use a busca."],
  ["Envie pelo WhatsApp", "Um clique abre a conversa com o pedido já escrito."],
  ["Receba ou retire", "Combine entrega ou retirada na loja, e o pagamento."],
];

// [nome, nota, comentário] - avaliações reais do Google
export const AVALIACOES = [["Rui Souza",4,"Preços acessíveis com atendimento de qualidade. Fui muito bem atendido e com bastante agilidade e ainda trocaram a peça do carro gratuitamente, pois era um serviço básico."],["Fabio Silva",5,"Sempre compro lá. Além da atenção e da sinceridade com o cliente, que é o principal da loja, nas oportunidades que estive lá este ano os preços foram melhores que o Varejão e o Batatão."],["Fábio Carvalho",5,"Variedades de peças. E quando não achei lá, um motoboy foi buscar na bx.quintas e entregou na oficina onde meu carro estava sem me cobrar frete!"],["Luciana Martins",5,"Excelente atendimento, variedade de peças automotivos, mecânicos excelentes e de confiança!!"],["bradescowellington53 Freitas",3,"Atendimento, peças para quase todos os veículos e se não tiver, eles fazem o pedido e em três dias chega"],["João dos Santos Neto",5,"Excelente atendimento, equipe competente e cortês, peças de qualidade e preços acessíveis, recomendo tranquilamente."],["Alex Silva",4,"Atendimento muito satisfatório. E oferece peças originais."],["Rodolfo Cerqueira",5,"Peças de qualidade, atendimento excelente, preço bom"]];

export const FAQ = [
  ["Como sei se a peça serve no meu carro?", "Informe marca, modelo, ano e motor no WhatsApp. Nossa equipe confere a aplicação antes de fechar o pedido."],
  ["E se a peça não estiver em estoque?", "Fazemos o pedido para você. Segundo clientes, a peça costuma chegar em cerca de três dias."],
  ["Como funciona o pagamento e a entrega?", "Combine direto no WhatsApp: retirada na loja ou entrega, e a forma de pagamento."],
  ["Onde fica a loja?", SITE.endereco + "."],
];
