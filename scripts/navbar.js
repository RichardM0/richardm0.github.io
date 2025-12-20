let toggled = false;
function responsiveNavBar() {
    const hamburger = document.getElementById("hamburger");
    if (toggled) {
        hamburger.style.display="none";
        toggled = false;
    }
    else{
        hamburger.style.display="flex";
        toggled = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('responsive-icon');
    const menu = document.getElementById('hamburger');
    const logo = document.getElementById('logo');

    if (toggle && menu) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const opening = !menu.classList.contains('open');
            menu.classList.toggle('open', opening);
            menu.setAttribute('aria-hidden', (!opening).toString());
            document.body.style.overflow = opening ? 'hidden' : '';
        });

        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.remove('open');
                menu.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            });
        });
    }

    if (logo) {
        logo.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, null, window.location.pathname);
            }
        });
    });
});