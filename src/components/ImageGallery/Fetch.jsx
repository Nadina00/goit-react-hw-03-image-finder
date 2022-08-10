export function fetchImage (nextName, page) {
    return fetch(`https://pixabay.com/api/?page=${page}&key=28114621-1bda22df542ac7e20c7c31167&image_type=photo&orientation=horizontal&per_page=12&q=${nextName}`)
    .then(res => {
        if(res.ok){
        return res.json()}
    return Promise.reject(new Error('Not found this images'))
    })
    .then(data => data.hits)
    .catch(error => console.log(error))}
    