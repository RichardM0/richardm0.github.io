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

    // Handle hash on page load - scroll to section and remove hash
    if (window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.replaceState(null, null, window.location.pathname);
            }, 100);
        }
    }

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
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
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