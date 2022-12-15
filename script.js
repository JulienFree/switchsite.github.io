const squareDemo = document.querySelector('.square');
var positionSquare=100;

  
document.addEventListener("keydown", function (event) {

    if (event.key == "ArrowLeft") {
        positionSquare-=10;
        squareDemo.style.marginLeft = positionSquare+"px";
    }else if(event.key == "ArrowRight"){
        positionSquare+=10;
        scaleX(-1);
        squareDemo.style.marginLeft = positionSquare+"px";
    }

  });

  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger= document.querySelector(".hamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");
  
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);
  
  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )