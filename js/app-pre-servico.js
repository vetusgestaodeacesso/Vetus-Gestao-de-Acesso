// ==================================================
// VÉTUS — PROPOSTA COMPLETA COM CARD AJUDA CPF
// ==================================================

const WHATSAPP_VETUS = "5534998242733";

// ------------------------------
// MÁSCARAS
// ------------------------------
function aplicarMascaraCPF(valor) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length <= 3) return digitos;
  if (digitos.length <= 6) return `${digitos.slice(0, 3)}.${digitos.slice(3)}`;
  if (digitos.length <= 9) {
    return `${digitos.slice(0, 3)}.${digitos.slice(3, 6)}.${digitos.slice(6)}`;
  }
  return `${digitos.slice(0, 3)}.${digitos.slice(3, 6)}.${digitos.slice(6, 9)}-${digitos.slice(9)}`;
}

function aplicarMascaraWhats(valor) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length <= 2) return digitos ? `(${digitos}` : "";
  if (digitos.length <= 7) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

// ------------------------------
// MOSTRAR/ESCONDER CAMPO SERVIÇO AVULSO
// ------------------------------
function verificarPacote() {
  const valor = document.getElementById("pre-pacote").value;
  const campo = document.getElementById("campo-necessidade");
  const avisoFichaDigital = document.getElementById("aviso-ficha-digital");

  if (avisoFichaDigital) {
    avisoFichaDigital.hidden =
      !valor.startsWith("Pacote Completo") &&
      !valor.startsWith("Pacote Premium");
  }

  if (valor.startsWith("Serviço Avulso")) {
    campo.classList.remove("oculto");
  } else {
    campo.classList.add("oculto");
    mostrarErro("pre-necessidade", "pre-necessidade-erro", "");
  }
}

// ------------------------------
// VALIDAÇÕES
// ------------------------------
function validarNome(nome) {
  return nome.trim().length >= 5;
}

