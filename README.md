# Ricardo Professional Site

Site profissional de Ricardo Maggessi com duas experiências integradas:

- `/psicologia`
- `/dados`

A arquitetura visual segue a **Referência do Site**: uma mesma identidade profissional com transição entre uma linguagem orgânica, humana e clínica e outra estruturada, técnica e orientada a dados.

## Etapa atual

**Etapa 1 — Fundação técnica e visual.**

O conteúdo completo das duas experiências será implementado apenas na Etapa 2.

## Stack

- React 19
- Vite 8
- CSS nativo para tokens, temas, responsividade e animações
- Sem backend
- Sem armazenamento de dados pessoais
- Sem bibliotecas de animação adicionais

## Estrutura

```text
src/
├── animations/
├── app/
├── components/
│   ├── layout/
│   ├── media/
│   └── navigation/
├── data/
├── pages/
├── sections/
└── styles/

public/
├── 404.html
└── images/
    ├── psychology/
    └── data/
```

## Desenvolvimento local

Requer Node.js 22.12 ou superior.

```bash
npm install
npm run dev
```

## Validação

```bash
npm run build
```

O GitHub Actions também executa o build em pushes para `main`, branches `foundation/**` e pull requests.

## GitHub Pages

A base do Vite utiliza caminhos relativos e o projeto inclui um fallback `404.html` para preservar as rotas `/psicologia` e `/dados` em hospedagem estática. A ativação do GitHub Pages e a configuração final de deploy ficam deliberadamente para a etapa de publicação.

## Fotografias futuras

Os espaços já estão preparados para:

- `public/images/psychology/ricardo-psychology.webp`
- `public/images/data/ricardo-data.webp`

As fotografias serão produzidas e tratadas em uma etapa visual posterior.
