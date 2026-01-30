const apps = [
    { name: 'FB Lite', url: 'https://m.facebook.com' },
    { name: 'X Lite', url: 'https://mobile.twitter.com' },
    { name: 'YouTube', url: 'https://m.youtube.com' },
    { name: 'TikTok', url: 'https://www.tiktok.com' },
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Maps', url: 'https://maps.google.com' }
];

const grid = document.getElementById('appGrid');
apps.forEach(app => {
    const div = document.createElement('div');
    div.className = 'app-item';
    div.innerHTML = `<div>⚡</div>${app.name}`;
    div.onclick = () => window.location.href = app.url;
    grid.appendChild(div);
});

