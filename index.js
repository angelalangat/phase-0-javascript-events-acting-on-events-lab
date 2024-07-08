const dodger = document.getElementById("dodger");


//build moveDodgerLeft() function
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

//wire it up to event listener
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


//function moveDodgerRight
function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers,10);

    if (left > 0){
        dodger.style.left = `${left + 1}px`;
    
    }
}

//event listiner
document.addEventListener("keydown", function (e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});

