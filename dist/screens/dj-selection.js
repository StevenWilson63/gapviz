/* ============================================================
   DJ PERSONALITY LOGIC — SIMPLE LOCALSTORAGE VERSION
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".dj-card");

    let djList = JSON.parse(localStorage.getItem("djList")) || [];
    let currentDJ = localStorage.getItem("currentDJ") || null;
    let selectedPersona = localStorage.getItem("selectedPersona") || null;

    /* INNER LINKS MAP */
    const innerLinks = {
        rock: document.getElementById("inner-rock"),
        cool: document.getElementById("inner-cool"),
        curator: document.getElementById("inner-curator"),
        spinner: document.getElementById("inner-spinner")
    };

    /* APPLY DYNAMIC DJ NAME + INNER LINK TEXT */
    if (currentDJ) {
        document.getElementById("title-rock").innerText = currentDJ;
        document.getElementById("title-cool").innerText = currentDJ;
        document.getElementById("title-curator").innerText = currentDJ;
        document.getElementById("title-spinner").innerText = currentDJ;

        Object.values(innerLinks).forEach(link => link.innerText = "Manage your DJ");
    } else {
        Object.values(innerLinks).forEach(link => link.innerText = "Create your DJ");
    }

    /* RESTORE SELECTED CARD */
    if (selectedPersona) {
        const activeCard = document.querySelector(`[data-persona="${selectedPersona}"]`);
        if (activeCard) activeCard.classList.add("active");
    }

    /* CARD CLICK HANDLING — SELECT PERSONA */
    cards.forEach(card => {
        card.addEventListener("click", () => {

            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            const persona = card.getAttribute("data-persona");
            localStorage.setItem("selectedPersona", persona);

            if (currentDJ) {
                localStorage.setItem("currentDJ", currentDJ);
            }
        });
    });

    /* INNER LINK CLICK — OPEN BUILDER */
    Object.entries(innerLinks).forEach(([persona, link]) => {
        link.addEventListener("click", (event) => {
            event.stopPropagation(); // don’t double‑trigger card click

            // Save which persona they’re building for (optional)
            localStorage.setItem("selectedPersona", persona);

            // Navigate to DJ builder screen
            window.location.href = "../dj-builder/dj-builder.html";
        });
    });
});

/* MANAGE YOUR DJS BOX — OPEN MANAGEMENT LIST */
function goManageDJ() {
    window.location.href = "../dj-management/dj-management.html";
}
