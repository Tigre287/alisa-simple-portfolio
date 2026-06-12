// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active CTA button highlighting based on scroll position
const ctaButtons = document.querySelectorAll('.cta-buttons .btn[data-cta]');
const sections = ['projects', 'about', 'contact'];

function updateActiveButton() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let activeSection = null;

    for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
            activeSection = id;
        }
    }

    ctaButtons.forEach(btn => {
        const btnSection = btn.getAttribute('data-cta');
        if (btnSection === activeSection) {
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary');
        } else {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
        }
    });
}

window.addEventListener('scroll', updateActiveButton);
window.addEventListener('load', updateActiveButton);
