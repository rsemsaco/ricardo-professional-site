# Ricardo Professional Site

Site profissional de Ricardo Maggessi com duas experiências integradas:

- `/psicologia`
- `/dados`

A arquitetura segue a **Referência do Site**: uma mesma marca pessoal que transita entre uma linguagem humana, clínica e orgânica e outra estruturada, tecnológica e orientada a dados.

## Etapa atual

**Etapa 2 — Experiências completas de Psicologia e Dados.**

A página de Psicologia contém a arquitetura completa de abordagem FAP, demandas clínicas, modalidades, experiência, HCor, formação, pesquisa, educação e CTA final. O agendamento fica tecnicamente bloqueado enquanto o CRP não estiver configurado em `siteConfig.js`.

A página de Dados contém posicionamento, serviços, saúde + dados, cargos, projetos, cases, hard skills, formação complementar, cursos, palestras e CTAs de WhatsApp centralizados.

## Stack

- React 19
- Vite 8
- CSS nativo
- IntersectionObserver para animações de entrada
- History API para rotas
- Sem backend
- Sem analytics/tracking
- Sem armazenamento de dados pessoais
- Sem bibliotecas extras de animação ou roteamento

## Organização principal

```text
src/
├── animations/
├── app/
├── components/
│   ├── content/
│   ├── layout/
│   ├── media/
│   └── navigation/
├── data/
│   ├── dataContent.js
│   ├── navigation.js
│   ├── psychologyContent.js
│   └── siteConfig.js
├── pages/
├── sections/
└── styles/
```

## Dados configuráveis

`src/data/siteConfig.js` centraliza:

- CRP e ativação do agendamento de Psicologia;
- número do WhatsApp;
- mensagens pré-preenchidas por serviço;
- links sociais;
- caminhos das fotografias;
- configuração-base de deploy.

## Fotografias futuras

Os placeholders estão preparados para:

- `public/images/psychology/ricardo-psychology.webp`
- `public/images/data/ricardo-data.webp`

## Desenvolvimento

Node.js 22.12+.

```bash
npm install
npm run dev
```

## Validação

```bash
npm run build
```

O GitHub Actions executa o build em branches de trabalho, PRs e `main`.

## Publicação

O site ainda **não está publicado**. Configuração final de GitHub Pages, domínio, SEO de lançamento, fotografias e auditoria visual final ficam para a Etapa 3.
