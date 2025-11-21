const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;
    followerX += distX * 0.1;
    followerY += distY * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}

animateFollower();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.skill-card, .contact-card, .stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        follower.style.transform = 'scale(1.5)';
        follower.style.borderColor = '#3b82f6';
    });
    card.addEventListener('mouseleave', function() {
        follower.style.transform = 'scale(1)';
        follower.style.borderColor = '#10b981';
    });
});
