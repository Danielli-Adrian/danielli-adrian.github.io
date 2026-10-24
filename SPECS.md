# SPECS.md — Portfólio Pessoal (GitHub Pages)

**Versão:** 1.0
**Data:** 2026-10-23
**Status:** planejamento fechado — sem implementação autorizada
**Responsável:** Adrian Danielli
**Comportamento do agente:** `AGENTS.md`

---

## 1. Visão

Site pessoal estático de **Adrian Danielli, Cientista da Computação**, publicado no GitHub Pages. Apresenta quem é, o que faz e seus projetos, funcionando como portfólio profissional — com foco em **recrutadores** e, secundariamente, em clientes.

O site deve ser rápido, acessível, bilíngue (PT/EN) e visualmente coerente com uma estética **técnica escura**, o que reforça a área de atuação.

## 2. Decisões fechadas

| # | Tema | Decisão |
|---|---|---|
| D01 | Nome de exibição | **Adrian Danielli** |
| D02 | Área / título | **Cientista da Computação** |
| D03 | Frase de posicionamento | **Não haverá** no hero |
| D04 | Foto | Entra depois (placeholder previsto) |
| D05 | Público | Recrutadores (peso maior) + clientes |
| D06 | CTA principal | **Currículo** (desativado até o PDF) + **LinkedIn** |
| D07 | Projetos | Adicionados depois — o site precisa funcionar vazio |
| D08 | Seções | **Sobre mim, Projetos, Contato** (somente) |
| D09 | Currículo | Botão desativado até existir o PDF |
| D10 | Links | **LinkedIn:** `https://www.linkedin.com/in/adrian-danielli/` · **GitHub:** `https://github.com/Danielli-Adrian` · **WhatsApp:** `https://wa.me/5599999999999` |
| D11 | Textos | Fornecidos depois; sem redação por enquanto |
| D12 | Estilo | **Técnico escuro** |
| D13 | Paleta | Definida nesta spec (um único acento) |
| D14 | Tema | Escuro padrão + alternador claro/escuro |
| D15 | Idioma | **Bilíngue PT-BR + EN** |
| D16 | Estrutura | **Multipágina: 3 páginas** |
| D17 | URL | **Limpa** — `https://danielli-adrian.github.io/` |
| D18 | Analytics / formulário | **Nenhum** |

> **Pressuposto registrado:** em D14 o usuário respondeu "sim, com botão / não"; adotou-se **escuro padrão com alternador**. Em D17, "URL limpa" implica renomear o repositório de `site-pessoal` para `danielli-adrian.github.io` — ação de **implementação**, ainda não executada.

## 3. Objetivos e métricas

| # | Objetivo | Métrica |
|---|---|---|
| O1 | Entender área e identidade em < 30s | Nome + título visíveis na primeira dobra |
| O2 | Gerar contato qualificado | Cliques em LinkedIn / e-mail / currículo |
| O3 | Demonstrar competência pelo próprio site | Lighthouse ≥ 95, AA, acabamento |
| O4 | Fácil de manter | Novo projeto = 1 bloco HTML + 1 imagem |

## 4. Público

| Persona | Busca | Precisa ver |
|---|---|---|
| Recrutador (primária) | Área, senioridade, contato rápido | Título claro, resumo, LinkedIn, currículo |
| Cliente (secundária) | Qualidade técnica e repertório | Projetos com contexto e resultado |
| Colega / comunidade | Referência e contato | GitHub, e-mail |

## 5. Escopo

### Dentro
- 3 páginas estáticas: Sobre, Projetos, Contato.
- Versão PT (raiz) e EN (`/en/`).
- Tema escuro padrão com alternador claro.
- Layout responsivo, acessível (AA), SEO básico, OG.
- Estado vazio de projetos e botão de currículo desativado.
- Publicação no GitHub Pages.

### Fora
- Blog, CMS, backend, login.
- Formulário de contato e analytics.
- Loja, pagamentos, área de membros.
- Depoimentos, timeline de experiência, barras de habilidade.
- Mais de um acento de cor ou bibliotecas de UI.

