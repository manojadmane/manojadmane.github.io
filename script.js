// Mobile navigation
const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
    menu.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// Dark mode toggle
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
    const applyThemeIcon = () => {
        const isDark = document.body.classList.contains("dark");
        themeBtn.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    };

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
    applyThemeIcon();

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
        applyThemeIcon();
    });
}

// Close mobile navigation after choosing a section
document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
        if (navbar) navbar.classList.remove("active");
    });
});
