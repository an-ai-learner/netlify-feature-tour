const card = document.getElementById('card');
let offsetX = 0, offsetY = 0, isDragging = false;

// Set initial position
card.style.top = '100px';
card.style.left = '100px';

// Mouse events
card.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - card.offsetLeft;
  offsetY = e.clientY - card.offsetTop;
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
});

// Touch events
card.addEventListener('touchstart', function(e) {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - card.offsetLeft;
  offsetY = touch.clientY - card.offsetTop;
  document.addEventListener('touchmove', touchmove, {passive: false});
  document.addEventListener('touchend', touchend);
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

function touchmove(e) {
  if (!isDragging) return;
  e.preventDefault(); // Prevent scrolling
  const touch = e.touches[0];
  card.style.left = (touch.clientX - offsetX) + 'px';
  card.style.top = (touch.clientY - offsetY) + 'px';
}

function touchend() {
  isDragging = false;
  document.removeEventListener('touchmove', touchmove);
  document.removeEventListener('touchend', touchend);
}