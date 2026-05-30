'use strict';

const projects = [
  { id: 'ARUAV', title: 'UAV Augmented Reality management using mobile devices', category: 'vr/ar projects', tag: 'VR/AR', tagClass: 'tag-vr', image: './assets/images/near_mode_real.png', video: 'DEEiWg01ZJw', description: 'This study presents a Digital Twin (DT) Augmented Reality (AR) system for UAVs (drones) that enables users to visualize, control, and retrieve both virtual and real UAVs for wildfire prevention and monitoring through a mobile device.', paper: 'https://link.springer.com/article/10.1007/s10055-025-01145-w', projectRef: 'DBoidS - Digital twin Boids fire prevention System - <a href="https://sciproj.ptcris.pt/171663PRJ" target="_blank">10.54499/PTDC/CCI-COM/2416/2021</a>', contributions: ['Digital Twin-based mobile application to visualize, control and retrieve UAVs using AR', 'Autonomous UAV data attribution and movement using external UAV data for real-time remote visualization', 'Virtual environment for users to test and train UAV control without risks', 'Implementation of UAVs\' DT to operate in real environments', 'Hybrid approach to allow the combination of real and virtual environments', 'Integration with a web application and Gazebo simulator for UAV management (Websockets)'], features: ['Augmented Reality (AR) visualization of UAVs along with their associated information', 'A comprehensive list of UAVs, both virtual and real, for management and selection', 'Multiple commands for managing real UAVs efficiently', 'Manual control of UAVs using joysticks for directional movement and rotation', 'Live visualization of the UAV\'s camera feed', 'Integration with a map displaying the user\'s location', 'Identification and retrieval of UAVs experiencing low battery or other status issues'], slides: [{img:'./assets/images/near_mode_real.png', caption:'UAV Visualization'},{img:'./assets/images/manualControl.png', caption:'UAV Control'},{img:'./assets/images/list_uavs.png', caption:'List of UAVs'},{img:'./assets/images/retrieveOption.png', caption:'UAV Retrieval'},{img:'./assets/images/camera_real.png', caption:'UAV camera feed'},{img:'./assets/images/camera_real2.png', caption:'UAV camera feed'}] },
  { id: 'ARMVC', title: 'Augmented Reality Multi-Vehicle Controller Service (ARMVC)', category: 'vr/ar projects', tag: 'VR/AR', tagClass: 'tag-vr', image: './assets/images/armvc_cover.png', video: '_-TK_3bxZwI', description: 'This project presents an Augmented Reality Multi-Vehicle Controller Service (ARMVC) that allows users to control multiple unmanned vehicles simultaneously using a mobile device with AR. Includes a virtual environment for users to test and train UAV control without risks, and a real environment for users to control real vehicles using joysticks and other commands.', features: ['Create and manage user accounts', 'Manage user vehicles', 'Manage and visualize the details of a specific vehicle', 'Manual control of UVs (Unmanned Vehicles) and UAVs (Unmanned Aerial Vehicles) in real/simulated scenarios through the mobile application', 'Vehicle registration and control authorization mechanism through Augmented Reality', 'Administration Web application'], slides: [{img:'./assets/images/ARMVC_real3.png', caption:'Real UAV management'},{img:'./assets/images/ARMVC_virtual2.png', caption:'Virtual UAV management', width:'75%'},{img:'./assets/images/ARMVC_real4.png', caption:'Real UV management'},{img:'./assets/images/ARMVC_virtual.png', caption:'Virtual UV management'},{img:'./assets/images/ARMVC_login.png', caption:'Login/Register'},{img:'./assets/images/ARMVC_dashboard.png', caption:'Dashboard (List of vehicles)'},{img:'./assets/images/ARMVC_dashboard2.png', caption:'Dashboard (Vehicle Details)'},{img:'./assets/images/ARMVC_admin.png', caption:'Administrator Server'}] },
  { id: 'Virtualization', title: 'Industrinity AR', category: 'vr/ar projects', tag: 'VR/AR', tagClass: 'tag-vr', image: './assets/images/industrinity1.png', description: 'This project is an application for the industry that uses Augmented Reality and Virtual Reality to enhance the training process. The system allows trainers to create training scenarios based on immersive experiences using VR/AR technologies.', slides: [{img:'./assets/images/industrinity1.png', caption:'Industrinity AR'},{img:'./assets/images/industrinity2.png', caption:'Industrinity AR'},{img:'./assets/images/industrinity3.png', caption:'Industrinity AR'},{img:'./assets/images/industrinity5.png', caption:'Industrinity AR'},{img:'./assets/images/industrinity6.png', caption:'Industrinity AR'}] },
  { id: 'Training', title: 'Augmented Reality Training Application', category: 'vr/ar projects', tag: 'VR/AR', tagClass: 'tag-vr', image: './assets/images/arta_1.png', video: 'Ou29EKSQfNo', description: 'The system allows trainers to create training scenarios based on immersive experiences using augmented reality technologies. Both the trainer and the trainee have access to specific applications on certain platforms, enabling them to perform their tasks.', features: ['TCA (Training Configuration Application) - a desktop application for trainers, acting as a configurator/editor of training scenarios', 'ARTA (AR Training Application) - a mobile application used by trainees to experience the training scenarios', 'TSIS (Training Session Information System) - a server-hosted service for storing and providing access to training scenarios'], slides: [{img:'./assets/images/arta_1.png', caption:'TCA'},{img:'./assets/images/arta_2.jpg', caption:'ARTA 1', width:'25%'},{img:'./assets/images/arta_3.jpg', caption:'ARTA 2', width:'25%'},{img:'./assets/images/arta_4.jpg', caption:'ARTA 3', width:'25%'},{img:'./assets/images/arta_5.jpg', caption:'ARTA 4', width:'25%'},{img:'./assets/images/arta_6.jpg', caption:'ARTA 5', width:'25%'},{img:'./assets/images/arta_7.jpg', caption:'ARTA 6', width:'25%'}] },
  { id: 'DefendYourCastleAR', title: 'Defend Your Castle AR', category: 'vr/ar projects', tag: 'VR/AR', tagClass: 'tag-vr', image: './assets/images/DefendYourCastle_cover.png', video: '-0xTZODNRhQ', description: 'This project is a mobile augmented reality game where players build their own castle and aim to destroy the enemy\'s castle. The player who successfully destroys the opponent\'s castle wins. The multiplayer was developed by using Photon Engine.', itch: 'https://ccostax.itch.io/defend-your-castle-ar', paper: 'https://ieeexplore.ieee.org/document/10452716', phases: ['In the first phase, the player must build their castle with two blocks in height and four blocks in length on each of the four sides.', 'In the second phase, both players have a limited number of cannons to place on their castle walls.', 'The third phase involves a timed confrontation where players fire cannons at each other\'s castles within a time limit.', 'In the fourth phase, players must rebuild their castles to close any openings within a set time limit (reducing each time). Phases 3 and 4 repeat until one player is unable to close their castle.'], features: ['Main Game (Multiplayer - 2 players)', 'Creative (Unlimited block placement and shooting practice)', 'Tutorial (Step-by-step learning of game phases)', 'Shop (Earn coins in the main game to customize your castle layout)'], slides: [{img:'./assets/images/DefendYourCastle_cover.png', caption:'Shooting Phase'},{img:'./assets/images/DYCAR_building.png', caption:'Build Phase'},{img:'./assets/images/DYCAR_creative.png', caption:'Creative Mode'},{img:'./assets/images/DYCAR_shop.png', caption:'Shop'},{img:'./assets/images/DYCAR_tutorial.png', caption:'Tutorial'}] },
  { id: 'Dimensions', title: 'Dimensions', category: 'game development', tag: 'Game', tagClass: 'tag-game', image: './assets/images/dimensions_cover.png', video: 'JifOPwcG7Os', description: 'This personal project aims to explore a novel concept by combining 2D and 3D elements in a single game. The player controls two characters: one can manipulate 2D physical objects, while the other can handle 3D physical objects.', itch: 'https://ccostax.itch.io/dimensions', features: ['2D and 3D dimensions (the camera perspective changes depending on the character currently in use)', 'Puzzle-solving and enemy combat', 'Abilities such as jumping, dashing, attacking, and moving blocks'], slides: [{img:'./assets/images/dimensions1.png'},{img:'./assets/images/dimensions2.png'},{img:'./assets/images/dimensions3.png'}] },
  { id: 'Nutricao', title: 'Missão Nutritiva', category: 'game development', tag: 'Game', tagClass: 'tag-game', image: './assets/images/missaonutritiva_cover.jpg', video: 'pQot34SdBuQ', description: 'This project is a mobile 2D game designed to help kids learn about nutrition through play. The game provides strategies for children to understand the nutritional value and properties of various foods, including proteins, fiber, carbohydrates, and fats.', gameFeatures: ['Collect all essential nutrients by catching healthy foods until the indicators turn green', 'Unlock two new fruits at each level, increasing the difficulty while expanding knowledge', 'Navigate levels containing both good and bad fruits, requiring players to distinguish between healthy and unhealthy options'], extraFeatures: ['Main Game (Level Phased)', 'Cooking Smoothie (Learn to shop for ingredients, cut them, and make smoothies)', 'Library (A resource to help players understand the nutritional value of various foods)'], slides: [{img:'./assets/images/nutricao1.png', caption:'Main Game - Level Help'},{img:'./assets/images/nutricao2.png', caption:'Main Game - Level Help'},{img:'./assets/images/nutricao3.png', caption:'Main Game - Level'},{img:'./assets/images/nutricao4.png', caption:'Main Game - Victory'},{img:'./assets/images/nutricao5.png', caption:'Cooking Smoothie - Level Help'},{img:'./assets/images/nutricao6.png', caption:'Cooking Smoothie - Level Phase 1'},{img:'./assets/images/nutricao7.png', caption:'Cooking Smoothie - Level Phase 2'},{img:'./assets/images/nutricao8.png', caption:'Cooking Smoothie - Level Phase 3'}] },
  { id: 'Shadow', title: 'Shadow (OnlyUp)', category: 'game development', tag: 'Game', tagClass: 'tag-game', image: './assets/images/shadow_cover.png', video: '0mXKkcgL1ko', description: 'Secret Santa Jam 2024 Game Challenge!!! Shadow OnlyUp - A journey where Shadow needs to climb up while being fast!!! Are you up to the challenge?!', itch: 'https://ccostax.itch.io/shadow-onlyup', features: ['Game OnlyUp Platform Style, with 3 different scenarios', 'Abilities such as jumping, speed, dash, homing attack, double jump', 'Shop to customize the character and scenario'], slides: [{img:'./assets/images/shadow1.png'},{img:'./assets/images/shadow2.png'},{img:'./assets/images/shadow3.png'},{img:'./assets/images/shadow4.png'},{img:'./assets/images/shadow5.png'}] },
  { id: 'SimpleLand', title: 'Simple Land', category: 'game development', tag: 'Game', tagClass: 'tag-game', image: './assets/images/SimpleLand_cover.jpg', description: 'This game is a 2D multiplayer adventure where players must work together to progress through levels and collect items in Simple Land. Players can use blocks to aid each other by moving and placing them on the map with a swipe of the finger.', itch: 'https://ccostax.itch.io/simple-land', features: ['Create and join lobby', 'Captain role (can insert, move, and enlarge blocks in the game)', 'Other players (cannot manipulate blocks)', 'Levels with unique abilities (super jumping, dashing, etc.)'], extraFeatures: ['Main Game (Multiplayer: 1-8 players)', 'Minigames (Singleplayer: e.g., meteor escape, Pac-Man style challenges)', 'Shop (Purchase clothes for characters)', 'Achievements (Earned by playing the main game)'], slides: [{img:'./assets/images/simpleland7.jpg', caption:'Main Game'},{img:'./assets/images/SimpleLand_cover.jpg', caption:'Main Game'},{img:'./assets/images/simpleland3.jpg', caption:'Mini game'},{img:'./assets/images/simpleland5.jpg', caption:'Lobby'},{img:'./assets/images/simpleland4.jpg', caption:'Create lobby'},{img:'./assets/images/simpleland1.jpg', caption:'Shop'},{img:'./assets/images/simpleland2.jpg', caption:'Achievements'}] },
  { id: 'Chatbot', title: 'ChatBot AI', category: 'ai projects', tag: 'AI', tagClass: 'tag-ai', image: './assets/images/chatbot_cover.png', description: 'A chatbot capable of responding to course-specific questions, using text-to-speech, speaking avatars, and integrated quiz functionality. Built with HuggingFace for natural language processing.', slides: [{img:'./assets/images/chatbot_cover.png', caption:'ChatBot AI'},{img:'./assets/images/chatbot_text.png', caption:'Text Chat'},{img:'./assets/images/chatbot_voice.png', caption:'Voice Chat'},{img:'./assets/images/chatbot_quiz.png', caption:'Quiz'},{img:'./assets/images/chatbot_avatar.png', caption:'Avatar'}] },
  { id: 'TerraformCloud', title: '4 In a Line Multiplayer', category: 'fullstack / web apps', tag: 'FullStack', tagClass: 'tag-web', image: './assets/images/terraform_cloud3.png', video: 'QXOnAkGGGGw', description: 'The aim of this project is to offer a multiplayer Four in a Line game, built with HTML, CSS, and JavaScript, that uses Docker for local play and Terraform and Google Cloud for online play (cloud).', features: ['Creating the game code (HTML, CSS, JavaScript) communicating with all 3 services (client, server and database)', 'Ensuring Docker containers configured correctly and communicating', 'Configuring triggers for each component in GCP and connecting in Terraform', 'Using two different databases (MongoDB locally and MongoDB Atlas cloud)', 'Creating extra settings for Google Cloud detecting the project', 'Ensuring communication didn\'t fail when players are playing'], slides: [{img:'./assets/images/terraform1.png', caption:'4 in a Line (Docker)'},{img:'./assets/images/terraform2.png', caption:'4 in a Line (Docker)'},{img:'./assets/images/terraform3.png', caption:'4 in a Line (Docker)'},{img:'./assets/images/terraform_cloud.png', caption:'Google Cloud'},{img:'./assets/images/terraform_cloud2.png', caption:'4 in a Line (Terraform)'},{img:'./assets/images/terraform_cloud3.png', caption:'4 in a Line (Terraform)'},{img:'./assets/images/docker_approach.png', caption:'Local Approach'},{img:'./assets/images/terraform_approach.png', caption:'Cloud Approach'}] },
  { id: 'Clinical', title: 'Clinical Management System', category: 'fullstack / web apps', tag: 'FullStack', tagClass: 'tag-web', image: './assets/images/clinical_intro.png', video: 'odu18feHyzs', description: 'The main objective of this project is to develop a clinical enterprise application for managing biomedical data and signals of individuals with cardiovascular diseases. Front-end built with NUXT.JS, backend in JAVA, managed using Docker.', features: ['Role-based features for administrators, healthcare professionals, and patients', 'Management operations (CRUD) for patients, professionals, administrators, and more', 'Health data monitoring including biometric data, prescriptions, observations', 'Dashboards and statistics for each role', 'Notifications and communication via email', 'Soft deletes, document uploads, data import/export, responsive interface'], slides: [{img:'./assets/images/clinical1.png', caption:'Menu'},{img:'./assets/images/clinical2.png', caption:'Patient Management'},{img:'./assets/images/clinical10.png', caption:'Add Diseases'},{img:'./assets/images/clinical3.png', caption:'Patient Information'},{img:'./assets/images/clinical5.png', caption:'List of Patients in Excel'},{img:'./assets/images/clinical8.png', caption:'New Prescription'},{img:'./assets/images/clinical7.png', caption:'Data Information'}] },
  { id: 'MERN', title: 'E-Commerce (MERN STACK Study)', category: 'fullstack / web apps', tag: 'FullStack', tagClass: 'tag-web', image: './assets/images/MERN_1.png', description: 'An e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). Allows users to register, log in, add products, search, update, and delete products with JWT authentication.', features: ['Authentication and Authorization with JWT tokens', 'Product Management (add, list, search, update, delete)', 'Frontend built with React and React Router', 'RESTful API with Node.js and Express', 'MongoDB integration for data storage'], slides: [{img:'./assets/images/MERN_4.png', caption:'Login'},{img:'./assets/images/MERN_5.png', caption:'Register'},{img:'./assets/images/MERN_1.png', caption:'List of Products'},{img:'./assets/images/MERN_2.png', caption:'Add Product'},{img:'./assets/images/MERN_3.png', caption:'Update Product'}] },
  { id: 'Web', title: 'UAV Augmented Reality Management using Web Application', category: 'fullstack / web apps', tag: 'FullStack', tagClass: 'tag-web', image: './assets/images/web_missionplanner.png', video: 'CEQe08uTEHo', description: 'This study presents a Digital Twin (DT) Web system for UAVs (drones) that enables users to visualize, control, and mission plan for both virtual and real UAVs for wildfire prevention and monitoring.', projectRef: 'DBoidS - Digital twin Boids fire prevention System - <a href="https://sciproj.ptcris.pt/171663PRJ" target="_blank">10.54499/PTDC/CCI-COM/2416/2021</a>', contributions: ['Digital Twin-based web application to visualize, control and mission planner UAVs using Google Maps API', 'Autonomous UAV data attribution and movement using external UAV data for real-time remote visualization', 'Virtual environment for users to test and train UAV control without risks', 'Hybrid approach to allow the combination of real and virtual environments', 'Integration with Gazebo simulator for UAV management (Websockets)'], features: ['Drone Markers (using Google Maps API) for visualization of UAVs', 'A comprehensive list of UAVs, both virtual and real, for management and selection', 'Multiple commands for managing real UAVs efficiently', 'Manual control of UAVs using the key arrows for directional movement', 'Live visualization of the UAV\'s camera feed', 'Autonomous Movement in a certain area using virtual and real UAVs'], slides: [{img:'./assets/images/connecting_websockets_map.png', caption:'UAV visualization'},{img:'./assets/images/web_websocket_connection.png', caption:'UAV Connection'},{img:'./assets/images/web_missionplanner.png', caption:'UAV Mission Planner'}] },
  { id: 'Moocs', title: 'Creation of MOOCs', category: 'fullstack / web apps', tag: 'Web', tagClass: 'tag-web', image: './assets/images/mooc_cover.png', video: '9lkx9ZBtTWQ', description: 'Creation of Massive Open Online Courses (MOOCs) with videos and quizzes, and personalized learning features. Includes a chatbot capable of responding to course-specific questions, using text-to-speech, speaking avatars (HeyGen), and integrated quiz functionality.', features: ['Moodle-based platform with custom video lessons and interactive quizzes', 'AI-powered chatbot for course-specific Q&A using HuggingFace', 'HeyGen AI avatars for realistic text-to-speech video narration', 'Speaking avatars with synchronized lip movement and expressions', 'Personalized learning paths with progress tracking', 'Responsive design accessible on desktop and mobile'], slides: [{img:'./assets/images/mooc_cover.png', caption:'MOOCs Cover'},{img:'./assets/images/mooc_principal.png', caption:'Main Page'},{img:'./assets/images/mooc_video1.png', caption:'Video Lesson'},{img:'./assets/images/mooc_video2.png', caption:'Video Lesson'},{img:'./assets/images/mooc_quiz.png', caption:'Quiz'}] },
  { id: 'HeyGen', title: 'AI Avatars with HeyGen', category: 'video creator', tag: 'Video', tagClass: 'tag-video', image: './assets/images/heygen_2.png', video: 'zcAVhwyYA48', description: 'Integration of HeyGen AI avatars into websites, videos demonstrations, and more, to create realistic virtual presenters for educational content. HeyGen enables the generation of professional AI avatars with synchronized lip movement, natural facial expressions, and text-to-speech in multiple languages.', features: ['Creation of custom AI avatars with realistic appearance and voice', 'Text-to-speech synthesis with natural intonation and pacing', 'Synchronized lip movement and facial expressions', 'Multi-language support for course content delivery', 'Seamless integration with Moodle and other LMS platforms', 'Batch video generation for scalable course production', 'Custom background and branding options', 'Avatar customization to match course identity'], slides: [{img:'./assets/images/mooc_heygen.png', caption:'HeyGen AI Avatar'},{img:'./assets/images/heygen_0.png', caption:'Heygen - My library'},{img:'./assets/images/mooc_video2.png', caption:'Avatar presenting content'},{img:'./assets/images/heygen_1.png', caption:'Heygen Editor Video'}] }
];

