import { useState } from "react";
import { useReveal } from "./hooks";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Steps from "./components/Steps";
import Reviews from "./components/Reviews";
import Help from "./components/Help";
import Location from "./components/Location";
import Footer from "./components/Footer";
import OrderBar from "./components/OrderBar";

export default function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [carrinho, setCarrinho] = useState({});

  useReveal(".cat,.step,.rev,.ben>div");

  const irParaPecas = () =>
    document.getElementById("pecas")?.scrollIntoView({ behavior: "smooth" });

  const mudarBusca = (valor) => { setBusca(valor); setCategoria("Todos"); };
  const escolherCategoria = (c) => { setCategoria(c); setBusca(""); irParaPecas(); };
  const limparFiltro = () => { setCategoria("Todos"); setBusca(""); };

  const alterar = (nome, delta) =>
    setCarrinho((atual) => {
      const novo = { ...atual };
      const qtd = (novo[nome] || 0) + delta;
      if (qtd <= 0) delete novo[nome]; else novo[nome] = qtd;
      return novo;
    });

  return (
    <>
      <Header />
      <main id="topo">
        <Hero busca={busca} setBusca={mudarBusca} irParaPecas={irParaPecas} escolherCategoria={escolherCategoria} />
        <Benefits />
        <Categories escolher={escolherCategoria} categoriaAtual={categoria} />
        <Products busca={busca} setBusca={mudarBusca} categoria={categoria} limpar={limparFiltro} carrinho={carrinho} alterar={alterar} />
        <Steps />
        <Reviews />
        <Help />
        <Location />
      </main>
      <Footer />
      <OrderBar carrinho={carrinho} limpar={() => setCarrinho({})} />
    </>
  );
}
