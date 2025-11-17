// Membuat efek bintang
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starsCount = 200;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posisi acak
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Ukuran acak
        const size = Math.random() * 3;
        
        // Durasi animasi acak
        const duration = 3 + Math.random() * 7;
        
        // Delay acak
        const delay = Math.random() * 5;
        
        star.style.left =
