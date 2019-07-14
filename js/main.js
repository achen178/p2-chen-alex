var dropdown = document.getElementById('dropdown');
var content = document.getElementById('dropdown-content');

console.log(dropdown);
console.log(content);

dropdown.addEventListener("mouseover", function() {
  content.style.height = "200%"
});
dropdown.addEventListener("mouseout", function() {
  content.style.height = "0"
});

var randomImage = document.getElementById('random');
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        randomImage.src = apiResult.urls.regular;
        randomImage.alt = apiResult.description;
        console.log(apiResult.urls.regular);
        console.log(apiResult.alt_description);
    }
};
xmlhttp.open('GET', 'https://api.unsplash.com/photos/random?query=puppy', true);
xmlhttp.setRequestHeader("Accept-Version", "v1");
xmlhttp.setRequestHeader("Authorization", "Client-ID 88214824189e489877f43d8c762306537073bb530c9f02f62f4411bfad4ee6ed");
xmlhttp.send();
