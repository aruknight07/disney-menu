class itemModel {
    constructor(item) {
      const parsedItem =  this.getItemInformationByType(item);
      Object.assign(this, { ...parsedItem });
    }

    //search for series/program/collection
    //type: "DmcSeries" //- series
    //type: "DmcVideo" //- program
    //type: "StandardCollection"
    getItemInformationByType(item) {
        const type = item.type;
        let id, alt, src, ratings, videoArt, releaseYear, heroImgSrc;
        switch (type) {
            case 'DmcSeries':
                id = item.seriesId;
                alt = item.text?.title?.full?.series?.default?.content;
                src = item.image?.tile["1.78"]?.series?.default?.url;
                heroImgSrc = item.image.hero_collection['1.78']?.series?.default?.url;
                ratings = item.ratings[0]?.value;
                videoArt = item?.videoArt[0]?.mediaMetadata?.urls[0];
                releaseYear = item.releases[0]?.releaseYear;
                break;
            case 'DmcVideo':
                id = item.programId;
                alt = item.text?.title?.full?.program?.default?.content;
                src = item.image?.tile["1.78"]?.program?.default?.url;
                heroImgSrc = item.image.hero_collection['1.78']?.program?.default?.url;
                ratings = item.ratings[0]?.value;
                videoArt = item?.videoArt[0]?.mediaMetadata?.urls[0];
                releaseYear = item.releases[0]?.releaseYear;
                break;
            case 'StandardCollection':
                id = item.collectionId;
                alt = item.text?.title?.full?.collection?.default?.content;
                src = item.image?.tile["1.78"]?.default?.default?.url;
                heroImgSrc = item.image.hero_collection['1.78']?.default?.default?.url;
                videoArt = item?.videoArt[0]?.mediaMetadata?.urls[0];
                break;
        }
        return { id, alt, src, heroImgSrc, ratings, videoArt, releaseYear, type };
    }
}

export default itemModel;