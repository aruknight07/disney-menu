export function handleSidebarKeyEvents(event) {
    if (event.key === 'Escape') {
        toggleSidebar();
    }
}

function toggleSidebar() {
    document.querySelector('.sidenav').classList.toggle('visible');
}
