# TODO.md — Plano de Execução do Portfólio

> **Para o executor:** este arquivo é um roteiro fechado. Siga as tarefas **na ordem numérica**, sem pular, sem reinterpretar e sem tomar decisões de design.
> Leia `AGENTS.md` e `SPECS.md` antes de começar. `SPECS.md` manda; este arquivo apenas operacionaliza.
> Marque `[x]` ao concluir e execute o teste indicado antes de avançar.

---

## 0. Regras do executor

1. **Uma tarefa por vez.** Não antecipe tarefas futuras.
2. **Nenhuma decisão criativa.** Cores, tamanhos, textos e classes estão definidos aqui ou em `SPECS.md`.
3. **Nunca inventar** nome, experiência, formação, empresa, e-mail ou projeto. Use os placeholders da seção 1.
4. **Nunca usar** framework, biblioteca, CDN, fonte externa, ícone remoto ou *lorem ipsum*.
5. **Se um teste falhar, corrija e repita o teste.** Não avance com teste vermelho.
6. **⛔ GATE** = pare imediatamente e peça autorização explícita ao usuário antes de continuar.
7. Ao terminar uma fase, informe: tarefas concluídas, testes executados e resultado.
8. Não altere `AGENTS.md` nem `SPECS.md`. Se algo estiver ambíguo, pare e pergunte.

---

## 1. Placeholders e textos fixos

### 1.1 Placeholders de conteúdo

Use **exatamente** estes valores. Não traduza os tokens.

| Token | Onde aparece | Valor provisório |
|---|---|---|
| `[BIO_P1]` | Sobre | `[Parágrafo de apresentação — a preencher]` |
| `[BIO_P2]` | Sobre | `[Segundo parágrafo — formação e interesses]` |
| `[FOTO_ALT]` | Sobre | `Foto de Adrian Danielli` |
| `[EMAIL]` | Contato | *(não renderizar; ver 1.3)* |
| `[LINKEDIN_URL]` | Contato / Sobre | `https://www.linkedin.com/in/adrian-danielli/` |
| `[PROJETO_TITULO]` | Projetos | `[Título do projeto]` |
| `[PROJETO_DESC]` | Projetos | `[Descrição curta do projeto]` |

Toda ocorrência deve ter um comentário HTML imediatamente acima:
`<!-- TODO: preencher [TOKEN] -->`

### 1.2 Textos fixos — PT-BR

| Chave | Texto |
|---|---|
| `titulo_home` | `Adrian Danielli — Cientista da Computação` |
| `desc_home` | `Portfólio de Adrian Danielli, Cientista da Computação. Projetos, formação e contato.` |
| `nav_sobre` | `Sobre` |
| `nav_projetos` | `Projetos` |
| `nav_contato` | `Contato` |
| `cta_curriculo` | `Baixar currículo` |
| `cta_linkedin` | `LinkedIn` |
| `curriculo_breve` | `Currículo em breve` |
| `projetos_vazio_titulo` | `Projetos em breve` |
| `projetos_vazio_texto` | `Ainda não publiquei projetos aqui. Enquanto isso, veja meu GitHub.` |
| `contato_titulo` | `Contato` |
| `contato_chamada` | `Aberto a oportunidades, colaborações e conversas sobre tecnologia.` |
| `rodape` | `© 2026 Adrian Danielli` |
| `tema_rotulo` | `Alternar tema` |
| `idioma_rotulo` | `Idioma` |

### 1.3 Regras de conteúdo ausente

| Situação | O que fazer |
|---|---|
| `[LINKEDIN_URL]` | Sempre renderizar como link real, usando a URL da seção 1.1. **Nunca** usar `href="#"`. |
| `[EMAIL]` desconhecido | Não renderizar cartão de e-mail. Manter apenas GitHub e LinkedIn. |
| Currículo ausente | `<button class="btn btn--primary" type="button" disabled aria-describedby="curriculo-nota">Baixar currículo</button>` + `<p id="curriculo-nota">Currículo em breve</p>` |
| Projetos ausentes | Renderizar o estado vazio (Tarefa 20). Não criar cards falsos. |
| Foto ausente | Renderizar `<div class="foto-placeholder" role="img" aria-label="Foto de Adrian Danielli">` com as iniciais `AD`. |

