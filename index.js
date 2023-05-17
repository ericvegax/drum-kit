
document.querySelectorAll(".drum").forEach((drum) => {
    drum.addEventListener("click", function () {
        playSpecifiedSound(this.classList[0]);
        animateButton(this.innerHTML);
    });
});

document.addEventListener("keypress", function (event) {
    playSpecifiedSound(event.key);
    animateButton(event.key);
});

function playSound(audio) {
    new Audio(audio).play().then();
}

function playSpecifiedSound(key) {
    switch (key) {
        case "w":
            playSound("sounds/tom-1.mp3");
            break;

        case "a":
            playSound("sounds/tom-2.mp3");
            break;

        case "s":
            playSound("sounds/tom-3.mp3");
            break;

        case "d":
            playSound("sounds/tom-4.mp3");
            break;

        case "j":
            playSound("sounds/snare.mp3");
            break;

        case "k":
            playSound("sounds/kick-bass.mp3");
            break;

        case "l":
            playSound("sounds/crash.mp3");
            break;
    }
}

function animateButton(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);

    activeButton.classList.add("pressed");

    setTimeout(() => activeButton.classList.remove("pressed"), 100);

    activeButton.style.animation = "keypressAnimation";
    activeButton.style.animationDuration = "0.5s";

    setTimeout(() => activeButton.style.animation = null, 100);
}

