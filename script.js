const plannerEl = document.getElementById('planner');
const startHour = 8; // 8 AM
const endHour = 17;  // 5 PM

function loadPlanner() {
  for (let hour = startHour; hour <= endHour; hour++) {
    const hourLabel = (hour <= 12 ? hour : hour - 12) + (hour < 12 ? ' AM' : ' PM');
    const taskValue = localStorage.getItem(`task-${hour}`) || '';

    const block = document.createElement('div');
    block.className = 'hour-block';
    block.innerHTML = `
      <div class="hour">${hourLabel}</div>
      <div class="task">
        <input type="text" id="input-${hour}" value="${taskValue}" placeholder="Enter your task...">
      </div>
    `;
    plannerEl.appendChild(block);
  }
}

function saveTasks() {
  for (let hour = startHour; hour <= endHour; hour++) {
    const task = document.getElementById(`input-${hour}`).value;
    localStorage.setItem(`task-${hour}`, task);
  }
  alert('Tasks saved!');
}

function clearTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    for (let hour = startHour; hour <= endHour; hour++) {
      localStorage.removeItem(`task-${hour}`);
      document.getElementById(`input-${hour}`).value = '';
    }
  }
}

loadPlanner();
