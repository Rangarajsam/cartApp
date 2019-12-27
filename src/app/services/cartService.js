import generalConstants from '../constants/generalConstants';

export const getItemsFromDb = (callback) => {
    const url = generalConstants.apiUrl;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        callback && callback(data);
    })
    .catch(error => console.log('error',error))
}