let currentFilter = 'all';

function getTagCategoryClass(cat) {
  const map = {
    'vr/ar projects': 'tag-vr',
    'game development': 'tag-game',
    'ai projects': 'tag-ai',
    'fullstack / web apps': 'tag-web',
    'video creator': 'tag-video'
  };
  return map[cat] || 'tag-web';
}

function getTagLabel(cat) {
  const map = {
    'vr/ar projects': 'VR/AR',
    'game development': 'Game',
    'ai projects': 'AI',
    'fullstack / web apps': 'Web',
    'video creator': 'Video'
  };
  return map[cat] || 'Web';
}

function renderProjects(filter) {
  const grid = document.getElementById('projectGrid');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="project-card reveal" data-project-id="${p.id}">
      <div class="project-card-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="project-card-overlay">
          <span>View Details</span>
        </div>
      </div>
      <div class="project-card-body">
        <h3>${p.title}</h3>
        <p>${p.category}</p>
        <span class="project-tag ${getTagCategoryClass(p.category)}">${getTagLabel(p.category)}</span>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
  });
  setTimeout(() => {
    grid.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('visible');
    });
  }, 100);
}

function openProjectModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');

  let html = `<div class="modal-content-body"><h1>${p.title}</h1><p class="modal-category">${p.category}</p>`;
  if (p.video) html += `<iframe class="modal-video" src="https://www.youtube.com/embed/${p.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  if (p.description) html += `<p class="modal-text"><strong>${p.description}</strong></p>`;
  if (p.projectRef) html += `<p class="modal-text">${p.projectRef}</p>`;
  if (p.paper) html += `<p class="modal-text"><strong>Paper:</strong> <a href="${p.paper}" target="_blank">${p.paper}</a></p>`;
  if (p.itch) html += `<a href="${p.itch}" target="_blank" class="modal-link">View on Itch.io →</a>`;

  if (p.phases) {
    html += `<hr class="modal-divider"><h3 class="modal-section-title">Game Phases</h3><ul class="modal-list">`;
    p.phases.forEach(ph => { html += `<li>${ph}</li>`; });
    html += `</ul>`;
  }

  if (p.contributions) {
    html += `<hr class="modal-divider"><h3 class="modal-section-title">Contributions</h3><ul class="modal-list">`;
    p.contributions.forEach(c => { html += `<li>${c}</li>`; });
    html += `</ul>`;
  }

  if (p.features) {
    html += `<hr class="modal-divider"><h3 class="modal-section-title">Features</h3><ul class="modal-list">`;
    p.features.forEach(f => { html += `<li>${f}</li>`; });
    html += `</ul>`;
  }

  if (p.extraFeatures) {
    html += `<h3 class="modal-section-title">Additional Features</h3><ul class="modal-list">`;
    p.extraFeatures.forEach(f => { html += `<li>${f}</li>`; });
    html += `</ul>`;
  }

  if (p.gameFeatures) {
    html += `<hr class="modal-divider"><h3 class="modal-section-title">Game Features</h3><ul class="modal-list">`;
    p.gameFeatures.forEach(f => { html += `<li>${f}</li>`; });
    html += `</ul>`;
  }

  if (p.slides && p.slides.length > 0) {
    html += `<hr class="modal-divider"><h3 class="modal-section-title">Gallery</h3><div class="modal-slideshow" id="slideshow-${p.id}">`;
    p.slides.forEach((s, i) => {
      const style = s.width ? ` style="width:${s.width}; margin:0 auto;"` : '';
      html += `<div class="modal-slide ${i === 0 ? 'active' : ''}" data-slide="${i}"><img src="${s.img}"${style} alt=""><div class="modal-slide-caption">${s.caption || ''}</div></div>`;
    });
    if (p.slides.length > 1) {
      html += `<button class="modal-slide-btn modal-slide-prev" onclick="changeSlide('${p.id}', -1)">❮</button><button class="modal-slide-btn modal-slide-next" onclick="changeSlide('${p.id}', 1)">❯</button>`;
      html += `<div class="modal-slide-dots">`;
      p.slides.forEach((_, i) => { html += `<span class="modal-slide-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide('${p.id}', ${i})"></span>`; });
      html += `</div>`;
    }
    html += `</div>`;
  }

  html += `</div>`;
  body.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  const modal = document.getElementById('projectModal');
  if (e.target.closest('.modal-backdrop')) closeProjectModal();
});

const slideStates = {};

function changeSlide(id, dir) {
  if (!slideStates[id]) slideStates[id] = 0;
  const slides = document.querySelectorAll(`#slideshow-${id} .modal-slide`);
  slideStates[id] = (slideStates[id] + dir + slides.length) % slides.length;
  updateSlide(id);
}