### 1.4 Textos fixos — EN (para a fase 8)

| Chave | Texto |
|---|---|
| `titulo_home` | `Adrian Danielli — Computer Scientist` |
| `desc_home` | `Portfolio of Adrian Danielli, Computer Scientist. Projects, background and contact.` |
| `nav_sobre` | `About` |
| `nav_projetos` | `Projects` |
| `nav_contato` | `Contact` |
| `cta_curriculo` | `Download résumé` |
| `curriculo_breve` | `Résumé coming soon` |
| `projetos_vazio_titulo` | `Projects coming soon` |
| `projetos_vazio_texto` | `I haven't published projects here yet. In the meantime, check my GitHub.` |
| `contato_titulo` | `Contact` |
| `contato_chamada` | `Open to opportunities, collaborations and conversations about technology.` |
| `rodape` | `© 2026 Adrian Danielli` |
| `tema_rotulo` | `Toggle theme` |
| `idioma_rotulo` | `Language` |

---

## 2. Verificação do ambiente

- [x] **T01 — Conferir pasta.** `Get-Location` deve retornar `C:\Users\1140219\Desktop\openCode`. Se não, pare.
- [x] **T02 — Conferir arquivos-base.** `Get-ChildItem` deve listar `AGENTS.md` e `SPECS.md`.
- [x] **T03 — Conferir Git.** `git --version` deve responder. Se não, pare e informe.
- [x] **T04 — Conferir GitHub CLI.** `gh auth status` deve mostrar `Logged in to github.com`. Se não, pare.
- [x] **T05 — Conferir repositório remoto.** `gh repo view Danielli-Adrian/site-pessoal --json name,visibility,isEmpty` deve retornar `PUBLIC` e `isEmpty: true`. Ele **ainda deve estar vazio** nesta etapa.

**Teste da fase:** os 5 comandos acima retornam o esperado, sem erro.

---

## 3. Fase A — Estrutura e tokens

- [x] **T06 — Inicializar Git.**
  ```powershell
  git init
  git config user.name "Adrian Danielli"
  git config user.email "345934337+Danielli-Adrian@users.noreply.github.com"
  git branch -M main
  ```
  **Teste:** `git status` mostra branch `main` e `AGENTS.md`/`SPECS.md` como não rastreados.

- [x] **T07 — Criar pastas.**
  ```powershell
  New-Item -ItemType Directory -Force assets/css, assets/js, assets/img, assets/docs, en | Out-Null
  ```
  **Teste:** `Get-ChildItem -Directory` lista `assets` e `en`.

- [x] **T08 — Criar `.gitignore`** com exatamente:
  ```
  .DS_Store
  Thumbs.db
  *.log
  .vscode/
  ```
  **Teste:** arquivo existe e tem 4 linhas.

- [x] **T09 — Criar `assets/css/styles.css` com o bloco de tokens.** Deve começar exatamente com:
  ```css
  :root {
    --bg: #0B0F14;
    --surface: #121821;
    --surface-2: #172030;
    --border: #24303F;
    --text: #E6EDF3;
    --text-muted: #93A1B1;
    --accent: #3DDC97;
    --accent-strong: #2BC084;
    --on-accent: #04231A;

    --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    --font-mono: ui-monospace, "Cascadia Code", Consolas, monospace;

    --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
    --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
    --space-9: 96px;

    --radius-sm: 6px; --radius-md: 8px; --radius-full: 999px;
    --container: 1120px;
    --transition: 180ms ease-out;
  }

  [data-theme="light"] {
    --bg: #F7F8FA;
    --surface: #FFFFFF;
    --surface-2: #EEF1F5;
    --border: #D8DEE7;
    --text: #0B0F14;
    --text-muted: #4A5768;
    --accent: #0E8A5F;
    --accent-strong: #0B7350;
    --on-accent: #FFFFFF;
  }
  ```
  **Teste:** `Select-String -Path assets/css/styles.css -Pattern "--accent: #3DDC97"` retorna 1 resultado.

