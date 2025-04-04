// Phase 1
const thoughtInput = document.getElementById('thoughtInput');
const addThoughtButton = document.getElementById('addThought');
const thoughtList = document.getElementById('thoughtList');
const timerDisplay = document.getElementById('timer');
const startTimerButton = document.getElementById('startTimer');
const stopTimerButton = document.getElementById('stopTimer');

let timerInterval;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  timerDisplay.textContent = "00:00";
}

addThoughtButton.addEventListener('click', () => {
  const thought = thoughtInput.value.trim();
  if (thought.split(' ').length <= 3 && thought !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = `${thought} (0)`; 
    listItem.addEventListener('click', () => {
      const count = Number(listItem.textContent.match(/\(([^)]+)\)/)[1]); 
      listItem.textContent = `${thought} (${count + 1})`;
    });
    thoughtList.appendChild(listItem);
    thoughtInput.value = '';
  }
});

// Phase 3 
const thoughtInputPhase3 = document.getElementById('thoughtInputPhase3');
const addThoughtButtonPhase3 = document.getElementById('addThoughtPhase3');
const thoughtListPhase3 = document.getElementById('thoughtListPhase3');

addThoughtButtonPhase3.addEventListener('click', () => {
  const thought = thoughtInputPhase3.value.trim();
  if (thought.split(' ').length <= 3 && thought !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = `${thought} (0)`; 
    listItem.addEventListener('click', () => {
      const count = Number(listItem.textContent.match(/\(([^)]+)\)/)[1]); 
      listItem.textContent = `${thought} (${count + 1})`;
    });
    thoughtListPhase3.appendChild(listItem);
    thoughtInputPhase3.value = '';
  }
});

// Phase 2 and Results logic will be added here later

startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