## 6. Arquitetura de informação

```
/                             → index.html        → Sobre (hero + bio + links)
/projetos.html                → Projetos
/contato.html                 → Contato
/en/index.html                → About
/en/projetos.html             → Projects
/en/contato.html              → Contact
```

**Navegação:** Sobre · Projetos · Contato, com troca de idioma e de tema no header.

> A home **é** a página Sobre (D08 + D16). Isso evita uma quarta página só com hero e mantém exatamente as três seções pedidas.

### Wireframe textual

**index.html — Sobre**
1. `header` — nome curto, nav (3 itens), seletor PT/EN, botão de tema.
2. `hero` — `h1` "Adrian Danielli", linha de apoio "Cientista da Computação", 2 CTAs (Currículo desativado + LinkedIn). Sem frase de posicionamento.
3. `sobre` — 2 parágrafos (placeholder até o texto real) + espaço reservado para foto.
4. `links` — GitHub e LinkedIn em destaque discreto.
5. `footer` — ano, nome, idioma.

**projetos.html — Projetos**
1. `header` (igual).
2. Título da página + 1 linha de contexto.
3. Grade de cards (1/2/3 colunas conforme largura).
4. **Estado vazio:** "Projetos em breve" + link para o GitHub.
5. `footer`.

**contato.html — Contato**
1. `header`.
2. `h1` "Contato" + uma linha de chamada.
3. Cartões: LinkedIn, GitHub, e-mail.
4. Botão de currículo (desativado).
5. `footer`.

## 7. Identidade visual — "técnico escuro"

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0B0F14` | Fundo da página |
| `--surface` | `#121821` | Cards, header |
| `--surface-2` | `#172030` | Hover, estados |
| `--border` | `#24303F` | Divisórias, bordas |
| `--text` | `#E6EDF3` | Texto principal |
| `--text-muted` | `#93A1B1` | Texto secundário |
| `--accent` | `#3DDC97` | Links, foco, CTA, detalhes |
| `--accent-strong` | `#2BC084` | Hover do acento |
| `--on-accent` | `#04231A` | Texto sobre o acento |

**Contraste (aprox.):** `#E6EDF3`/`#0B0F14` ≈ 14:1 · `#93A1B1`/`#0B0F14` ≈ 7:1 · `#04231A`/`#3DDC97` ≈ 9:1 — todos acima de AA.

### Tema claro (alternador)

| Token | Hex |
|---|---|
| `--bg` | `#F7F8FA` |
| `--surface` | `#FFFFFF` |
| `--border` | `#D8DEE7` |
| `--text` | `#0B0F14` |
| `--text-muted` | `#4A5768` |
| `--accent` | `#0E8A5F` |
| `--on-accent` | `#FFFFFF` |

O acento muda de tom no claro para manter contraste. A troca é feita por `[data-theme="light"]` no `<html>`, persistida em `localStorage`, com fallback para `prefers-color-scheme`.

### Tipografia

| Papel | Fonte | Tamanho | Peso |
|---|---|---|---|
| Display (h1) | Sans do sistema | `clamp(2.5rem, 6vw, 4rem)` | 700 |
| Título de seção (h2) | Sans do sistema | `clamp(1.75rem, 3.5vw, 2.5rem)` | 600 |
| Subtítulo (h3) | Sans do sistema | `1.25rem` | 600 |
| Corpo | Sans do sistema | `1rem` / 1.65 | 400 |
| Apoio | Sans do sistema | `0.875rem` | 400 |
| Rótulo técnico | Mono do sistema (`ui-monospace`) | `0.75rem`, tracking `.08em`, uppercase | 500 |

Sem fontes externas — decisão de performance e privacidade.

### Espaço, forma e movimento

