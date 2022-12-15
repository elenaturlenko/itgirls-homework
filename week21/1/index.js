function getGif() {

  let searchValue=document.querySelector(".search").value;
  let api_key="IxdZXMElSNTw3KAXgkCjqI9YW1uqaYsd";

  document.querySelector(".container").innerHTML = "";

  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchValue}&limit=5&offset=0&rating=g&lang=ru`)
  .then(response=>response.json())
  .then(gif => {
      for (let i = 0; i < gif.length ; i++) {
          let img = gif[i];
          document.querySelector(".container").innerHTML += `<img src="${img}" alt="gif">`;
      }
  })
  .catch(err => console.log(err));
}