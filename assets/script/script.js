document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPage = window.location.pathname.split("/").pop(); // Dapatkan nama file halaman

    navLinks.forEach(link => {
        // Cocokkan hanya nama file tanpa mempedulikan lokasi
        if (link.getAttribute("href").split("/").pop() === currentPage) {
            link.classList.add("active");
        }
    });
});
