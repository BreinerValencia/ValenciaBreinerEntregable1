document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#menu a');
    const spy = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id));
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('main > section').forEach(s => spy.observe(s));

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => { img.style.display = 'none'; });
    });

    document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());
    });
});
