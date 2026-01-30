// รอให้เว็บโหลดเสร็จก่อนค่อยทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    const boostBtn = document.getElementById('boostBtn');
    const ring = document.getElementById('ram-ring');
    const ramPercent = document.getElementById('ram-percent');
    const statusText = document.getElementById('system-status');

    // ตรวจสอบว่าเจอองค์ประกอบครบไหม
    if (!boostBtn || !ring || !ramPercent || !statusText) {
        console.error("Critical Error: Elements not found!");
        return;
    }

    boostBtn.addEventListener('click', function() {
        // 1. ล็อกปุ่มและเปลี่ยนข้อความทันที
        this.disabled = true;
        this.innerHTML = "ANALYZING SYSTEM...";
        statusText.innerHTML = "SCANNING...";
        statusText.style.color = "#ffff00"; // สีเหลือง

        // 2. เริ่มอนิเมชั่นหมุนติ้วๆ
        let rotation = 0;
        const spinInterval = setInterval(() => {
            rotation += 20;
            ring.style.transform = `rotate(${rotation}deg)`;
        }, 50);

        // 3. จำลองการทำงาน 3 วินาที
        setTimeout(() => {
            clearInterval(spinInterval); // หยุดหมุน
            
            // แสดงผลลัพธ์
            ring.style.transform = "rotate(720deg)"; // หมุนไปตำแหน่งสุดท้าย
            ramPercent.innerHTML = "35"; // แรมลดลงเหลือ 35%
            
            statusText.innerHTML = "OPTIMIZED";
            statusText.style.color = "#00ff88"; // สีเขียว
            
            this.innerHTML = "BOOST COMPLETE ✔️";
            this.style.background = "var(--primary)";

            // คืนค่าปุ่มหลังจาก 3 วิ
            setTimeout(() => {
                this.disabled = false;
                this.innerHTML = "INITIATE BOOST PROTOCOL";
                this.style.background = ""; // กลับไปใช้สีเดิม
                ring.style.transform = "rotate(0deg)";
            }, 3000);

        }, 3000); // รอ 3 วินาที
    });
});
