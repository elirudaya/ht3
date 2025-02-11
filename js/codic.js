document.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelectorAll(".mama1");

    box.forEach(function(mama1){
        mama1.addEventListener("click", function(){
        if(mama1.style.backgroundColor === "rgb(30, 30, 106)"){
            mama1.style.backgroundColor = "rgb(99, 6, 6)";
            mama1.style.margin = '5vw';
                console.log("change color");
        }
        else{
            mama1.style.backgroundColor = "rgb(30, 30, 106)";
            mama1.style.margin = '8vw';
            }
        });
    });
  });