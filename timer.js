start.addEventListener("click", () => {
    const timer = setInterval(() => {
        if (clock.innerHTML <= 1) {
            clearInterval(timer);
        }
        clock.innerHTML = parseInt(clock.innerHTML) - 1;
    }, 1000);
})