export function handleSidebarKeyEvents(event) {
    if (event.key === 'Escape') {
        toggleSidebar();
    } else {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowLeft':
                handlePreviousButtonNavigation(event);
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                handleNextButtonNavigation(event);
                break;
            case 'Enter':
            case ' ':
                handleButtonSelection(event);
                break;
            default:
                break;
        }
    }
}

function handlePreviousButtonNavigation(event) {
    navigateButton(-1);
}

function handleNextButtonNavigation(event) {
    navigateButton(1);
}

function navigateButton(direction) {
    const modal = document.getElementById('modal');
    const focusableElements = modal.querySelectorAll('.button');
    const currentFocusedElement = document.querySelector(':focus');
    const index = [...focusableElements].indexOf(currentFocusedElement);

    const nextIndex = (index + direction + focusableElements.length) % focusableElements.length;
    focusableElements[nextIndex].focus();
}

function toggleSidebar() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('visible');
    modal.setAttribute('aria-hidden', modal.classList.contains('visible') ? 'false' : 'true');
}

function handleButtonSelection(event) {
    if (event.target.classList.contains('close-btn')) {
        toggleSidebar();
    }
}
