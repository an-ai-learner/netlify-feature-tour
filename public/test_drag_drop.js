const card = document.getElementById('card');
let offsetX = 0, offsetY = 0, isDragging = false;

card.style.top = '100px'; // Set initial position
card.style.left = '100px';

card.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - card.offsetLeft;
  offsetY = e.clientY - card.offsetTop;
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
});

function mousemove(e) {
  if (!isDragging) return;
  card.style.left = (e.clientX - offsetX) + 'px';
  card.style.top = (e.clientY - offsetY) + 'px';
}

function mouseup() {
  isDragging = false;
  document.removeEventListener('mousemove', mousemove);
  document.removeEventListener('mouseup', mouseup);
}