document.addEventListener('DOMContentLoaded', () => {
  const skills = [
    "Pensamiento logico","Resolución de problemas","Capacidad para abstracción",
    "Comunicacion","Trabajo en equipo","Escucha activa","Aprendizaje continuo","Curiosidad tecnica",
    "Gestion del timpo","Cumplimineto de plazos","Autogestion y autonomia"
  ];

  const container = document.getElementById('skills-container');

  skills.forEach(skill => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    container.appendChild(tag);
  });
});