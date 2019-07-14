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
