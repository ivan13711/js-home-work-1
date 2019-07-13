var slide = document.querySelector('#slide . slide');
var currentSlide = 0;
function goToSlide(x) {
  slide[currentSlide].className = 'slide';
  currentSlide = (x+slide.langth)% slide.length;
  slide[currentSlide].className = 'slide showing';
}
function nextSlide(){
  goToSlide(currentSlide+1);

}
function prevSlide(){
  goToSlide(currentSlide-1);

}
var next = document.getElementById('next');
var prev= document.getElementById('prev');

next.conclick = function (){
  nextSlide()
};
prev.conclick = function (){
  prevtSlide()
};
