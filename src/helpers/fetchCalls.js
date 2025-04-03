async function myFetch(url) {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        let data = await response.json()
        return data;
}

export  async function fetchHome() {
    return await myFetch('https://cd-static.bamgrid.com/dp-117731241344/home.json');
}

export async function fetchReq(reqId) {
    return await myFetch(`https://cd-static.bamgrid.com/dp-117731241344/sets/${reqId}.json`);
}