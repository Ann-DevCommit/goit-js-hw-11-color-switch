const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const startEl = document.querySelector('[data-action="start"]')
const stopEl = document.querySelector('[data-action="stop"]')

let intervalId = null;
stopEl.setAttribute('disabled', true)

startEl.addEventListener('click', onStartColorSwitch)
stopEl.addEventListener('click', onStopColorSwitch)


function onStartColorSwitch() {
  intervalId = setInterval(() => {
  const colorId = randomIntegerFromInterval(0, (colors.length - 1))
  document.body.style.backgroundColor = colors[colorId]
  console.log(colors[colorId])
  }, 1000);
  
  startEl.setAttribute('disabled', true)
  stopEl.removeAttribute('disabled')
}

function onStopColorSwitch() {
  clearInterval(intervalId)
  startEl.removeAttribute('disabled')
  stopEl.setAttribute('disabled', true)
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



