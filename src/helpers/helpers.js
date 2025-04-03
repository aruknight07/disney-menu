//search for series/program/collection
//type: "DmcSeries" //- series
//type: "DmcVideo" //- program
//type: "StandardCollection"
import { programsStore, seriesStore, collectionsStore } from "./datastores";

export function saveShowInDataStore(show, type) {
    switch (type) {
        case 'DmcSeries':
            seriesStore.set(show.seriesId, show);
            break;
        case 'DmcVideo':
            programsStore.set(show.programId, show);
            break;
        case 'StandardCollection':
            collectionsStore.set(show.collectionId, show);
            break;
    }
}

export function getShowInformationByType(show, type) {
    let id, alt, src, ratings, videoArt, releaseYear, heroImgSrc;
    switch (type) {
        case 'DmcSeries':
            id = show.seriesId;
            alt = show.text?.title?.full?.series?.default?.content;
            src = show.image?.tile["1.78"]?.series?.default?.url;
            heroImgSrc = show.image.hero_collection['1.78']?.series?.default?.url;
            ratings = show.ratings[0]?.value;
            videoArt = show?.videoArt[0]?.mediaMetadata?.urls[0];
            releaseYear = show.releases[0]?.releaseYear;
            break;
        case 'DmcVideo':
            id = show.programId;
            alt = show.text?.title?.full?.program?.default?.content;
            src = show.image?.tile["1.78"]?.program?.default?.url;
            heroImgSrc = show.image.hero_collection['1.78']?.program?.default?.url;
            ratings = show.ratings[0]?.value;
            videoArt = show?.videoArt[0]?.mediaMetadata?.urls[0];
            releaseYear = show.releases[0]?.releaseYear;
            break;
        case 'StandardCollection':
            id = show.collectionId;
            alt = show.text?.title?.full?.collection?.default?.content;
            src = show.image?.tile["1.78"]?.default?.default?.url;
            heroImgSrc = show.image.hero_collection['1.78']?.default?.default?.url;
            videoArt = show?.videoArt[0]?.mediaMetadata?.urls[0];
            break;
    }
    return { id, alt, src, heroImgSrc, ratings, videoArt, releaseYear, type };
}

export function getShowInformationFromStore(id, type) {
    let show;
    switch (type) {
        case 'DmcSeries':
            show = seriesStore.get(id);
            break;
        case 'DmcVideo':
            show = programsStore.get(id);
            break;
        case 'StandardCollection':
            show = collectionsStore.get(id);
            break;
    }
    return show;
}
