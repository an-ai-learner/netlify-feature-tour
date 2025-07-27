let newX=0;let newY=0, startX=0, startY=0;
const card = document.getElementById('card');

card.addEventListener('mousedown', mousedown);

function mousedown(e) {
  startX = e.clientX - newX;
  startY = e.clientY - newY;
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
}

function mousemove(e) {
  newX = startX - e.clientX ;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  card.style.top= (card.offsetTop - newY) +'px';
  card.style.left = (card.offsetLeft - newX) + 'px';    

  //card.style.transform = `translate(${newX}px, ${newY}px)`;
}

function mouseup() {
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
    }