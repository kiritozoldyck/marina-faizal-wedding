// Parallax Scroll Effect
const parallaxElements = document.querySelectorAll('[data-parallax]');

function updateParallax() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const parallaxValue = element.getAttribute('data-parallax');
        const yPos = scrolled * parallaxValue;
        element.style.transform = `translateY(${yPos}px)`;
    });
}

window.addEventListener('scroll', updateParallax);

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Smooth scroll for scroll button
const scrollBtn = document.querySelector('.btn-scroll');
if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const tentangSection = document.getElementById('tentang');
        tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvpForm');
const formMessage = document.getElementById('formMessage');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Ambil data form
        const formData = {
            nama: document.getElementById('nama').value,
            email: document.getElementById('email').value,
            telpon: document.getElementById('telpon').value,
            jumlah: document.getElementById('jumlah').value,
            kehadiran: document.querySelector('input[name="kehadiran"]:checked').value,
            pesan: document.getElementById('pesan').value
        };
        
        // Validasi
        if (!formData.nama || !formData.email || !formData.jumlah || !formData.kehadiran) {
            showMessage('Mohon isi semua field yang diperlukan!', 'error');
            return;
        }
        
        // Simulasi pengiriman
        // Dalam production, ini akan dikirim ke server/API
        console.log('RSVP Data:', formData);
        
        // Tampilkan pesan sukses
        showMessage('Terima kasih! RSVP Anda telah dikirim. Kami tunggu kehadiran Anda.', 'success');
        
        // Reset form
        rsvpForm.reset();
        
        // Hapus pesan setelah 5 detik
        setTimeout(() => {
            formMessage.classList.remove('success', 'error');
            formMessage.textContent = '';
        }, 5000);
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section-spacing > .container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Print function for undangan
function printInvitation() {
    window.print();
}

// Add print button dynamically
const footerContent = document.querySelector('.footer .container p');
if (footerContent) {
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> Cetak Undangan';
    printBtn.className = 'btn-print';
    printBtn.onclick = printInvitation;
    printBtn.style.cssText = `
        background: #87CEEB;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
        font-size: 14px;
        transition: all 0.3s ease;
    `;
    
    footerContent.parentNode.insertBefore(printBtn, footerContent.nextSibling);
}

// Initialize
window.addEventListener('load', () => {
    updateParallax();
    console.log('Website undangan nikah Marina & Imam loaded successfully!');
});
