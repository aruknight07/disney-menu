import { getShowInformationFromStore, getShowInformationByType } from './helpers';

export function handleShowInformation(tile) {
    const { id, type } = tile.dataset;
    const show = getShowInformationFromStore(id, type);
    const showInfo = getShowInformationByType(show, type);

    const sideNav = document.querySelector('.sidenav');
    sideNav.querySelector('img.lowres').src = showInfo.heroImgSrc;
    sideNav.querySelector('img.highres').src = showInfo.heroImgSrc.replace(/([&?])width=[^&]*/g, '') + `&width=1000`
    sideNav.querySelector('img.highres').classList.add('hide');
    document.querySelector('.sidenav').classList.toggle('visible');
    document.querySelector('.sidenav h3').textContent = showInfo.alt;
}