- [x] **T10 — Base do CSS.** Adicionar, depois dos tokens: reset simples (`box-sizing`, margens zero), `body` com `background: var(--bg)`, `color: var(--text)`, `font-family: var(--font-sans)`, `line-height: 1.65`, link com `color: var(--accent)`, `:focus-visible` com `outline: 2px solid var(--accent); outline-offset: 3px`, e `.container { width: min(100% - 40px, var(--container)); margin-inline: auto; }`.
  **Teste:** nenhuma regra usa cor literal fora dos tokens.

- [x] **T11 — Respeitar movimento reduzido.** Adicionar:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { transition: none !important; animation: none !important; }
  }
  ```
  **Teste:** bloco presente no fim do arquivo.

- [x] **T12 — Criar `assets/js/main.js` vazio** com `"use strict";` na primeira linha.
  **Teste:** `node --check assets/js/main.js` (se Node existir) não retorna erro; senão, abrir no navegador sem erro no console.

**Teste da fase A:** página em branco com fundo `#0B0F14` ao abrir um HTML mínimo de teste; tokens presentes. Remover o HTML de teste ao final.

---

## 4. Fase B — Componentes compartilhados

- [x] **T13 — Header.** Implementar `.site-header` com: `position: sticky; top: 0`, fundo `var(--surface)`, borda inferior `1px solid var(--border)`, altura mínima 64px. Deve conter:
  - `.site-header__marca` com link para `./index.html` e texto `Adrian Danielli`.
  - `<nav class="nav" aria-label="Principal">` com 3 links: `./index.html` (Sobre), `./projetos.html` (Projetos), `./contato.html` (Contato).
  - `.seletor-idioma` com dois links `PT` e `EN`.
  - `<button class="alternador-tema" type="button" aria-pressed="false" aria-label="Alternar tema">`.
  - `.nav__toggle` (botão hambúrguer, `aria-expanded="false"`, `aria-controls="menu-principal"`) visível só abaixo de 768px.
  **Teste:** em 360px apenas a marca e o botão aparecem; acima de 768px o menu completo aparece.

- [x] **T14 — Footer.** `.site-footer` com `© 2026 Adrian Danielli`, borda superior e `padding` de `var(--space-6)`.
  **Teste:** aparece no fim de todas as páginas.

- [x] **T15 — Botões.** Implementar `.btn`, `.btn--primary` (fundo `var(--accent)`, texto `var(--on-accent)`), `.btn--ghost` (borda `1px solid var(--border)`, fundo transparente), e `.btn:disabled` (opacidade `0.55`, `cursor: not-allowed`, sem hover).
  **Teste:** botão desativado não muda no hover e não recebe foco de ação (mas continua legível).

- [x] **T16 — Cartão de projeto.** `.card-projeto` com fundo `var(--surface)`, borda `1px solid var(--border)`, raio `var(--radius-md)`, `padding: var(--space-5)`, e hover com `border-color: var(--accent)`.
  **Teste:** hover visível apenas com mouse; foco por teclado igualmente evidente.

**Teste da fase B:** montar uma página temporária com header + footer + 1 botão + 1 card; verificar em 360px e 1280px. Remover depois.

---

## 5. Fase C — Sobre (PT)

- [x] **T17 — Criar `index.html`.** Estrutura obrigatória, nesta ordem:
  ```html
  <!doctype html>
  <html lang="pt-BR">
  <head> ... </head>
  <body>
    <a class="pular-para-conteudo" href="#conteudo">Pular para o conteúdo</a>
    <header class="site-header"> ... </header>
    <main id="conteudo">
      <section class="hero container"> ... </section>
      <section class="sobre container"> ... </section>
      <section class="links container"> ... </section>
    </main>
    <footer class="site-footer"> ... </footer>
    <script src="./assets/js/main.js" defer></script>
  </body>
  </html>
  ```
  **Teste:** `Select-String -Path index.html -Pattern '<html lang="pt-BR">'` retorna 1 resultado.

