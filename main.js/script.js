// 2. Função que alterna o tema e guarda a escolha na memória do browser
// Quando a página carrega
document.addEventListener("DOMContentLoaded", () => {               //Esta linha diz ao navegador: "Fica à espera até que a página HTML esteja completamente carregada e pronta a ser exibida".
  const modoEscuroAtivo = localStorage.getItem("darkMode");
  const botao = document.getElementById("botao-tema");

  if (modoEscuroAtivo === "true") {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    if (botao) botao.textContent = "☀️ Light Mode";
  }
});

// Função que alterna o tema
function alternarTema() {
  const isDark = document.body.classList.toggle("dark-mode");
  document.documentElement.classList.toggle("dark-mode", isDark);
  
  const botao = document.getElementById("botao-tema");
  
  if (isDark) {
    localStorage.setItem("darkMode", "true");
    if (botao) botao.textContent = "☀️ Light Mode";
    // Força o fundo escuro
    document.body.style.backgroundColor = ""; 
  } else {
    localStorage.setItem("darkMode", "false");
    if (botao) botao.textContent = "🌙 Dark Mode";
    // Limpa qualquer restrição de cor para voltar ao Light Mode original
    document.body.style.backgroundColor = "";
  }
}