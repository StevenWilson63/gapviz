function goHome() {
    window.location.href = "home.html";
}

function goDJ() {
    window.location.href = "dj-selection.html";
}

function goLibrary() {
    window.location.href = "library.html";
}

function goIdentify() {
    window.location.href = "identify.html";
}

function goBack() {
    window.location.href = "home.html";
}

/* FULL CINEMATIC SEQUENCE */
document.getElementById("fp-wrapper").onclick = function () {

    const topText = document.getElementById("fp-top-text");
    const bottomText = document.getElementById("fp-bottom-text");
    const status = document.getElementById("fp-status");

    /* Step 1 — Tap disappears */
    topText.innerText = "";

    /* Step 2 — Unlock disappears, replaced with Listening */
    bottomText.innerText = "";
    status.innerText = "Listening…";

    /* Step 3 — We know the song */
    setTimeout(() => {
        status.innerText = "We know the song…";
    }, 1800);

    /* Step 4 — Unlocking the story */
    setTimeout(() => {
        status.innerText = "Unlocking the story…";
    }, 3500);

    /* Step 5 — Move to commentary screen */
    setTimeout(() => {
        window.location.href = "identify-story.html";
    }, 5200);
};
