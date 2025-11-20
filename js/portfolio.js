// Initialize EmailJS
(function(){
    emailjs.init({
      publicKey: "3vKfHl_F8eO1j_0RR",
    });
 })();

// Download PDF Function
function downloadpdf() {
    const link = document.createElement('a');
    link.href = 'css/images/CV/Ethan.Perera_Resume.pdf'; 
    link.download = 'Ethan.Perera_CV.pdf'; 
    link.click(); 
}

// Mobile Menu Toggle
function toggleMenu(){
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("active");
}

// Typing Effect
const typingText = document.querySelector('.typing-text');
const words = ["Software Developer", "ML Engineer", "Data Scientist", "Automation Expert"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500); // Pause before new word
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);

// Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-el');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden-el');
hiddenElements.forEach((el) => observer.observe(el));

// Email Submission
function email_submit() {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('Email').value;
    const message = document.getElementById('Message').value;

    const btn = document.querySelector('.contact-form button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';

    const templateParams = {
        to_email: 'ethan.christoff@gmail.com',
        from_name: name, 
        message: message, 
        reply_to: email 
    };

    emailjs.send('service_rbgxt4h', 'template_99bnb6g', templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            document.querySelector('.contact-form').reset();
            btn.textContent = originalText;
        }, function(error) {
            alert('Failed to send message. Please try again.');
            btn.textContent = originalText;
            console.log('FAILED...', error);
        });

    return false; 
}

// Helper Functions
function announcement(){
    alert('This tool will be made public publicly soon!');
}

function openImage(img_num) {
    const images = [
        "css/images/promotional-esports-poster.jpg",
        "css/images/teaser-poster-tes.png",
        "css/images/t_shirt-design.png"
    ];
    if(images[img_num - 1]) {
        window.open(images[img_num - 1], '_blank');
    }
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.top = '10px';
        document.querySelector('.nav-container').style.background = 'rgba(5, 5, 5, 0.9)';
    } else {
        nav.style.top = '20px';
        document.querySelector('.nav-container').style.background = 'rgba(10, 10, 10, 0.7)';
    }
});

/* ==========================================
   PIXEL FLUID BACKGROUND ANIMATION
   ========================================== */
const canvas = document.getElementById('pixel-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Handle mouse interaction
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

// Create Particle (The Pixel)
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Method to draw individual pixel (square)
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size); // square shape for pixel theme
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Check particle position, check mouse position, move the particle, draw the particle
    update() {
        // Check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 2;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 2;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 2;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 2;
            }
        }
        
        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;
        
        // Draw particle
        this.draw();
    }
}

// Create particle array
function init() {
    particlesArray = [];
    // Number of particles proportional to screen size
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 3) + 1; // Size of pixel
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1) - 0.5; // Speed
        let directionY = (Math.random() * 1) - 0.5;
        let color = '#bc44fd'; // Your purple color

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// Draw lines between particles (The "Fluid" part)
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            // If close enough, draw a line
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance/20000);
                ctx.strokeStyle = 'rgba(188, 68, 253,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80) * (canvas.height/80));
    init();
});

init();
animate();