/* Mobile hamburger menu. Kept in its own file so errors thrown by the other
   page scripts cannot stop it from running. */

(function () {
    // Keep this query in sync with the mobile nav block in styles/responsive.css
    const MOBILE_NAV = '(max-width: 640px), (max-height: 500px) and (orientation: landscape) and (pointer: coarse)';

    const nav = document.getElementById('nav');
    const toggle = document.querySelector('.nav-toggle');
    if (!nav || !toggle) return;

    const links = document.getElementById('links');
    const mobileQuery = window.matchMedia(MOBILE_NAV);

    function setOpen(open) {
        nav.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        setOpen(!nav.classList.contains('open'));
    });

    // Close after tapping any link in the menu (including Contact Me, whose
    // own click handler in modal.js still opens the modal).
    if (links) {
        links.addEventListener('click', (event) => {
            if (event.target.closest('a') && nav.classList.contains('open')) {
                setOpen(false);
            }
        });
    }

    // Close on a tap outside the nav. A listener is used rather than
    // window.onclick so modal.js's handler is left untouched.
    document.addEventListener('click', (event) => {
        if (nav.classList.contains('open') && !nav.contains(event.target)) {
            setOpen(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && nav.classList.contains('open')) {
            setOpen(false);
            toggle.focus();
        }
    });

    // Close when the window grows back past the mobile breakpoint.
    function onBreakpointChange(event) {
        if (!event.matches) setOpen(false);
    }
    if (mobileQuery.addEventListener) {
        mobileQuery.addEventListener('change', onBreakpointChange);
    } else {
        mobileQuery.addListener(onBreakpointChange); // older iOS Safari
    }
})();