- Grid 8px: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`.
- Container `1120px`, gutter `24px` (mobile `20px`).
- Raio: `8px` (cards), `6px` (botões), `999px` (pílulas).
- Borda `1px solid var(--border)` como principal recurso de separação; sombras quase inexistentes.
- Transições `180ms ease-out`; respeitar `prefers-reduced-motion`.
- Detalhe técnico: rótulos em mono e numeração discreta de seções (`01`, `02`, `03`).

## 8. Componentes e estados

| Componente | Variações / estados |
|---|---|
| Botão | primário (acento), secundário (borda), fantasma, **desativado** |
| Link | padrão, hover (acento), foco (outline 2px) |
| Card de projeto | normal, hover, **vazio** |
| Header | desktop, mobile (menu), sticky com blur leve |
| Seletor de idioma | PT ativo / EN ativo (`aria-current`) |
| Alternador de tema | escuro / claro (`aria-pressed`) |
| Footer | 1 linha |

**Botão de currículo desativado:** `disabled` + `aria-describedby` apontando para "Currículo em breve" — o motivo precisa ser legível, não só visual.

**Estado vazio de projetos:** bloco centrado com título, uma frase e link para o GitHub. Nunca uma grade vazia sem explicação.

## 9. Requisitos funcionais

| ID | Requisito | Prioridade |
|---|---|---|
| RF01 | Exibir nome e título na primeira dobra | Must |
| RF02 | Navegar entre Sobre, Projetos e Contato | Must |
| RF03 | Alternar PT/EN mantendo a página atual | Must |
| RF04 | Alternar tema claro/escuro e persistir | Should |
| RF05 | Listar projetos com imagem, título e link | Must |
| RF06 | Exibir estado vazio quando não houver projetos | Must |
| RF07 | Abrir LinkedIn e GitHub em nova aba | Must |
| RF08 | Exibir botão de currículo desativado com motivo | Must |
| RF09 | Menu mobile acessível | Must |
| RF10 | Foco visível e navegação por teclado | Must |
| RF11 | Detalhe do projeto (página ou modal) | Could |
| RF12 | Copiar e-mail com feedback | Could |

## 10. Requisitos não funcionais

| ID | Requisito | Critério |
|---|---|---|
| RNF01 | Estático, sem build | Abrir direto no navegador funciona |
| RNF02 | GitHub Pages | `https://danielli-adrian.github.io/` |
| RNF03 | Responsivo | 360 → 1440px sem overflow |
| RNF04 | Acessibilidade | WCAG 2.2 AA |
| RNF05 | Performance | Lighthouse ≥ 95; LCP < 2,5s |
| RNF06 | SEO | title, description, canonical, OG, `hreflang` |
| RNF07 | Privacidade | Sem rastreadores de terceiros |
| RNF08 | Manutenção | Novo projeto = 1 bloco HTML + 1 imagem |
| RNF09 | Compatibilidade | Últimas 2 versões de Chrome, Firefox, Safari, Edge |
| RNF10 | Sem JS essencial | Conteúdo e navegação funcionam com JS desligado |

## 11. Bilíngue (PT + EN)

- PT-BR na raiz; EN em `/en/`.
- Cada página tem par traduzido e `hreflang` recíproco + `hreflang="x-default"` para o PT.
- Seletor de idioma no header leva à **mesma página** no outro idioma.
- `lang` correto em cada documento; `title`/`description` traduzidos.
- Sem detecção automática que redirecione o usuário — apenas sugestão discreta.
- Duplicação de HTML é aceita (sem build); a consistência é garantida por checklist.

## 12. SEO e metadados

- `title` por página: `Adrian Danielli — Cientista da Computação` / `Projetos — Adrian Danielli` / `Contato — Adrian Danielli`.
- `description` única por página e idioma.
- `canonical` absoluto.
- OG/Twitter com imagem `1200×630` (a produzir).
- `sitemap.xml` com as 6 URLs; `robots.txt` liberando indexação.
- JSON-LD `Person` na home (nome, área, `sameAs` para LinkedIn/GitHub).
- Favicon SVG local.

