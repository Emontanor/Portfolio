document.addEventListener('DOMContentLoaded', () => {
  const skills = [
    "Pensamiento lógico","Resolución de problemas","Capacidad para abstracción",
    "Comunicación","Trabajo en equipo","Escucha activa","Aprendizaje continuo","Curiosidad técnica",
    "Gestión del tiempo","Cumplimiento de plazos","Autogestión y autonomía"
  ];

  const container = document.getElementById('skills-container');

  skills.forEach(skill => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    container.appendChild(tag);
  });
});