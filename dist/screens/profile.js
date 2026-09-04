// Temporary mock data until Supabase integration
const user = {
    name: "Steven Wilson",
    phonetic: "Stee-ven",
    nickname: "Terminator",
    email: "steven@example.com",
    tier: "Free Trial",
    daysRemaining: 5,
    dj: "The Curator"
};

// Inject data into screen
document.getElementById("user-name").innerText = user.name;
document.getElementById("user-phonetic").innerText = user.phonetic;
document.getElementById("user-nickname").innerText = user.nickname;

document.getElementById("user-email").innerText = user.email;
document.getElementById("user-tier").innerText = user.tier;
document.getElementById("user-days").innerText = user.daysRemaining;

document.getElementById("dj-name").innerText = user.dj;

// Navigation
function goBack() {
    window.history.back();
}

function goToDJSelection() {
    window.location.href = "dj-selection.html";
}

// Actions
function openBilling() {
    window.open("https://gapviz.com/account", "_blank");
}

function changePassword() {
    alert("Password change coming in Phase 2");
}

function logout() {
    alert("Logout coming in Phase 2");
}

function deleteAccount() {
    alert("Delete account coming in Phase 2");
}

function toggleNotifications() {
    alert("Notifications coming in Phase 3");
}

function togglePlaybackMode() {
    alert("Playback mode coming in Phase 3");
}
