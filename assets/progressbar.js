const circularProgress = document.querySelectorAll(".circular-progress");

circularProgress.forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");

  let startValue = 0;
  let speed = 65;
  let endValue = Number(progressBar.getAttribute("data-percentage"));
  let progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;

    if (startValue === endValue) {
      clearInterval(progress);
    }

  }, speed);
});
