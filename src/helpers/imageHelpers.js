export function setHandleBrokenImg() {
    const body = document.querySelector('body');
    body.addEventListener("error", (event) => {
        //handle failed tile images
        if(event.target.closest('.tile')) {
            event.target.style = "display:none;";
            event.target.parentElement.parentElement.classList.add('failed-image');
            
            const pElement = document.createElement('span');
            pElement.innerText = `${event.target.alt}`;
            event.target.parentElement.appendChild(pElement);
            event.target.remove();
        }
        
    }, true);
}

export function setHighResolutionImageLoadEvent() {
    document.querySelector('.highres').addEventListener('load', (event) => {
        event.target.classList.toggle('hide');
    });
}
