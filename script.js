// script.js

// Part 2: JavaScript Functions

// Function to calculate area
function calculateArea() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const display = document.getElementById('display');
  
    if (isNaN(width) || isNaN(height)) {
      display.textContent = "Error";
      document.getElementById('areaResult').textContent = "Please enter valid numbers.";
    } else {
      const area = width * height;
      display.textContent = area;
      document.getElementById('areaResult').textContent = `Area: ${area}`;
    }
  }
  
  // Function to clear the display and inputs
  function clearDisplay() {
    document.getElementById('width').value = '';
    document.getElementById('height').value = '';
    document.getElementById('display').textContent = '0';
    document.getElementById('areaResult').textContent = '';
  }
  
  // Function demonstrating scope
  let globalVariable = "I'm global!";
  
  function demonstrateScope() {
    let localVariable = "I'm local!";
    console.log(globalVariable); // Accessible
    console.log(localVariable); // Accessible
  }
  
  demonstrateScope();
  // console.log(localVariable); // Uncommenting this will throw an error
  
  // Function to toggle a CSS class
  function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
  }
  
  // Part 3: Combining CSS Animations with JavaScript
  function triggerAnimation() {
    const element = document.getElementById('animatedElement');
    element.classList.remove('animate'); // Reset animation
    void element.offsetWidth; // Trigger reflow
    element.classList.add('animate'); // Restart animation
  }
  
  // Additional Interactive Features
  
  // Drag and Drop
  const dragElement = document.getElementById('dragElement');
  const dropZone = document.getElementById('dropZone');
  
  dragElement.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
  
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });
  
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    dropZone.appendChild(draggable);
    dropZone.classList.remove('dragover');
  });
  
  // Color Picker
  const colorInput = document.getElementById('colorInput');
  const colorValue = document.getElementById('colorValue');
  
  colorInput.addEventListener('input', () => {
    colorValue.textContent = colorInput.value;
    document.body.style.backgroundColor = colorInput.value;
  });
  
  // Interactive Card Flip
  const card = document.querySelector('.card');
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });