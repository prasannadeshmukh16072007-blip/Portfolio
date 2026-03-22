// Theme Toggle Logic (Used on all pages)
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeToggleBtn.textContent = '🌙'; 
        } else {
            themeToggleBtn.textContent = '☀️'; 
        }
    });
}

// Email Logic (Used in index.html)
function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const subject = document.getElementById('senderSubject').value;
    const message = document.getElementById('senderMessage').value;

    const targetEmail = "prasannadeshmukh16072007@gmail.com"; 

    const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
}

// Drawer Animation Logic (Used in modules.html)
function openDrawer(dayNumber) {
    const contents = document.querySelectorAll('.day-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.day-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetContent = document.getElementById(`content-${dayNumber}`);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    if (buttons[dayNumber - 1]) {
        buttons[dayNumber - 1].classList.add('active');
    }
}