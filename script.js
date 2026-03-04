document.addEventListener('DOMContentLoaded', () => {
    // Desktop Sidebar Toggle
    const toggleBtnDesktop = document.getElementById('sidebar-toggle-desktop');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    if (toggleBtnDesktop) {
        toggleBtnDesktop.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        });
    }

    // Mobile Sidebar Toggle
    const toggleBtnMobile = document.getElementById('sidebar-toggle-mobile');
    if (toggleBtnMobile) {
        toggleBtnMobile.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !toggleBtnMobile.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Accordion Menus
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function (e) {
            e.preventDefault();

            // If sidebar is collapsed and we click, maybe expand sidebar first
            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                mainContent.classList.remove('expanded');
            }

            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Submenu links active state
    const links = document.querySelectorAll('.accordion-content a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