function goToSlide(id, idx) {
  slideStates[id] = idx;
  updateSlide(id);
}

function updateSlide(id) {
  const slides = document.querySelectorAll(`#slideshow-${id} .modal-slide`);
  const dots = document.querySelectorAll(`#slideshow-${id} .modal-slide-dot`);
  slides.forEach((s, i) => s.classList.toggle('active', i === slideStates[id]));
  if (dots.length) dots.forEach((d, i) => d.classList.toggle('active', i === slideStates[id]));
}

function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects(currentFilter);
      initRevealObserver();
    });
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('open');
    });
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const sections = document.querySelectorAll('.section, #hero');
    const links = menu.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 150;
      if (window.scrollY >= top) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  });
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 600;
  const start = performance.now();
  const maxLen = String(target).length;

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    if (progress < 1) {
      let scramble = '';
      for (let i = 0; i < maxLen; i++) {
        scramble += Math.floor(Math.random() * 10);
      }
      el.textContent = scramble + suffix;
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.highlight-number').forEach(el => observer.observe(el));
}

function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initFilters();
  initNavbar();
  initRevealObserver();
  initCounters();

  document.getElementById('modalClose').addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          form.innerHTML = '<p style="text-align:center;color:var(--accent);font-weight:600;padding:20px;">Thanks for reaching out! I\'ll get back to you soon.</p>';
        } else {
          form.innerHTML = '<p style="text-align:center;color:#ef4444;font-weight:600;padding:20px;">Something went wrong. Please email me directly at carlos.cost142@gmail.com</p>';
        }
      } catch {
        form.innerHTML = '<p style="text-align:center;color:#ef4444;font-weight:600;padding:20px;">Something went wrong. Please email me directly at carlos.cost142@gmail.com</p>';
      }
    });
  }
});
