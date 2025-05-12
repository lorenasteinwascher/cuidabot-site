document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const erro = document.getElementById("mensagemErro");

  if (form) {
    form.addEventListener("submit", function (event) {
      erro.textContent = "";

      // Validação simples
      if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        event.preventDefault();
        erro.textContent = "Por favor, preencha todos os campos obrigatórios.";
        erro.style.color = "red";
        return;
      }

      // Validação de e-mail básica
      if (!email.value.includes("@") || !email.value.includes(".")) {
        event.preventDefault();
        erro.textContent = "Por favor, insira um e-mail válido.";
        erro.style.color = "red";
        return;
      }

      // Mensagem de sucesso (simulada)
      alert("Mensagem enviada com sucesso!");
    });
  }

  // Exemplo de interatividade DOM extra (expandir FAQ automático)
  const detalhesFAQ = document.querySelectorAll(".faq details");

  detalhesFAQ.forEach((detalhe) => {
    detalhe.addEventListener("toggle", () => {
      if (detalhe.open) {
        detalhe.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