- [x] **T18 — Preencher o hero.**
  - `<h1>Adrian Danielli</h1>`
  - `<p class="hero__cargo">Cientista da Computação</p>`
  - CTA primário: botão de currículo **desativado** conforme 1.3.
  - CTA secundário: `<a class="btn btn--ghost" href="https://github.com/Danielli-Adrian" target="_blank" rel="noopener noreferrer">GitHub</a>`.
  - **Não** adicionar frase de posicionamento.
  **Teste:** existe exatamente um `<h1>` na página.

- [x] **T19 — Preencher Sobre.** Dois parágrafos com `[BIO_P1]` e `[BIO_P2]`, cada um com o comentário `TODO` acima. Bloco de foto com `.foto-placeholder` (conforme 1.3), `width`/`height` declarados no CSS (não atributos vazios).
  **Teste:** os dois parágrafos aparecem; o placeholder de foto tem `role="img"` e `aria-label`.

- [x] **T20 — Bloco de links.** Dois links externos: GitHub (`https://github.com/Danielli-Adrian`) e LinkedIn (`https://www.linkedin.com/in/adrian-danielli/`). Ambos com `target="_blank"` e `rel="noopener noreferrer"`.
  **Teste:** nenhum link tem `href="#"`.

**Teste da fase C:** abrir `index.html` no navegador; não há overflow horizontal em 360px; console sem erros.

---

## 6. Fase D — Projetos (PT)

- [x] **T21 — Criar `projetos.html`** com a mesma estrutura de head, header e footer da home, `lang="pt-BR"`, `<h1>Projetos</h1>` e uma linha de contexto.
  **Teste:** navegação da home leva para esta página e o link "Projetos" recebe `aria-current="page"`.

- [x] **T22 — Grade de projetos.** `<div class="grade-projetos">` com `display: grid`, `gap: var(--space-5)`, 1 coluna até 767px, 2 colunas de 768px a 1023px, 3 colunas a partir de 1024px.
  **Teste:** redimensionar e contar as colunas visíveis.

- [x] **T23 — Estado vazio.** Como não há projetos, renderizar `.estado-vazio` com `projetos_vazio_titulo`, `projetos_vazio_texto` e link para o GitHub. **A grade não deve ficar vazia sem explicação.**
  **Teste:** o texto aparece centralizado e o link funciona.

- [x] **T24 — Comentário de manutenção.** Antes da grade, inserir:
  ```html
  <!-- Para adicionar um projeto, copie o bloco abaixo e preencha os campos.
  <article class="card-projeto">
    <h2 class="card-projeto__titulo">[PROJETO_TITULO]</h2>
    <p class="card-projeto__desc">[PROJETO_DESC]</p>
    <a class="card-projeto__link" href="[URL]">Ver projeto</a>
  </article>
  -->
  ```
  **Teste:** o comentário existe e não é renderizado.

**Teste da fase D:** a página exibe apenas o estado vazio; nenhum card falso.

---

## 7. Fase E — Contato (PT)

- [x] **T25 — Criar `contato.html`** com `<h1>Contato</h1>`, `contato_chamada`, cartões de GitHub e LinkedIn (regra 1.3) e o botão de currículo desativado com `aria-describedby="curriculo-nota"`.
  **Teste:** o botão desativado está presente e o texto `Currículo em breve` é lido como descrição.

- [x] **T26 — Cartões de contato.** `.cartao-contato` com fundo `var(--surface)`, borda, raio e padding; link ocupando toda a área, com foco visível.
  **Teste:** Tab percorre os cartões na ordem visual.

**Teste da fase E:** as três páginas PT estão navegáveis entre si; nenhum link quebrado.

---

## 8. Fase F — JavaScript

- [x] **T27 — Tema.** Em `main.js`: ler `localStorage.getItem("tema")`; se ausente, usar `prefers-color-scheme`; aplicar `document.documentElement.dataset.theme`; o botão alterna entre `dark`/`light`, atualiza `aria-pressed` e salva.
  **Teste:** alternar, recarregar e confirmar que o tema persiste.

- [x] **T28 — Menu mobile.** O botão `.nav__toggle` alterna `aria-expanded` e a classe `.nav--aberto`; fechar com `Esc` e ao clicar em um link.
  **Teste:** em 360px o menu abre, fecha com Esc e o foco permanece visível.

