# Deploy na Vercel

Projeto: SPA estática em Vite + React. O servidor Express (`server/`) serve só para rodar local e não é usado na Vercel.

## O que já está configurado

O arquivo `vercel.json` define tudo que a Vercel precisa:

- `framework`: vite
- `buildCommand`: `vite build`
- `outputDirectory`: `dist/public`
- `rewrites`: fallback de SPA para `index.html`

O `client/index.html` foi limpo (removido o script de analytics do Manus, que dependia de variáveis inexistentes e quebraria na Vercel).

## Opção A: deploy via GitHub

1. Suba o repositório para o GitHub.
2. Na Vercel, "Add New Project" e importe o repositório.
3. Não precisa mexer em nada nas configurações: a Vercel lê o `vercel.json`.
4. Deploy.

## Opção B: deploy via CLI

```bash
npm i -g vercel
cd sdg-port-hub
vercel --prod
```

A CLI usa o `vercel.json` automaticamente.

## Domínio

Depois do primeiro deploy, em Project Settings > Domains, adicione `sdgporthub.com` e aponte o DNS conforme as instruções da Vercel.

## Observação sobre o erro anterior

A tentativa de deploy automático retornou `403 "You don't have permission to create a project"`. Isso é permissão da conta Vercel (papel de Member em vez de Owner, limite de projetos atingido, ou escopo do conector). Resolvendo isso, o projeto sobe sem alterações.
