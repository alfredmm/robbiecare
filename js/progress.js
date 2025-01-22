
// Straight Progress Bars Animation
const straightBars = document.querySelectorAll('.progress-bar');
straightBars.forEach((bar) => {
    const value = bar.getAttribute('aria-valuenow');
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= value) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = `${progress}%`;
            bar.textContent = `${progress}%`;
        }
    }, 20);
});

// Circular Progress Bars Animation
const circularBars = document.querySelectorAll('.progress-ring');
circularBars.forEach((ring, index) => {
    const percentages = [85, 100, 75];
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const targetValue = percentages[index];
    let progress = 0;

    const textElement = ring.parentNode.querySelector('text');

    const interval = setInterval(() => {
        if (progress >= targetValue) {
            clearInterval(interval);
        } else {
            progress++;
            const offset = circumference - (progress / 100) * circumference;
            ring.style.strokeDasharray = `${circumference} ${circumference}`;
            ring.style.strokeDashoffset = offset;
            textElement.textContent = `${progress}%`;
        }
    }, 20);
        });