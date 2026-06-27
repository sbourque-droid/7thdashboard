// CLOCK + DATE
function updateClock() {
  const now = new Date();

  document.getElementById("clock").innerText =
    now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

  document.getElementById("date").innerText =
    now.toLocaleDateString([], {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
}

setInterval(updateClock, 1000);
updateClock();


// --------------------
// TIMER SYSTEM
// --------------------

let timerInterval;
let remainingSeconds = 0;

function startTimer() {
  const minutes = parseInt(document.getElementById("minutesInput").value);

  if (!minutes || minutes <= 0) {
    alert("Enter a valid number of minutes");
    return;
  }

  remainingSeconds = minutes * 60;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    remainingSeconds--;

    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      document.getElementById("timerStatus").innerText = "Time's up!";
      alert("⏰ Time is up!");
    } else {
      document.getElementById("timerStatus").innerText = "Running...";
    }

  }, 1000);

  updateTimerDisplay();
}

function resetTimer() {
  clearInterval(timerInterval);
  remainingSeconds = 0;
  updateTimerDisplay();
  document.getElementById("timerStatus").innerText = "Reset";
}

function updateTimerDisplay() {
  const min = Math.floor(remainingSeconds / 60);
  const sec = remainingSeconds % 60;

  document.getElementById("timer-display").innerText =
    `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}
