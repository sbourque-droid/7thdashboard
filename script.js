function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerText =
        now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
}

updateClock();              // run immediately
setInterval(updateClock, 1000); // update every second
