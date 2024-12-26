const card = document.getElementById('card');
document.addEventListener('mousemove', (e) => {
  const halfWidth = window.innerWidth / 2;
  const halfHeight = window.innerHeight / 2;
  const xAxis = (e.pageX - halfWidth) / 25;
  const yAxis = (halfHeight - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
