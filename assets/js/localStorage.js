document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".sectionNavBar");
  const sections = document.querySelectorAll(".section");

  function showSection(sectionId) {
    // Ativar secção certa
    sections.forEach(section => {
      section.classList.toggle("active", section.id === sectionId);
    });

    // Atualizar botões da navbar
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.textContent.toLowerCase() === sectionId);
    });

    // Guardar no localStorage
    localStorage.setItem("currentSection", sectionId);
    console.log(sectionId)
  }

  // Evento de clique nos botões da navbar
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.textContent.toLowerCase();
      showSection(sectionId);
    });
  });

  // Restaurar secção ao fazer refresh
  console.log("olaaa")
  const savedSection = localStorage.getItem("currentSection") || "about";
  showSection(savedSection);
});
