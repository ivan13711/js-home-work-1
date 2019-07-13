var left = document.getElementById('left');
var right = document.getElementById('right');

var number = document.getElementById('number');
number.innerHTML = 1;
left.addEventListener('click', function(i,n){
  var picture = document.getElementsByClassName('picture');
for (var i = 0; i < picture.length; ++i){
if (picture[i].classList.contains("hidden")){
   picture[i] .classList.remove("hidden");}
 else {
    picture[i].classList.add("hidden");
   }

}
var n = i+1;
number.innerHTML = n;
});
