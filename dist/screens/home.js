/* ============================================================
   HOME BOX SELECTION (matches DJ Selection behaviour)
   ============================================================ */

const homeBoxes = document.querySelectorAll('.home-box');

homeBoxes.forEach(box => {
    box.addEventListener('click', () => {

        // Remove selection from all boxes
        homeBoxes.forEach(b => b.classList.remove('selected'));

        // Add selection to clicked box
        box.classList.add('selected');

        // Optional tick support (only works if you add .home-tick in HTML)
        const tick = box.querySelector('.home-tick');
        if (tick) tick.style.display = 'flex';

        // Hide ticks on all other boxes
        homeBoxes.forEach(b => {
            if (b !== box) {
                const t = b.querySelector('.home-tick');
                if (t) t.style.display = 'none';
            }
        });
    });
});


/* ============================================================
   NAV UNDERLINE SWITCHING (matches DJ Selection behaviour)
   ============================================================ */
const navItems = document.querySelectorAll('#bottom-nav .nav-item');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        if (index === 1) {
            window.location.href = 'dj-selection.html';
        }
    });
});


