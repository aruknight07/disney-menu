import { dataStore } from './datastores';

export function handleShowInformation(tile) {
    const { id } = tile.dataset;
    const show = dataStore.get(id);

    const modal = document.getElementById('modal');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('img.lowres').src = show.heroImgSrc;
    modal.querySelector('img.highres').src = show.heroImgSrc.replace(/([&?])width=[^&]*/g, '') + `&width=1000`
    modal.querySelector('img.highres').classList.add('hide');
    modal.classList.toggle('visible');
    modal.querySelector('h3').textContent = show.alt;
    modal.querySelector('.button.play').focus({preventScroll: true });
}
