"use strict";

(function () {
  var root = document.documentElement;
  var CHAVE_TEMA = "tema";
  var botaoTema = document.querySelector(".alternador-tema");

  function aplicarTema(tema) {
    root.dataset.theme = tema;
    if (botaoTema) {
      botaoTema.setAttribute("aria-pressed", String(tema === "light"));
    }
  }

  function temaPreferido() {
    try {
      var salvo = localStorage.getItem(CHAVE_TEMA);
      if (salvo === "light" || salvo === "dark") return salvo;
    } catch (erro) {
      /* localStorage indisponível: segue para a preferência do sistema */
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  aplicarTema(temaPreferido());

  if (botaoTema) {
    botaoTema.addEventListener("click", function () {
      var novo = root.dataset.theme === "dark" ? "light" : "dark";
      aplicarTema(novo);
      try {
        localStorage.setItem(CHAVE_TEMA, novo);
      } catch (erro) {
        /* sem persistência, mas o tema continua alternando na sessão */
      }
    });
  }

  var botaoMenu = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu-principal");
  var rotulosMenu = document.documentElement.lang === "en"
    ? { abrir: "Open menu", fechar: "Close menu" }
    : { abrir: "Abrir menu", fechar: "Fechar menu" };

  function definirMenu(aberto) {
    if (!botaoMenu || !menu) return;
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute("aria-label", aberto ? rotulosMenu.fechar : rotulosMenu.abrir);
    menu.classList.toggle("nav--aberto", aberto);
  }

  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
      definirMenu(botaoMenu.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && botaoMenu.getAttribute("aria-expanded") === "true") {
        definirMenu(false);
        botaoMenu.focus();
      }
    });

    menu.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) definirMenu(false);
    });
  }
})();
