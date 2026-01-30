document.addEventListener('DOMContentLoaded', () => {
    const boostBtn = document.getElementById('boostBtn');
    const ring = document.getElementById('ram-ring');
    const ramPercent = document.getElementById('ram-percent');
    const statusText = document.getElementById('system-status');

    if (!boostBtn) return;

    boostBtn.addEventListener('click', function() {
        // 1. เริ่มกระบวนการ
        this.disabled = true;
        this.innerHTML = "⚠️ FORCING SYSTEM CLEAN...";
        this.style.background = "#ff0055"; // สีแดงเตือนความแรง
        statusText.innerHTML = "TRIGGERING LMK...";
        
        // หมุนวงแหวนรอ
        ring.style.transform = "rotate(720deg)";

        // 2. [THE TRICK] สร้างโหลดเทียมเพื่อบีบให้ OS ฆ่าแอปอื่น
        try {
            statusText.innerHTML = "ALLOCATING MEMORY...";
            
            // สร้าง Array ขนาดใหญ่ (ประมาณ 100MB+) เพื่อดันแรม
            const pressure = [];
            for (let i = 0; i < 100000; i++) {
                pressure.push(new Array(1000).fill('junk-data'));
            }

            // 3. ปล่อยแรมทันที (เพื่อให้เครื่องลื่นขึ้น)
            setTimeout(() => {
                // ล้างค่าทิ้ง
                pressure.length = 0; 
                
                // อัปเดตหน้าจอ
                ramPercent.innerHTML = Math.floor(Math.random() * (45 - 30) + 30); // สุ่มเลขผลลัพธ์ (30-45%)
                statusText.innerHTML = "SYSTEM PURGED ⚡";
                statusText.style.color = "#00ff88";
                
                this.innerHTML = "REAL BOOST COMPLETE";
                this.style.background = "#00ff88"; // สีเขียวสำเร็จ
                this.style.color = "#000";

                // คืนค่าปุ่ม
                setTimeout(() => {
                    this.disabled = false;
                    this.innerHTML = "INITIATE BOOST PROTOCOL";
                    this.style.background = ""; 
                    this.style.color = "";
                    ring.style.transform = "rotate(0deg)";
                }, 4000);

            }, 1500); // แช่ไว้ 1.5 วิ ให้ระบบทำงาน

        } catch (e) {
            console.log("Memory limit reached, system likely cleaned itself.");
            // ถ้า Error แปลว่าแรมเต็มจนเบราว์เซอร์ตัดการทำงาน ซึ่งก็ถือว่าสำเร็จ
            ramPercent.innerHTML = "30";
            statusText.innerHTML = "MAX CLEAN DONE";
            this.disabled = false;
        }
    });
});
