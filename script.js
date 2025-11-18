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
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}

// Data Mahasiswa
const studentsData = [
    {
        id: 1,
        name: "Ahmad Fauzi",
        nim: "21101152610001",
        angkatan: 2021,
        status: "Aktif",
        email: "ahmad.fauzi@student.unhas.ac.id",
        researchInterest: "Condensed Matter Physics"
    },
    {
        id: 2,
        name: "Sari Dewi Lestari",
        nim: "21101152610002", 
        angkatan: 2021,
        status: "Aktif",
        email: "sari.dewi@student.unhas.ac.id",
        researchInterest: "Cosmology"
    },
    {
        id: 3,
        name: "Budi Santoso",
        nim: "21101152610003",
        angkatan: 2020,
        status: "Alumni",
        email: "budi.santoso@student.unhas.ac.id",
        researchInterest: "Particle Physics"
    },
    // ... tambahkan data mahasiswa lainnya di sini
];

// Fungsi untuk menampilkan mahasiswa
function displayStudents(students) {
    const studentsGrid = document.getElementById('studentsGrid');
    if (!studentsGrid) return; // Hanya jalankan di halaman database
    
    studentsGrid.innerHTML = '';

    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        
        studentCard.innerHTML = `
            <div class="student-name">${student.name}</div>
            <div class="student-nim">NIM: ${student.nim}</div>
            <div class="student-info">Angkatan: ${student.angkatan}</div>
            <div class="student-info">Email: ${student.email}</div>
            <div class="student-info">Minat Penelitian: ${student.researchInterest}</div>
            <div class="student-status ${student.status === 'Aktif' ? 'status-aktif' : 'status-alumni'}">
                ${student.status}
            </div>
        `;
        
        studentsGrid.appendChild(studentCard);
    });
}

// Fungsi untuk filter dan search
function filterStudents() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    if (!searchInput || !yearFilter || !statusFilter) return; // Hanya jalankan di halaman database

    const searchTerm = searchInput.value.toLowerCase();
    const yearValue = yearFilter.value;
    const statusValue = statusFilter.value;

    const filteredStudents = studentsData.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                            student.nim.includes(searchTerm) ||
                            student.researchInterest.toLowerCase().includes(searchTerm);
        const matchesYear = yearValue === '' || student.angkatan.toString() === yearValue;
        const matchesStatus = statusValue === '' || student.status === statusValue;

        return matchesSearch && matchesYear && matchesStatus;
    });

    displayStudents(filteredStudents);
}

// Event listeners untuk filter
function initDatabasePage() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    if (searchInput && yearFilter && statusFilter) {
        searchInput.addEventListener('input', filterStudents);
        yearFilter.addEventListener('change', filterStudents);
        statusFilter.addEventListener('change', filterStudents);
        displayStudents(studentsData);
    }
}

// Inisialisasi saat halaman load
document.addEventListener('DOMContentLoaded', function() {
    createStars(); // Selalu jalankan efek bintang
    initDatabasePage(); // Jalankan fungsi database hanya jika di halaman database
});

