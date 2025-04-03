export function handleSidebarToggle(event) {
    const sideNav = document.querySelector('.sidenav');
    if (event.key === 'Escape' && sideNav) {
        sideNav.classList.toggle('visible');
    }
}