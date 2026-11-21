(() => {
  "use strict";

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