- [x] **T29 — Idioma.** O seletor aponta para a página equivalente (`../en/...` e `../...`). Não usar `window.location` para adivinhar; os `href` são fixos por página.
  **Teste:** de `projetos.html`, o link EN leva a `en/projetos.html`.

- [x] **T30 — Sem JS.** Garantir que tema padrão (escuro via CSS) e navegação funcionam com JS desligado.
  **Teste:** desabilitar JS no DevTools e recarregar; conteúdo e links continuam utilizáveis.

**Teste da fase F:** console limpo nas 3 páginas; nenhum erro de `localStorage` em modo privado (usar `try/catch`).

---

## 9. Fase G — Versão EN

- [x] **T31 — Criar `en/index.html`, `en/projetos.html`, `en/contato.html`.** Copiar a estrutura das páginas PT e traduzir apenas os textos fixos da seção 1.4. Manter os mesmos placeholders.
  **Teste:** cada página EN tem `<html lang="en">`.

- [x] **T32 — Corrigir caminhos relativos.** Em `/en/`, assets usam `../assets/...`; links PT usam `../index.html`, `../projetos.html`, `../contato.html`.
  **Teste:** abrir cada página EN e confirmar que CSS, JS e imagens carregam (Network sem 404).

- [x] **T33 — `hreflang`.** Em cada página PT, adicionar:
  ```html
  <link rel="alternate" hreflang="pt-BR" href="https://danielli-adrian.github.io/<pagina>">
  <link rel="alternate" hreflang="en" href="https://danielli-adrian.github.io/en/<pagina>">
  <link rel="alternate" hreflang="x-default" href="https://danielli-adrian.github.io/<pagina>">
  ```
  E o equivalente invertido nas páginas EN. Ajustar `<pagina>` (`""` para home, `projetos.html`, `contato.html`).
  **Teste:** cada página tem 3 tags `alternate` com URLs corretas.

- [x] **T34 — Menu ativo.** Na página EN, o link correspondente recebe `aria-current="page"`.
  **Teste:** inspecionar as 3 páginas.

**Teste da fase G:** navegar PT → EN → PT em todas as páginas sem cair na home errada.

---

## 10. Fase H — SEO e metadados

- [x] **T35 — Metadados por página.** Cada uma das 6 páginas deve ter: `title`, `meta name="description"`, `link rel="canonical"`, OG (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale`), Twitter Card e `link rel="icon" href=".../favicon.svg"`.
  **Teste:** script de conferência:
  ```powershell
  Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
    $c = Get-Content $_.FullName -Raw
    "{0}: title={1} desc={2} canonical={3} og={4}" -f $_.Name,
      ($c -match '<title>'), ($c -match 'name="description"'),
      ($c -match 'rel="canonical"'), ($c -match 'property="og:title"')
  }
  ```
  Todos os campos devem ser `True`.

- [x] **T36 — Favicon.** Criar `favicon.svg` com as iniciais `AD` em `#3DDC97` sobre `#0B0F14`, `viewBox="0 0 64 64"`.
  **Teste:** abrir o arquivo no navegador; aparece nítido.

- [x] **T37 — Imagem OG.** Criar `assets/img/og-image.svg` 1200×630 com fundo `#0B0F14`, nome `Adrian Danielli` e cargo `Cientista da Computação` em `#E6EDF3`, acento `#3DDC97`.
  **Teste:** dimensões corretas no cabeçalho do SVG.

- [x] **T38 — JSON-LD.** Na home PT, inserir `Person` com `name`, `jobTitle`, `url` e `sameAs` (GitHub e LinkedIn).
  **Teste:** validar o JSON com `Get-Content index.html -Raw | Select-String -Pattern 'application/ld\+json'` e conferir as chaves.

- [x] **T39 — `robots.txt`.**
  ```
  User-agent: *
  Allow: /
  Sitemap: https://danielli-adrian.github.io/sitemap.xml
  ```
  **Teste:** arquivo presente na raiz.

- [x] **T40 — `sitemap.xml`** com as 6 URLs e `hreflang` recíprocos.
  **Teste:** 6 `<url>` no arquivo.

- [x] **T41 — `404.html`** com header simplificado, mensagem "Página não encontrada" e link para a home.
  **Teste:** abrir localmente e conferir o link.

