import { useEffect, useState } from "react";

// Digita exemplos de busca no placeholder (mostra ao cliente que pode pesquisar).
export function useTypewriter(palavras) {
  const [texto, setTexto] = useState("");
  useEffect(() => {
    let i = 0, p = 0, dir = 1, timer;
    const passo = () => {
      const atual = palavras[p];
      i += dir;
      setTexto(atual.slice(0, i));
      let ms = dir === 1 ? 75 : 35;
      if (dir === 1 && i === atual.length) { dir = -1; ms = 1500; }
      else if (dir === -1 && i === 0) { dir = 1; p = (p + 1) % palavras.length; ms = 350; }
      timer = setTimeout(passo, ms);
    };
    timer = setTimeout(passo, 900);
    return () => clearTimeout(timer);
  }, [palavras]);
  return texto;
}

// Anima os elementos quando entram na tela.
export function useReveal(seletor) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (itens) => itens.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(seletor).forEach((el, i) => {
      el.classList.add("rv");
      el.style.animationDelay = (i % 4) * 80 + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, [seletor]);
}
