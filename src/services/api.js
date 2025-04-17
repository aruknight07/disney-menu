import CollectionModel from "../model/collectionModel";
import LazyLoadSetModel from "../model/LazyLoadSetModel";

async function myFetch(url) {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        let data = await response.json()
        return data;
}

export async function fetchHome() {
    const data = await myFetch('https://cd-static.bamgrid.com/dp-117731241344/home.json');
    return new CollectionModel(data.data.StandardCollection);

}

export async function fetchReq(reqId) {
    const data = await myFetch(`https://cd-static.bamgrid.com/dp-117731241344/sets/${reqId}.json`);
    return new LazyLoadSetModel(data.data);
}