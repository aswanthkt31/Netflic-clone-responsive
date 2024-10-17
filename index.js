// Scroll
let scrollContainer = document.querySelector(".card-container")
let backtBtn = document.getElementById("back");
let nextBtn = document.getElementById("next")

backtBtn.addEventListener("click", ()=>{
    // scrollContainer.style.scrollBehavior = "smooth"
    // scrollContainer.scrollLeft -= 2000;
    scrollContainer.scrollTo({
        left: 0,
        behavior: 'smooth',
    });
})

nextBtn.addEventListener("click", ()=>{
    // scrollContainer.scrollLeft += 1900;
    // scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollTo({
        left: scrollContainer.scrollWidth,
        behavior: 'smooth',
    });
})