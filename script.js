const start = document.getElementById("start");
const score = document.getElementById("score");
const hole1 = document.getElementById("hole1");
const hole2 = document.getElementById("hole2");
const hole3 = document.getElementById("hole3");
const hole4 = document.getElementById("hole4");
const hole5 = document.getElementById("hole5");
const hole6 = document.getElementById("hole6");
const hole7 = document.getElementById("hole7");
const hole8 = document.getElementById("hole8");
const hole9 = document.getElementById("hole9");
const hole10 = document.getElementById("hole10");
const hole11 = document.getElementById("hole11");
const hole12 = document.getElementById("hole12");
const hole13 = document.getElementById("hole13");
const hole14 = document.getElementById("hole14");
let holes = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12, hole13, hole14];
const clock = document.getElementById("clock");
let ranNum2 = 0;
const count = () => {
    if (ranNum2 === 0) {
        score.innerHTML = parseInt(score.innerHTML) + 1;
    } else {
        score.innerHTML = parseInt(score.innerHTML) + 3;
    }
}


start.addEventListener("click", () => {
    start.innerHTML = "Start";
    clock.innerHTML = 15;
    score.innerHTML = 0
    const popper = setInterval(() => {
        if(clock.innerHTML <= 2) {
            clearInterval(popper);
        }
        let ranNum = Math.floor(Math.random() * 14);
        ranNum2 = Math.round(Math.random());
        console.log(ranNum);
        holes[ranNum].src = `./assets/dig${ranNum2}.png`;
        holes[ranNum].addEventListener("click", count)
        const vanish = setTimeout(() => {
            holes[ranNum].src = "./assets/hole.png";
            holes[ranNum].removeEventListener("click", count)
        }, 900)
    }, 1000)

    start.innerHTML = "Replay"
})