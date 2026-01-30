document.getElementById('boostBtn').addEventListener('click', function() {
    const btn = this;
    const ring = document.getElementById('ram-ring');
    const percent = document.getElementById('ram-percent');
    const status = document.getElementById('system-status');

    btn.disabled = true;
    btn.innerText = "OPTIMIZING...";
    status.innerText = "PURGING CACHE...";

    setTimeout(() => {
        ring.style.transform = "rotate(360deg)";
        percent.innerText = "18"; // สมมติว่าลดลง
        status.innerText = "SYSTEM BOOSTED!";
        btn.innerText = "COMPLETED";
        
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = "EXECUTE BOOST";
        }, 3000);
    }, 2000);
});