## 13. Stack, estrutura e publicação

| Item | Decisão |
|---|---|
| Stack | HTML + CSS + JS puro |
| Build | Nenhum |
| Repositório | renomear `Danielli-Adrian/site-pessoal` → `Danielli-Adrian/danielli-adrian.github.io` |
| Branch | `main`, publicando da raiz |
| URL final | `https://danielli-adrian.github.io/` |
| HTTPS | automático |

```
/
├── index.html
├── projetos.html
├── contato.html
├── 404.html
├── en/
│   ├── index.html
│   ├── projetos.html
│   └── contato.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── img/            # og-image, foto, previews
│   └── docs/curriculo.pdf   (depois)
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

> Renomear o repositório muda a URL e é **irreversível na prática** (links quebram). Só executar com autorização.

## 14. Critérios de aceite

- [ ] 6 páginas publicadas (3 PT + 3 EN), navegáveis.
- [ ] Nome e título visíveis sem scroll no mobile (360px) e no desktop.
- [ ] Troca de idioma mantém a página correspondente.
- [ ] Tema alterna e persiste entre recarregamentos.
- [ ] Botão de currículo desativado com motivo acessível.
- [ ] Página de projetos exibe estado vazio coerente.
- [ ] LinkedIn e GitHub abrem corretamente em nova aba.
- [ ] Nenhum `TODO` visível na versão final.
- [ ] Lighthouse ≥ 95 nas 4 categorias.
- [ ] Contraste AA e navegação por teclado completos.
- [ ] Layout íntegro em 360, 768, 1024 e 1440px.
- [ ] `hreflang`, `canonical` e OG corretos.

## 15. Fases

| Fase | Entrega | Depende de |
|---|---|---|
| 0 | Specs + AGENTS | ✅ concluído |
| 1 | Conteúdo mínimo (textos, links, foto) | Usuário |
| 2 | Tokens + wireframe visual | Fase 0 |
| 3 | Home (Sobre) PT/EN | Fase 2 |
| 4 | Projetos + Contato PT/EN | Fase 3 |
| 5 | Acessibilidade, SEO, performance | Fase 4 |
| 6 | Renomear repo + publicar no Pages | Fase 5 |

## 16. Riscos

| Risco | Impacto | Mitigação |
|---|---|---|
| Conteúdo nunca chega (textos, foto, projetos) | Alto | Placeholders explícitos; entrega incremental |
| Currículo indefinido | Médio | Botão desativado desde o início |
| Renomear repo quebra links antigos | Médio | Fazer antes de divulgar o site |
| Duplicação PT/EN divergir | Médio | Checklist de paridade por página |
| Escopo crescer (blog, depoimentos) | Médio | Congelado na seção 5 |

## 17. Pendências

1. ~~URL do LinkedIn~~ — **confirmado:** `https://www.linkedin.com/in/adrian-danielli/`.
2. ~~URL do GitHub~~ — **confirmado:** `https://github.com/Danielli-Adrian`.
3. E-mail público de contato.
4. Textos de bio (PT e EN).
5. Foto profissional.
6. Projetos (título, contexto, imagem, link).
7. Currículo em PDF.
8. Confirmar: escuro como padrão com alternador (pressuposto D14).
9. Confirmar: renomear o repo para `danielli-adrian.github.io` (pressuposto D17).

## 18. Changelog

| Versão | Data | Mudança |
|---|---|---|
| 0.1 | 2026-10-23 | Rascunho inicial com pendências de entrevista |
| 1.0 | 2026-10-23 | Decisões da entrevista incorporadas (D01–D18); paleta, wireframe, bilíngue, 3 páginas, URL limpa; quiz removido do escopo |
| 1.1 | 2026-10-23 | LinkedIn e GitHub confirmados em D10; pendências 1 e 2 encerradas |
| 1.2 | 2026-10-23 | Adicionado canal do WhatsApp na home ("Onde me encontrar") e na página Contato (PT e EN) a pedido do usuário |
