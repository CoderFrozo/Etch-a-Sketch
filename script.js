const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // Clear any existing grid

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

// Initial grid
createGrid(16);

resizeBtn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  newSize = parseInt(newSize);

  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});