//detect click of mouse
function mouseClick(){
    makeSound(this.innerHTML);
}

//add event listener to all drums of click to mouseClick function
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", mouseClick);
}

//add event listener to the whole document to detect for key press and call the function which calls makeSound function
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    // console.log(event);
})
//function which is parameter for higher order function is called callback function.

//function to make sound by click or keypress, takes key parameter
function makeSound(key){
    switch (key) {
        case "w": 
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
            break;
        case "a": 
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
            break;
        case "s": 
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
            break;
        case "d": 
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
            break;
        case "j": 
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
            break;
        case "k": 
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
            break;
        case "l": 
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
            break;
        default:
            break;
    }
}