**Teste da fase H:** todas as páginas com metadados completos; sitemap com 6 URLs.

---

## 11. Fase I — Acessibilidade

- [x] **T42 — Pular para o conteúdo.** O link `.pular-para-conteudo` deve ficar visualmente oculto até receber foco.
  **Teste:** primeiro Tab na página revela o link.

- [x] **T43 — Contraste.** Conferir com o DevTools (aba Accessibility) os pares `--text`/`--bg`, `--text-muted`/`--bg` e `--on-accent`/`--accent`, nos dois temas.
  **Teste:** todos ≥ 4.5:1 para texto normal.

- [x] **T44 — Semântica.** Verificar: um `h1` por página, seções com `aria-labelledby` quando necessário, `nav` rotulado, imagens com `alt`.
  **Teste:** navegação por headings no leitor de tela ou extensão.

- [x] **T45 — Teclado.** Percorrer as 6 páginas apenas com Tab/Shift+Tab/Enter/Esc.
  **Teste:** nenhum elemento focável inacessível; foco sempre visível; menu mobile fecha com Esc.

- [x] **T46 — Alvos de toque.** Em 360px, todo link/botão tem no mínimo 44×44px de área clicável (padding incluído).
  **Teste:** inspecionar os elementos interativos.

**Teste da fase I:** nenhum item acima falha.

---

## 12. Fase J — Performance e responsividade

- [x] **T47 — Revisar peso.** Nenhuma imagem acima de 300 KB; nenhuma fonte externa; nenhum script de terceiros.
  **Teste:** aba Network com cache desabilitado — total ≤ 500 KB.

- [x] **T48 — Responsividade.** Testar 360, 768, 1024 e 1440px.
  **Teste:** sem overflow horizontal (`document.documentElement.scrollWidth === document.documentElement.clientWidth`).

- [x] **T49 — Lighthouse.** Rodar em cada página (com servidor local).
  ```powershell
  python -m http.server 8000
  npx --yes lighthouse http://localhost:8000/ --chrome-flags="--headless" --view
  ```
  Se Python/Node não existirem, usar o Lighthouse do DevTools (modo anônimo).
  **Teste:** ≥ 95 em Performance, Acessibilidade, Boas Práticas e SEO.

- [x] **T50 — Validação de HTML.**
  ```powershell
  npx --yes html-validate "**/*.html"
  ```
  **Teste:** zero erros. Se a ferramenta não estiver disponível, validar manualmente com o W3C Markup Validator.

**Teste da fase J:** Lighthouse ≥ 95 nas 4 categorias em todas as páginas.

---

## 13. Fase K — Publicação

> ⛔ **GATE 1 — COMMIT.** Peça autorização antes de commitar.
> ⛔ **GATE 2 — RENOMEAR.** Peça autorização antes de renomear o repositório.
> ⛔ **GATE 3 — PUBLICAR.** Peça autorização antes de ativar o Pages.

- [x] **T51 — Revisar o que será commitado.** `git status` deve listar apenas HTML, CSS, JS, SVG, TXT, XML, `AGENTS.md`, `SPECS.md`, `TODO.md` e `.gitignore`. **Nada de PDF grande, imagem pessoal ou segredo.**
  **Teste:** conferir a lista manualmente.

- [x] **T52 — Commit inicial** (após GATE 1).
  ```powershell
  git add .
  git commit -m "feat: site pessoal com três páginas em PT e EN"
  ```
  **Teste:** `git log --oneline` mostra 1 commit.

- [x] **T53 — Conectar o remoto** (antes do rename).
  ```powershell
  git remote add origin https://github.com/Danielli-Adrian/site-pessoal.git
  ```
  **Teste:** `git remote -v` mostra a URL.

- [x] **T54 — Renomear o repositório** (após GATE 2).
  ```powershell
  gh repo rename danielli-adrian.github.io -R Danielli-Adrian/site-pessoal --yes
  git remote set-url origin https://github.com/Danielli-Adrian/danielli-adrian.github.io.git
  ```
  **Teste:** `gh repo view Danielli-Adrian/danielli-adrian.github.io --json name,url` retorna o nome novo.

