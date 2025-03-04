document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
    });
});
