# Flashwork

Site: [flashwork.ruperth.com](https://flashwork.ruperth.com)

O Flashwork coloca as CLIs de IA no mesmo fluxo. Você cola a especificação, e o projeto monta sozinho o contexto e a orquestração para Claude Code, Codex e Antigravity trabalharem juntos.

Cada projeto ganha RAG e harness automáticos. O conhecimento do código fica disponível durante a execução, sem remontar o contexto a cada conversa e sem coordenar cada CLI na mão. Menos tokens, menos espera, e a entrega continua saindo da spec.

O aplicativo é open source: [github.com/abnerndr/flashwork](https://github.com/abnerndr/flashwork). Os instaladores de Windows, macOS e Linux saem das releases desse repositório. O site detecta o sistema e aponta para o arquivo correspondente.

## Este repositório

Aqui está a landing page, em Next.js (App Router) e TypeScript. O build é uma exportação estática.

```sh
npm install
npm run dev
```

```sh
npm run typecheck
npm run build
```

O resultado fica em `out/`. No Dokploy, o build é Nixpacks e a aplicação escuta na porta 3000.
