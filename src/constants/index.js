export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
        bl_lat: '34.480658',
        bl_lng: '25.73472',
        tr_lat: '42.527912',
        tr_lng: '44.865926',
        limit: '300'
    },
    headers: {
        'X-RapidAPI-Key': 'c50cc778d4msh4d30a172d99d8fep1f6c9bjsn2a451e0b8bbc',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
};

export const headerOpt = {
    headers: {
        'X-RapidAPI-Key': 'c50cc778d4msh4d30a172d99d8fep1f6c9bjsn2a451e0b8bbc',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    },
};