function validarFormatoCPF(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function validarCPFCompleto(cpf) {
  const numeros = cpf.replace(/\D/g, "");
  if (numeros.length !== 11) return false;
  if (/^(\d)\1+$/.test(numeros)) return false;

  const digitos = numeros.split("").map(Number);

  let soma1 = 0;
  for (let i = 0; i < 9; i++) soma1 += digitos[i] * (10 - i);
  let resto1 = (soma1 * 10) % 11;
  if (resto1 === 10) resto1 = 0;
  if (resto1 !== digitos[9]) return false;

  let soma2 = 0;
  for (let i = 0; i < 10; i++) soma2 += digitos[i] * (11 - i);
  let resto2 = (soma2 * 10) % 11;
  if (resto2 === 10) resto2 = 0;
  if (resto2 !== digitos[10]) return false;

  return true;
}

function validarWhats(whats) {
  return /^\(\d{2}\) \d{5}-\d{4}$/.test(whats);
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ------------------------------
// EXIBIR ERRO
// ------------------------------
function mostrarErro(idCampo, idErro, mensagem) {
  const campo = document.getElementById(idCampo);
  const erro = document.getElementById(idErro);
  if (!erro) return;
  if (mensagem) {
    if (campo) campo.classList.add("invalido");
    if (campo) campo.setAttribute("aria-invalid", "true");
    erro.textContent = mensagem;
  } else {
    if (campo) campo.classList.remove("invalido");
    if (campo) campo.removeAttribute("aria-invalid");
    erro.textContent = "";
  }
}

// ------------------------------
// CARD EXPLICATIVO DO CPF
// ------------------------------
const iconeAjudaCpf = document.getElementById("icone-ajuda-cpf");
const cardAjudaCpf = document.getElementById("card-ajuda-cpf");

iconeAjudaCpf.addEventListener("click", function (e) {
  e.stopPropagation();
  cardAjudaCpf.classList.toggle("oculto");
});

document.addEventListener("click", function (e) {
  if (!iconeAjudaCpf.contains(e.target) && !cardAjudaCpf.contains(e.target)) {
    cardAjudaCpf.classList.add("oculto");
  }
});

// ------------------------------
// EVENTOS EM TEMPO REAL
// ------------------------------
document
  .getElementById("pre-pacote")
  .addEventListener("change", verificarPacote);

document.getElementById("pre-cpf").addEventListener("input", function () {
  this.value = aplicarMascaraCPF(this.value);
  if (!this.value) mostrarErro("pre-cpf", "pre-cpf-erro", "");
  else if (!validarFormatoCPF(this.value))
    mostrarErro("pre-cpf", "pre-cpf-erro", "Formato: 000.000.000-00");
  else if (!validarCPFCompleto(this.value))
    mostrarErro("pre-cpf", "pre-cpf-erro", "CPF inválido — confira os números");
  else mostrarErro("pre-cpf", "pre-cpf-erro", "");
});

document.getElementById("pre-whats").addEventListener("input", function () {
  this.value = aplicarMascaraWhats(this.value);
  if (!this.value) mostrarErro("pre-whats", "pre-whats-erro", "");
  else if (!validarWhats(this.value))
    mostrarErro("pre-whats", "pre-whats-erro", "Formato: (XX) XXXXX-XXXX");
  else mostrarErro("pre-whats", "pre-whats-erro", "");
});

document.getElementById("pre-email").addEventListener("blur", function () {
  if (!this.value) mostrarErro("pre-email", "pre-email-erro", "");
  else if (!validarEmail(this.value))
    mostrarErro("pre-email", "pre-email-erro", "E-mail inválido");
  else mostrarErro("pre-email", "pre-email-erro", "");
});

// ------------------------------
// ENVIAR PARA WHATSAPP
// ------------------------------
document
  .getElementById("btn-enviar-whats")
  .addEventListener("click", function () {
    const nome = document.getElementById("pre-nome").value;
    const cpf = document.getElementById("pre-cpf").value;
    const whats = document.getElementById("pre-whats").value;
    const email = document.getElementById("pre-email").value;
    const pacoteValor = document.getElementById("pre-pacote").value;
    const necessidade = document.getElementById("pre-necessidade").value;
    const concordo = document.getElementById("pre-concordo").checked;

    let valido = true;

    if (!validarNome(nome)) {
      mostrarErro("pre-nome", "pre-nome-erro", "Digite seu nome completo");
      valido = false;
    } else {
      mostrarErro("pre-nome", "pre-nome-erro", "");
    }

    if (!validarFormatoCPF(cpf) || !validarCPFCompleto(cpf)) {
      mostrarErro(
        "pre-cpf",
        "pre-cpf-erro",
        "CPF inválido — confira os números",
      );
      valido = false;
    }

    if (!validarWhats(whats)) {
      mostrarErro("pre-whats", "pre-whats-erro", "WhatsApp inválido");
      valido = false;
    }

    if (!validarEmail(email)) {
      mostrarErro("pre-email", "pre-email-erro", "E-mail inválido");
      valido = false;
    }

    if (!pacoteValor) {
      mostrarErro("pre-pacote", "pre-pacote-erro", "Escolha um pacote");
      valido = false;
    } else {
      mostrarErro("pre-pacote", "pre-pacote-erro", "");
    }

    if (pacoteValor.startsWith("Serviço Avulso") && !necessidade.trim()) {
      mostrarErro(
        "pre-necessidade",
        "pre-necessidade-erro",
        "Descreva qual serviço avulso deseja contratar.",
      );
      valido = false;
    } else {
      mostrarErro("pre-necessidade", "pre-necessidade-erro", "");
    }

    if (!concordo) {
      document.getElementById("pre-concordo-erro").textContent =
        "Confirme a leitura do termo da proposta e da política de privacidade para continuar.";
      valido = false;
    } else {
      document.getElementById("pre-concordo-erro").textContent = "";
    }

    if (!valido) return;

    const partes = pacoteValor.split("|");
    const nomePacote = partes[0];
    const valorPacote =
      "R$ " + parseFloat(partes[1]).toFixed(2).replace(".", ",");
    const necessidadeTexto = pacoteValor.startsWith("Serviço Avulso")
      ? necessidade.trim()
      : "Não se aplica";

    const mensagem =
      "PROPOSTA DE PRESTAÇÃO DE SERVIÇO\n" +
      "=================================\n\n" +
      "Nome: " +
      nome +
      "\n" +
      "CPF: " +
      cpf +
      "\n" +
      "WhatsApp: " +
      whats +
      "\n" +
      "E-mail: " +
      email +
      "\n\n" +
      "Pacote: " +
      nomePacote +
      "\n" +
      "Valor: " +
      valorPacote +
      "\n\n" +
      "NECESSIDADE:\n" +
      necessidadeTexto +
      "\n\n" +
      "Leitura do termo da proposta e da política de privacidade confirmada no formulário.\n\n" +
      "Aguardo retorno!";

    const numeroLimpo = WHATSAPP_VETUS.replace(/\D/g, "");
    if (numeroLimpo.length < 12 || numeroLimpo.length > 13) {
      alert("Verifique o número do WhatsApp no código!");
      return;
    }

    const url =
      "https://wa.me/" + numeroLimpo + "?text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank", "noopener,noreferrer");
  });

// ==================================================
// CARREGAR PLANO AUTOMATICAMENTE PELO LINK ✅ NOVO
// ==================================================
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const planoSelecionado = params.get("plano");

  if (planoSelecionado) {
    const select = document.getElementById("pre-pacote");
    if (select) {
      select.value = planoSelecionado;
      select.dispatchEvent(new Event("change"));
      console.log("✅ Plano carregado automaticamente:", planoSelecionado);
    }
  }

  verificarPacote();
});
