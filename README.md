# JA Autopeças – site em React (Vite)

## Como rodar
Requisito: [Node.js](https://nodejs.org) 18 ou mais novo.

```bash
npm install      # instala as dependências (uma vez)
npm run dev      # abre o site para desenvolvimento (http://localhost:5173)
npm run build    # gera a pasta dist/ pronta para publicar
npm run preview  # testa o build localmente
```

## Como publicar no GitHub Pages
1. Crie no GitHub um repositório público chamado `ja-autopecas-site`.
2. Na pasta do projeto, inicialize o Git e envie o código para a branch `main`:

   ```bash
   git init -b main
   git add .
   git commit -m "Publica site da JA Autopeças"
   git remote add origin https://github.com/SEU-USUARIO/ja-autopecas-site.git
   git push -u origin main
   ```

3. No repositório, abra **Settings → Pages** e selecione **GitHub Actions** como fonte.
4. Acesse **Actions** e aguarde a conclusão do workflow **Deploy to GitHub Pages**.

Depois da primeira publicação, o site será atualizado automaticamente a cada `push` na branch `main`. O endereço será `https://SEU-USUARIO.github.io/ja-autopecas-site/`.

Para outras hospedagens, gere a pasta `dist/` com `npm run build`.

## Onde editar
| O que mudar | Arquivo |
|---|---|
| Telefone, endereço, mensagem do WhatsApp | `src/config.js` |
| Peças, categorias, avaliações, perguntas frequentes | `src/data.js` |
| Cores, fontes, espaçamentos | `src/styles.css` (variáveis no `:root`) |
| Textos e estrutura de cada seção | `src/components/` |
| Fotos | `public/produtos/` (peças), `public/fachada.jpg` (hero), `public/pecas-visita.png` (localização), `public/logo-laranja.png` (logo do site), `public/logo.png` (original) |

Para adicionar uma peça: coloque a foto em `public/produtos/` e inclua uma linha em `PRODUTOS`, em `src/data.js`.

## Estrutura
```
index.html            página base, SEO e dados para o Google
public/               imagens (logo, fachada, peças)
src/main.jsx          ponto de entrada do React
src/App.jsx           estado do site (busca, filtro e pedido)
src/components/       Header, Hero, Products, Reviews, OrderBar...
src/hooks.js          animações (digitação do exemplo e aparecer ao rolar)
```

## Importante
As 12 fotos das peças são imagens ilustrativas geradas por IA. Elas não comprovam marca, especificação, estoque ou compatibilidade. Troque por fotos dos produtos que a loja realmente vende.
