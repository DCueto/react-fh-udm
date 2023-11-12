

// const getImagenPromesa = () => 
//   new Promise((resolve) => resolve('https://fjsdkfjslfjl.com'));


// getImagenPromesa().then(console.log);


const getImagen = async() => {

  const API_KEY = 'CQ6uk5Z0qWQ4t1kjoB2j6gTnXwDqiD67';
  const gifsRandomEndpoint = "https://api.giphy.com/v1/gifs/random";

  
  try{
    const request = await fetch(`${gifsRandomEndpoint}?api_key=${API_KEY}`);
    const {data} = await request.json();

    if(request.ok){
      const {url} = data.images.original;
      const img = document.createElement('img');
      img.src = url;

      document.body.append(img);
    }
  } catch (err){
    console.log(err);
  }

}

getImagen();


