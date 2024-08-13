const reference = document.getElementById("reference");
const line = document.getElementById("line");

// const work = document.getElementById("work");
// const workline = document.querySelector(".workline")

reference.addEventListener("mouseover",function () {
    line.style.background = "red";
    line.style.width = "150px";
    line.style.transition = "all 0.5s";
});
reference.addEventListener("mouseover",function () {
    line.style.background = "#FFCA05";
    line.style.width = "50px";
    line.style.transition = "all 0.5s";
});

// work.addEventListener("mouseover", function () {
//     workline.style.background = "red";
//     workline.style.width = "150px";
//     workline.style.transition = "all 0.5s "
// });
// work.addEventListener("mouseover", function () {
//     workline.style.background = "#FFCA05";
//     workline.style.width = "50px";
//     workline.style.transition = "all 0.8s "
// })



