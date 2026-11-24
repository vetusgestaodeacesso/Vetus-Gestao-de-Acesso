(() => {
  "use strict";

  const infoMenu = document.querySelector(".info-menu");
  const menuToggle = document.querySelector(".info-menu-toggle");

  if (infoMenu && menuToggle) {
    const mobileMenu = window.matchMedia("(max-width: 760px)");
    const menuStateKey = "vetus-info-menu-open";
    let mobileMenuOpen = sessionStorage.getItem(menuStateKey) === "true";

    const syncMenu = () => {
      const isOpen = mobileMenu.matches ? mobileMenuOpen : true;
      infoMenu.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu de informações" : "Abrir menu de informações",
      );
    };

    syncMenu();
    mobileMenu.addEventListener("change", syncMenu);

    menuToggle.addEventListener("click", () => {
      mobileMenuOpen = !mobileMenuOpen;
      sessionStorage.setItem(menuStateKey, String(mobileMenuOpen));
      syncMenu();
    });

    infoMenu.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileMenu.matches) {
          mobileMenuOpen = true;
          sessionStorage.setItem(menuStateKey, "true");
        }
      });
    });
  }

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = new FormData(form);
    const texto = [
      "Olá, Vétus! Gostaria de falar com a equipe.",
      `Nome: ${dados.get("nome")}`,
      `Assunto: ${dados.get("assunto")}`,
      "",
      String(dados.get("mensagem") || "").trim(),
    ].join("\n");

    const url = new URL("https://wa.me/5534998242733");
    url.searchParams.set("text", texto);
    window.location.assign(url.toString());
  });
})();
