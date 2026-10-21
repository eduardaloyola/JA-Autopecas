import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isUserSite = repositoryName && repositoryName === `${repositoryOwner}.github.io`;

// base "./" deixa o site funcionar em qualquer hospedagem ou subpasta.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS === "true"
    ? (isUserSite ? "/" : `/${repositoryName}/`)
    : "./",
});
