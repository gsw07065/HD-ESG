let s4conLi = document.querySelectorAll(".contents li");
let s4contxtLi = document.querySelectorAll(".con_txt li");

function my3(){
  s4conLi.forEach(function(v){
    v.classList.remove("on");
    v.querySelector("h3").classList.remove("on");
  });
  s4contxtLi.forEach(function(v){
    v.style.opacity="0";
  });
}
s4conLi[0].classList.add("on");
s4contxtLi[0].style.opacity="1";
s4conLi[0].querySelector("h3").classList.add("on");
s4conLi.forEach(function(v,k){
  v.onmouseenter = function(){
    my3();
    this.classList.add("on");
    s4contxtLi[k].style.opacity="1";
    v.querySelector("h3").classList.add("on");
  }
})



AOS.init();