# Adrian Danielli — Portfólio Pessoal

> Portfólio pessoal e profissional de **Adrian Danielli**, Cientista da Computação. Desenvolvido com foco em velocidade, acessibilidade, design moderno e zero dependências de compilação, publicado diretamente no GitHub Pages.

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-3DDC97?style=flat-square)](https://danielli-adrian.github.io/)
[![Acessibilidade](https://img.shields.io/badge/A11y-WCAG%202.2%20AA-00E5FF?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95%2B-success?style=flat-square)](#performance-e-qualidade)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue?style=flat-square)](LICENSE)

---

## 🌐 Acesso ao Site

- **Produção**: [https://danielli-adrian.github.io/](https://danielli-adrian.github.io/)
- **Versão em Inglês**: [https://danielli-adrian.github.io/en/](https://danielli-adrian.github.io/en/)

---

## 🚀 Destaques Técnicos

- **Sem Build Step (Zero Dependencies)**: HTML5 semântico, CSS3 moderno e Vanilla JavaScript servidos de forma nativa e instantânea.
- **Identidade Visual Vibrante**: Estética técnica escura combinando gradientes de *Verde Esmeralda Tech* (`#3DDC97`) e *Ciano Elétrico* (`#00E5FF`), luz de fundo radial (mesh glow) e textura de malha geométrica.
- **Tema Claro / Escuro com Persistência**: Alternador nativo no header com detecção automática da preferência do sistema operacional (`prefers-color-scheme`) e persistência via `localStorage`.
- **Arquitetura Bilíngue (PT-BR / EN)**:
  - Português na raiz (`/`)
  - Inglês em subdiretório (`/en/`)
  - Alternância direta entre páginas equivalentes com metadados `hreflang` e `canonical` recíprocos.
- **Acessibilidade de Primeiro Nível**:
  - Pular para o conteúdo principal (`.skip-link`).
  - Navegação fluida por teclado com indicador de foco visível.
  - Alvos de toque otimizados para dispositivos móveis (mínimo 44×44px).
  - Respeito integral a `prefers-reduced-motion`.
- **SEO & Otimização**: Metadados Open Graph, Twitter Cards, dados estruturados JSON-LD (`schema.org/Person`), `sitemap.xml` e `robots.txt`.

---

## 📁 Estrutura de Pastas

```text
├── 404.html               # Página de erro amigável (not found)
├── contato.html           # Página de contato (PT-BR)
├── favicon.svg            # Favicon vetorial com as iniciais "AD"
├── index.html             # Página principal / Sobre mim (PT-BR)
├── projetos.html          # Vitrine de projetos e experimentos (PT-BR)
├── robots.txt             # Instruções para motores de busca
├── sitemap.xml            # Mapa do site com as 6 rotas e hreflang
├── assets/
│   ├── css/
│   │   └── styles.css     # Design tokens, componentes e responsividade
│   ├── img/
│   │   └── og-image.svg   # Imagem de pré-visualização para redes sociais (1200x630)
│   └── js/
│       └── main.js        # Lógica de tema, menu mobile e acessibilidade
└── en/
    ├── contato.html       # Contact page (EN)
    ├── index.html         # About / Home page (EN)
    └── projetos.html      # Projects showcase (EN)
```

---

## 🛠️ Execução Local

Como o projeto é 100% estático, qualquer servidor HTTP local pode ser utilizado:

### Com Python 3:
```bash
python -m http.server 8000
```
Acesse: [http://localhost:8000](http://localhost:8000)

### Com Node / npx:
```bash
npx serve
```

---

## 📝 Como Adicionar um Novo Projeto

Para publicar um projeto na página de projetos, abra `projetos.html` (e `en/projetos.html`) e adicione o bloco abaixo dentro da seção de projetos:

```html
<article class="card-projeto">
  <h2 class="card-projeto__titulo">Nome do Projeto</h2>
  <p class="card-projeto__desc">Breve descrição do problema resolvido e tecnologias utilizadas.</p>
  <a class="card-projeto__link" href="https://github.com/Danielli-Adrian/seu-projeto" target="_blank" rel="noopener noreferrer">Ver projeto →</a>
</article>
```

---

## 📬 Contato

- **LinkedIn**: [adrian-danielli](https://www.linkedin.com/in/adrian-danielli/)
- **GitHub**: [@Danielli-Adrian](https://github.com/Danielli-Adrian)
- **WhatsApp**: [+55 (54) 99929-8829](https://wa.me/5554999298829)
