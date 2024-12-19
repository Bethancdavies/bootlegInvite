document.addEventListener('DOMContentLoaded', function() {

    const revealCode = document.getElementById('reveal-code');
    const hiddenCode = document.getElementById('hidden-code');
    revealCode.addEventListener('click', function() {
        hiddenCode.style.display = 'block';
    });
});