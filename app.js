let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
let div1 = document.querySelector("#div1");


i1.addEventListener("click", function(){
    div1.scrollBy(-300,0)
});


i2.addEventListener("click", function(){
    div1.scrollBy(300,0)
});


document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        // Scrolling down
        div1.scrollBy(-300,0)
        console.log("Scrolled down");
        // Do something when scrolling down
    } else if (event.deltaY < 0) {
        // Scrolling up
        div1.scrollBy(300,0)
        console.log("Scrolled up");
        // Do something when scrolling up
    }
});
