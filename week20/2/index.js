document.addEventListener("DOMContentLoaded", function (event) {
  
fetch('https://api.nasa.gov/planetary/apod?api_key=1PmGMa75hCmBHTCNfjxabuhMbQHaes4kVJd8Mr3h')
  .then(response => response.json())
  .then(galaxy => {
    document.querySelector('.title').innerHTML = galaxy.title;
    document.querySelector('.date').innerHTML = galaxy.date;
    document.querySelector('.description').innerHTML = galaxy.explanation;
    document.querySelector('.img').src = galaxy.hdurl;
})

});