const search = document.querySelector("#search");
const movie = document.querySelectorAll(".film");
search.addEventListener("keyup", function(e){
  const word = e.target.value.toLowerCase();

  movie.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    
  })
})