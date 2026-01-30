const apps = [
    // โซเชียลหลัก
    { name: 'Instagram', url: 'https://www.instagram.com/', icon: '📸' },
    { name: 'TikTok', url: 'https://www.tiktok.com/', icon: '🎵' },
    { name: 'Facebook', url: 'https://m.facebook.com/', icon: '📘' },
    
    // เกมยอดฮิต (ลิงก์เปิดแอป หรือเข้า Play Store)
    { name: 'ROV', url: 'https://play.google.com/store/apps/details?id=com.garena.game.kgth', icon: '⚔️' },
    { name: 'Free Fire', url: 'https://play.google.com/store/apps/details?id=com.dts.freefireth', icon: '🔫' },
    { name: 'Roblox', url: 'https://www.roblox.com/home', icon: '🟥' }
];

const grid = document.getElementById('appGrid');
// เคลียร์ของเก่าก่อน
grid.innerHTML = '';

apps.forEach(app => {
    const div = document.createElement('div');
    div.className = 'app-item';
    // เพิ่มเอฟเฟกต์กดแล้วเด้ง
    div.innerHTML = `<div class="app-icon">${app.icon}</div>${app.name}`;
    div.onclick = () => window.location.href = app.url;
    grid.appendChild(div);
});
