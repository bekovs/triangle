const triangle = document.querySelector('.triangle');
const container = document.querySelector('.container');

let dot = document.createElement('div');
dot.style.width = '1px';
dot.style.height = '1px';
dot.style.backgroundColor = 'black';
dot.style.borderRadius = '50%';
container.append(dot);

dot.style.position = 'absolute';
dot.style.top = Math.ceil(Math.random() * 500) + 108 + "px";
dot.style.left = Math.ceil(Math.random() * 500) + 100 + "px";

let prevRes = {
  left: dot.getBoundingClientRect().left,
  top: dot.getBoundingClientRect().top
};

const drawDot = () => {
  let dot = document.createElement('div');
  dot.style.width = '1px';
  dot.style.height = '1px';
  dot.style.backgroundColor = 'coral';
  dot.style.borderRadius = '50%';

  container.append(dot);

  dot.style.position = 'absolute';
  switch(rand()){
    case 1: 
      dot.style.left = (((prevRes.left - triangle.offsetLeft) / 2) + triangle.offsetLeft) + "px"
      dot.style.top = (((prevRes.top - triangle.offsetTop) / 2) + triangle.offsetTop) + "px"
      break;
    case 2:
      dot.style.left = (((triangle.offsetLeft + 500 - prevRes.left) / 2) + prevRes.left) + "px"
      dot.style.top = (((prevRes.top - triangle.offsetTop) / 2) + triangle.offsetTop) + "px"
      break;
    case 3: 
      dot.style.left = (((prevRes.left - triangle.offsetLeft) / 2) + triangle.offsetLeft) + "px"
      dot.style.top = (((triangle.offsetTop + 500 - prevRes.top) / 2) + prevRes.top) + "px"
      break;
    default:
      break;
  }
  prevRes = {
    left: dot.getBoundingClientRect().left,
    top: dot.getBoundingClientRect().top
  };
}

for(let i = 1; i <= 20000; i++) {
  setTimeout(() => {
    drawDot()
  }, 10 * i)
}

function rand() {
  return Math.ceil(Math.random() * 3)
}
