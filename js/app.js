window.addEventListener("scroll", function(event){
  var scroll = this.scrollY;
  var topli = document.getElementsByClassName('top-li-item');
  var botli = document.getElementsByClassName('bottom-li-item');

  if (scroll < 2){
    for(var i=0; i<topli.length; i++) { 
      topli[i].style.margin = "0 0 40px 0";
      topli[i].style.transition = "margin 200ms";
      botli[i].style.margin = "40px 0 0 0";
      botli[i].style.transition = "margin 200ms";
    }
  }
  else{
    for(var i=0; i<topli.length; i++) { 
      topli[i].style.margin = "0";
      botli[i].style.margin = "0";
    }
  }
});

