
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const body = document.body;
  
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  

  const startBtn = document.querySelector(
    'button[data-action="start"]'
  );

  const stopBtn = document.querySelector(
    'button[data-action="stop"]'
  );
  
   let timerId = null;

  stopBtn.disabled = true;
  
 
  startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
      body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      startBtn.disabled = true;
      stopBtn.disabled = false;
      console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
    }, 1000);
  });
  
  
  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
      stopBtn.disabled = true;
  });