- [x] **T55 — Push** (após GATE 3).
  ```powershell
  git push -u origin main
  ```
  **Teste:** `git status` mostra "Your branch is up to date".

- [x] **T56 — Ativar o GitHub Pages.**
  ```powershell
  gh api -X POST repos/Danielli-Adrian/danielli-adrian.github.io/pages -f "source[branch]=main" -f "source[path]=/"
  ```
  **Teste:** `gh api repos/Danielli-Adrian/danielli-adrian.github.io/pages --jq ".status,.html_url"` retorna `built` (ou `building`) e a URL.

- [x] **T57 — Aguardar o build.** Esperar até 3 minutos e verificar:
  ```powershell
  (Invoke-WebRequest -Uri "https://danielli-adrian.github.io/" -UseBasicParsing).StatusCode
  ```
  **Teste:** retorna `200`. Se retornar 404, aguardar mais 1 minuto e repetir, no máximo 3 vezes; se persistir, parar e reportar.

- [x] **T58 — Conferir ao vivo.** Abrir a URL e repetir os testes T44, T45, T48 e T49.
  **Teste:** todos passam no ambiente publicado.

**Teste da fase K:** site acessível em `https://danielli-adrian.github.io/` com as 6 páginas.

---

## 14. Matriz de testes finais

| ID | Teste | Como | Esperado |
|---|---|---|---|
| QA01 | Navegação PT | Clicar em Sobre/Projetos/Contato | 3 páginas abrem, item ativo correto |
| QA02 | Navegação EN | Mesmo teste em `/en/` | 3 páginas abrem, textos em inglês |
| QA03 | Troca de idioma | PT → EN em cada página | Mantém a página equivalente |
| QA04 | Tema | Alternar e recarregar | Escolha persiste |
| QA05 | Tema sem JS | Desligar JS e abrir | Fica escuro, conteúdo acessível |
| QA06 | Menu mobile | 360px, abrir/fechar/Esc | Funciona com teclado |
| QA07 | Currículo | Ver botão | Desativado, com "Currículo em breve" |
| QA08 | Projetos vazios | Abrir Projetos | Estado vazio com link GitHub |
| QA09 | Links externos | Clicar GitHub | Abre nova aba, `rel` correto |
| QA10 | 404 | Abrir URL inexistente | Página 404 com link para home |
| QA11 | Metadados | Inspecionar head | title, description, canonical, OG, hreflang |
| QA12 | Contraste | DevTools nos 2 temas | ≥ 4.5:1 |
| QA13 | Teclado | Tab em todas as páginas | Foco visível, ordem lógica |
| QA14 | Responsivo | 360/768/1024/1440 | Sem overflow |
| QA15 | Performance | Lighthouse | ≥ 95 nas 4 categorias |
| QA16 | HTML válido | `html-validate` | Zero erros |
| QA17 | Sem placeholders | Buscar `TODO` e `[...]` | Nenhum visível ao público final* |
| QA18 | Links internos | Clicar todos | Nenhum 404 |

\* Placeholders podem permanecer **no código** enquanto o conteúdo não chega, mas devem estar listados na entrega. Se o usuário exigir publicação sem conteúdo, os textos de apoio devem ser neutros e não inventados.

---

## 15. Critério de conclusão (Definition of Done)

O projeto está concluído quando **todos** forem verdadeiros:

- [x] 6 páginas publicadas e navegáveis (3 PT + 3 EN).
- [x] Tema escuro padrão + alternador funcionando e persistente.
- [x] Conteúdo ausente tratado com os estados definidos na seção 1.3.
- [x] QA01–QA18 aprovados.
- [x] Lighthouse ≥ 95 nas quatro categorias.
- [x] Nenhum link quebrado.
- [x] `AGENTS.md`, `SPECS.md` e `TODO.md` no repositório.

---

## 16. Proibições (repetição intencional)

- Não usar *lorem ipsum*.
- Não inventar dados pessoais.
- Não adicionar bibliotecas, CDNs ou fontes externas.
- Não criar projetos fictícios.
- Não alterar a paleta nem os textos fixos.
- Não fazer push sem os três GATEs.
- Não pular testes.
