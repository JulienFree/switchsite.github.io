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