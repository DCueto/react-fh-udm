const API_KEY = 'CQ6uk5Z0qWQ4t1kjoB2j6gTnXwDqiD67';

const gifsRandomEndpoint = "https://api.giphy.com/v1/gifs/random";
const stickersRandomEndpoint = "https://api.giphy.com/v1/stickers/random";


const request = fetch(`${gifsRandomEndpoint}?api_key=${API_KEY}`);
const response = request.then(resp => resp.json());

response
  .then(({data}) => {
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

  })
  .catch(console.warn);


