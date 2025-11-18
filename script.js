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

// Data Mahasiswa - SUDAH DIPERBAIKI DAN DITAMBAHKAN
const studentsData = [
    // Angkatan 2017-2020 (Alumni)
    {
        id: 1,
        name: "Andi Agung Prawira Negara",
        nim: "-",
        angkatan: 2017,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 2,
        name: "Muhammad Sabran",
        nim: "-", 
        angkatan: 2017,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 3,
        name: "Fauzan Husein",
        nim: "-",
        angkatan: 2018,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 4,
        name: "Muhammad Hidayat",
        nim: "-",
        angkatan: 2018,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 5,
        name: "Israil",
        nim: "-",
        angkatan: 2019,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 6,
        name: "Umniyah Ardi",
        nim: "-",
        angkatan: 2019,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 7,
        name: "Musdalifah",
        nim: "-",
        angkatan: 2019,
        status: "Alumni",
        researchInterest: "Komputasi"
    },
    {
        id: 8,
        name: "Faqihah Fajriani J.",
        nim: "-",
        angkatan: 2020,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 9,
        name: "Eka Hidayani Pabisi",
        nim: "-",
        angkatan: 2020,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 10,
        name: "Uei Sri Rahayu",
        nim: "-",
        angkatan: 2020,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 11,
        name: "Stevan Jonathan V. Situmorang",
        nim: "-",
        angkatan: 2020,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 12,
        name: "Sahrul Ardiansyah",
        nim: "-",
        angkatan: 2020,
        status: "Alumni",
        researchInterest: "-"
    },
    {
        id: 13,
        name: "Muh. Imam Ashshiddigie",
        nim: "-",
        angkatan: 2020,
        status: "-",
        researchInterest: "-"
    },

    // Angkatan 2021 (Alumni)
    {
        id: 14,
        name: "Hartini",
        nim: "-",
        angkatan: 2021,
        status: "-",
        researchInterest: "Condensed Matter Komputasi"
    },
    {
        id: 15,
        name: "Sastri",
        nim: "-",
        angkatan: 2021,
        status: "-",
        researchInterest: "-"
    },
    {
        id: 16,
        name: "Nur Syamsi Syam",
        nim: "-",
        angkatan: 2021,
        status: "Alumni",
        researchInterest: "Astrofisika Komputasi"
    },
    {
        id: 17,
        name: "Akmal Suratmi",
        nim: "-",
        angkatan: 2021,
        status: "-",
        researchInterest: "Condensed Matter"
    },
    {
        id: 18,
        name: "Salim Hidayatullah",
        nim: "-",
        angkatan: 2021,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 19,
        name: "Muhammad Ikhram",
        nim: "-",
        angkatan: 2021,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 20,
        name: "Misda",
        nim: "-",
        angkatan: 2021,
        status: "-",
        researchInterest: "-"
    },
    {
        id: 21,
        name: "Gulam Syuhada Nakib",
        nim: "-",
        angkatan: 2021,
        status: "Aktif",
        researchInterest: "-"
    },

    // Angkatan 2022 (Aktif)
    {
        id: 22,
        name: "Putra Ikhsan Pratama",
        nim: "-",
        angkatan: 2022,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 23,
        name: "Abdul Qadir Jailani",
        nim: "-",
        angkatan: 2022,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 24,
        name: "Husnul Fatimah",
        nim: "-",
        angkatan: 2022,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 25,
        name: "St. Nur Adnen A.",
        nim: "-",
        angkatan: 2022,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 26,
        name: "Fikri Lukman",
        nim: "-",
        angkatan: 2022,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 27,
        name: "Nadia Fitra",
        nim: "-",
        angkatan: 2022,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 28,
        name: "Algun Zainal Cipada",
        nim: "-",
        angkatan: 2022,
        status: "Aktif",
        researchInterest: "-"
    },

    // Angkatan 2023 (Aktif)
    {
        id: 29,
        name: "Elizabet",
        nim: "H021231003",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 30,
        name: "Elviana",
        nim: "H021231006",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 31,
        name: "Nurhaliza",
        nim: "H021231008",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 32,
        name: "Citra Fikriah Jamal",
        nim: "H021231010",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 33,
        name: "Santri",
        nim: "H021231012",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 34,
        name: "Yeni Estefani Parinding",
        nim: "H021231016",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 35,
        name: "Muhammad Ibrahim",
        nim: "H021231026",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 36,
        name: "Angga Anugrah",
        nim: "H021231006",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 37,
        name: "Deby Lebryawati",
        nim: "-",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    },
    {
        id: 38,
        name: "Nur Fadli Yoga",
        nim: "-",
        angkatan: 2023,
        status: "Aktif",
        researchInterest: "-"
    }
];

// Fungsi untuk menampilkan mahasiswa - SUDAH DIPERBAIKI
function displayStudents(students) {
    const studentsGrid = document.getElementById('studentsGrid');
    if (!studentsGrid) return;
    
    studentsGrid.innerHTML = '';

    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        
        studentCard.innerHTML = `
            <div class="student-name">${student.name}</div>
            <div class="student-nim">NIM: ${student.nim}</div>
            <div class="student-info">Angkatan: ${student.angkatan}</div>
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
    
    if (!searchInput || !yearFilter || !statusFilter) return;

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
    createStars();
    initDatabasePage();
});
