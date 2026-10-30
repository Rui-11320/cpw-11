// Aplica o tema guardado no navegador e mantém o botão sincronizado.
function aplicarTema(modoEscuro) {
  document.documentElement.classList.toggle("dark-mode", modoEscuro);
  document.body.classList.toggle("dark-mode", modoEscuro);

  const botao = document.getElementById("botao-tema");

  if (botao) {
    botao.textContent = modoEscuro ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

// Ao abrir qualquer página, recupera a preferência guardada.
document.addEventListener("DOMContentLoaded", () => {
  const modoEscuroAtivo = localStorage.getItem("darkMode") === "true";
  aplicarTema(modoEscuroAtivo);
});

// Alterna o tema e guarda imediatamente a escolha para as outras páginas.
function alternarTema() {
  const modoEscuroAtivo = !document.documentElement.classList.contains("dark-mode");

  localStorage.setItem("darkMode", String(modoEscuroAtivo));
  aplicarTema(modoEscuroAtivo);
}
