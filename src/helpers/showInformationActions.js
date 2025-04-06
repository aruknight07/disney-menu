import { getShowInformationFromStore, getShowInformationByType } from './helpers';

export function handleShowInformation(tile) {
    const { id, type } = tile.dataset;
    const show = getShowInformationFromStore(id, type);
    const showInfo = getShowInformationByType(show, type);

    const modal = document.getElementById('modal');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('img.lowres').src = showInfo.heroImgSrc;
    modal.querySelector('img.highres').src = showInfo.heroImgSrc.replace(/([&?])width=[^&]*/g, '') + `&width=1000`
    modal.querySelector('img.highres').classList.add('hide');
    modal.classList.toggle('visible');
    modal.querySelector('h3').textContent = showInfo.alt;
    modal.querySelector('.button.play').focus({preventScroll: true });
}
