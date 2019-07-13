var left = document.getElementById('left');
var right = document.getElementById('right');
var p1 = document.getElementById('picture1');
var p2 = document.getElementById('picture2');
var p3 = document.getElementById('picture3');
var number = document.getElementById('number');
number.innerHTML = 2;
   p2.classList.remove("hidden");
left.addEventListener('click', function(){
  if(p1.classList.contains("hidden") && p2.classList.contains("hidden")){
    p2.classList.remove("hidden");
    p3.classList.add("hidden");
    number.innerHTML = 2;
    }
    else if(p1.classList.contains("hidden") && p3.classList.contains("hidden")){
     p1.classList.remove("hidden");
     p2.classList.add("hidden");
      number.innerHTML = 1;
     }
    else if(p2.classList.contains("hidden") && p3.classList.contains("hidden")){
      p1.classList.add("hidden");
      p3.classList.remove("hidden");
      number.innerHTML = 3;
      }
    });
    right.addEventListener('click', function(){
      if(p1.classList.contains("hidden") && p2.classList.contains("hidden")){
         p1.classList.remove("hidden");
        p3.classList.add("hidden");
        number.innerHTML = 1;
        }
        else if(p1.classList.contains("hidden") && p3.classList.contains("hidden")){
         p2.classList.add("hidden");
          p3.classList.remove("hidden");
          number.innerHTML = 3;
         }
        else if(p2.classList.contains("hidden") && p3.classList.contains("hidden")){
          p1.classList.add("hidden");
          p2.classList.remove("hidden");
          number.innerHTML = 2;
          }
        });
