const parent=document.getElementById("parent");
const child=document.getElementById("child");
const btn=document.getElementById("button");
const input=document.getElementById("input");
btn.addEventListener("click", () => {
    let target = Number(input.value);
    if (target < 0) target = 0;
    if (target > 100) target = 100;
    let counter = 0;
    parent.style.setProperty("--deg", `0deg`);
    let Interval = setInterval(() => {
        if (counter >= target) {
            clearInterval(Interval);
        } else {
            counter++;
            let percentage = counter * 3.6;
            parent.style.setProperty("--deg", `${percentage}deg`);
            child.textContent = `${counter}%`;
        }
    }, 30);
});
