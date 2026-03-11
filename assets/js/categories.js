const categories = [
  "All",
  "VR/AR Projects",
  "Game Development",
  "AI Projects",
  "FullStack / Web Apps",
  "Video Creator"
];

const desktopContainer = document.getElementById('desktop-filters');
const mobileContainer = document.getElementById('mobile-filters');

categories.forEach((cat, index) => {
  // 1. Gerar itens para Desktop
  const desktopLi = document.createElement('li');
  desktopLi.className = 'filter-item';
  desktopLi.innerHTML = `<button class="${index === 0 ? 'active' : ''}" data-filter-btn>${cat}</button>`;
  desktopContainer.appendChild(desktopLi);

  // 2. Gerar itens para Mobile
  const mobileLi = document.createElement('li');
  mobileLi.className = 'select-item';
  mobileLi.innerHTML = `<button data-select-item>${cat}</button>`;
  mobileContainer.appendChild(mobileLi);
});