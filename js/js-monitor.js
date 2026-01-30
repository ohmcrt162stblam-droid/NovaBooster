// 1. ระบบสลับหน้า (Tabs)
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    
    document.getElementById(tabName + '-page').classList.add('active');
    event.currentTarget.classList.add('active');
}

// 2. วัดค่า FPS (Real-time)
let frameCount = 0;
let lastTime = performance.now();
const fpsVal = document.getElementById('fps-val');
const fpsBar = document.getElementById('fps-bar');

function updateFPS() {
    frameCount++;
    let now = performance.now();
    let elapsed = now - lastTime;

    if (elapsed >= 1000) {
        let fps = Math.round((frameCount * 1000) / elapsed);
        fpsVal.innerText = fps;
        fpsBar.style.width = (fps / 60 * 100) + "%"; // สมมติจอ 60Hz
        frameCount = 0;
        lastTime = now;
    }
    requestAnimationFrame(updateFPS);
}
updateFPS();

// 3. ตรวจสอบแบตเตอรี่
if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
        function updateBattery() {
            document.getElementById('batt-val').innerText = Math.round(battery.level * 100) + "%";
            document.getElementById('batt-status').innerText = battery.charging ? "CHARGING" : "DISCHARGING";
        }
        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);
    });
}

// 4. วัด Latency (Ping)
setInterval(() => {
    const start = Date.now();
    fetch('https://www.google.com/favicon.ico', { mode: 'no-cors', cache: 'no-store' })
    .then(() => {
        const ping = Date.now() - start;
        document.getElementById('ping-val').innerText = ping;
    }).catch(() => {
        document.getElementById('ping-val').innerText = "ERR";
    });
}, 3000);
