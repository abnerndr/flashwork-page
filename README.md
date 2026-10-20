# Flashwork landing page

Next.js App Router + TypeScript. Página responsiva em português inspirada no hero 14 da referência do Figma, com a captura real fornecida do Flashwork.

## Executar

```sh
npm install
npm run dev
```

## Verificar e compilar

```sh
npm run typecheck
npm run build
```

A exportação estática fica em `out/`. Os links do GitHub estão centralizados na constante `repo` em `app/page.tsx`. Os botões detectam Windows, macOS e Linux no navegador e apontam para os instaladores verificados da release 0.1.0. Em dispositivos móveis, exibem a lista de releases. Atualize os URLs em `app/download-platform.ts` ao publicar uma nova versão. O DMG atual é Intel x64; o Linux usa DEB x64 e oferece acesso às outras versões.
