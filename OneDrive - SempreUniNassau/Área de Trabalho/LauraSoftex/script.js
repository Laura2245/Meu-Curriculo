window.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.setProperty('--level', level + '%');
    skill.style.position = 'relative';
    const bar = document.createElement('div');
    bar.style.position = 'absolute';
    bar.style.top = '0';
    bar.style.left = '0';
    bar.style.bottom = '0';
    bar.style.width = '0%';
    bar.style.backgroundColor = '#4CAF50';
    bar.style.zIndex = '-1';
    bar.style.transition = 'width 1s ease';
    skill.appendChild(bar);
    setTimeout(() => {
      bar.style.width = level + '%';
    }, 100);
  });
});
